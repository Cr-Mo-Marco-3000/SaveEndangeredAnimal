package com.sea.common.auth;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.sea.common.util.CookieUtil;
import com.sea.common.util.JwtTokenUtil;
import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.service.UserService;

import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

/**
 * 요청 헤더에 jwt 토큰이 있는 경우, 토큰 검증 및 인증 처리 로직 정의.
 */
@Slf4j
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	@Autowired
	private UserService userService;

	@Autowired
	private CookieUtil cookieUtil;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		final Cookie accessCookie = cookieUtil.getCookie(request, jwtTokenUtil.ACCESS_TOKEN_NAME);

		String userAddress = null;
		String accessToken = null;
		String refreshToken = null;

		try {
			if (accessCookie != null) {
				accessToken = accessCookie.getValue();

				userAddress = jwtTokenUtil.getUserAddress(accessToken);
			}
			if (userAddress != null) { // Access token이 유효하면 AccessToken내 payload를 읽어 사용자와 관련있는 userDetail 생성
				log.info("jwt - access token 유효");
				// jwt 토큰에 포함된 계정 정보(userAddress) 통해 실제 디비에 해당 정보의 계정이 있는지 조회.
				User user = userService.getUserByAddress(userAddress);

				UserDetails userDetails = new UserDetails(user);
				if (jwtTokenUtil.verify(accessToken).isResult()) {
					// 식별된 정상 유저인 경우, 요청 context 내에서 참조 가능한 인증 정보(jwtAuthentication) 생성.
					UsernamePasswordAuthenticationToken jwtAuthentication = new UsernamePasswordAuthenticationToken(
							user.getUserId(), null, AuthorityUtils.createAuthorityList(user.getUserRole()));
					jwtAuthentication.setDetails(userDetails);
					// jwt 토큰으로 부터 획득한 인증 정보(authentication) 설정.
					SecurityContextHolder.getContext().setAuthentication(jwtAuthentication);
				}
			}
		} catch (ExpiredJwtException e) { // Access token이 유효하지 않으면 Refresh Token 값을 읽어드림
			log.info("jwt - access token 유효하지 않아서 refresh token 값 가져오기");
			Cookie refreshCookie = cookieUtil.getCookie(request, jwtTokenUtil.REFRESH_TOKEN_NAME);
			if (refreshToken != null) {
				refreshToken = refreshCookie.getValue();
			}
		} catch (Exception e) {
			
		}

		filterChain.doFilter(request, response);
	}
}
