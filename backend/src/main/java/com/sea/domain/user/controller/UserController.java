package com.sea.domain.user.controller;

import com.sea.common.auth.UserDetails;
import com.sea.common.model.response.BaseResponseBody;
import com.sea.common.util.CookieUtil;
import com.sea.common.util.JwtTokenUtil;
import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.request.UserLoginPostReq;
import com.sea.domain.user.request.UserUpdateTestResultPutReq;
import com.sea.domain.user.response.UserLoginPostRes;
import com.sea.domain.user.response.UserTestResultGetRes;
import com.sea.domain.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import org.jboss.logging.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.CookieGenerator;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private CookieUtil cookieUtil;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@ApiOperation(value = "로그인")
	@PostMapping("/login")
	@ApiResponses({ @ApiResponse(code = 201, message = "성공", response = UserLoginPostRes.class),
			@ApiResponse(code = 401, message = "Incorrect Wallet") })
	public ResponseEntity<? extends BaseResponseBody> login(@RequestBody UserLoginPostReq loginInfo,
			HttpServletResponse response) {
		log.info("userLogin - Call");

		String userAddress = loginInfo.getWalletAddress();
		Integer addressLength = userAddress.length();

		// 올바른 지갑 주소인지 확인
		if (!addressLength.equals(42)) {
			return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Incorrect Wallet", null, null, null));
		} else {
			User user = userService.getUserByAddress(userAddress);
			// 토큰
			final String accessJwt = JwtTokenUtil.createAccessToken(user.getUserId(), user.getUserWalletAddress());
			final String refreshJwt = JwtTokenUtil.createRefreshToken();

			CookieGenerator cg = new CookieGenerator();
			cg.setCookieName(JwtTokenUtil.ACCESS_TOKEN_NAME);
			cg.setCookieMaxAge(JwtTokenUtil.accessTokenExpiration);
			cg.addCookie(response, accessJwt);

			cg = new CookieGenerator();
			cg.setCookieName(JwtTokenUtil.REFRESH_TOKEN_NAME);
			cg.setCookieMaxAge(JwtTokenUtil.refreshTokenExpiration);
			cg.addCookie(response, refreshJwt);

			/*
			 * // 쿠키 Cookie accessToken =
			 * cookieUtil.createCookie(JwtTokenUtil.ACCESS_TOKEN_NAME, accessJwt); Cookie
			 * refreshToken = cookieUtil.createCookie(JwtTokenUtil.REFRESH_TOKEN_NAME,
			 * refreshJwt);
			 * 
			 * log.info("cookie 생성[id : {}, value : {}]", accessToken.getName(),
			 * accessToken.getValue()); log.info("cookie 생성[id : {}, value : {}]",
			 * refreshToken.getName(), refreshToken.getValue());
			 * 
			 * response.addCookie(accessToken); response.addCookie(refreshToken);
			 */

			return ResponseEntity.status(201)
					.body(UserLoginPostRes.of(201, "Success", accessJwt, user.getUserId(), user.getUserNickname()));
		}
	}

	@ApiOperation(value = "나를 표현하기")
	@PutMapping("/test-result")
	@ApiResponses({ @ApiResponse(code = 204, message = "성공"), @ApiResponse(code = 400, message = "존재하지 않는 유저입니다.") })
	public ResponseEntity<? extends BaseResponseBody> updateTestResult(@ApiIgnore Authentication authentication,
			@RequestBody List<String> list) {
		UserDetails userDetails = (UserDetails) authentication.getDetails();
		User user = userDetails.getUser();

		try {
			userService.updateTestResult(user, list);
		} catch (Exception e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "존재하지 않는 유저입니다."));
		}
		return ResponseEntity.status(204).body(BaseResponseBody.of(200, "Success"));
	}

	@ApiOperation(value = "검사 결과 얻기")
	@GetMapping("/test-result")
	@ApiResponses({ @ApiResponse(code = 204, message = "성공"), @ApiResponse(code = 400, message = "존재하지 않는 유저입니다.") })
	public ResponseEntity<? extends BaseResponseBody> getTestResult(@ApiIgnore Authentication authentication) {
		UserDetails userDetails = (UserDetails) authentication.getDetails();
		User user = userDetails.getUser();

		user = userService.getTestResultByUserId(user.getUserId());

		if (user == null) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "존재하지 않는 유저입니다."));
		}
		return ResponseEntity.status(200).body(UserTestResultGetRes.of(200, "Success", user.getUserTestResult()));
	}
}
