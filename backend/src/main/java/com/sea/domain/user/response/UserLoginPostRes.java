package com.sea.domain.user.response;

import com.sea.common.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@ApiModel("UserLoginPostRes")
public class UserLoginPostRes extends BaseResponseBody {
    String accessToken;
    int userId;
    String userNickname;
    public static UserLoginPostRes of(Integer statusCode, String message, String accessToken, Integer userId, String userNickname) {
        UserLoginPostRes res = new UserLoginPostRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAccessToken(accessToken);
        res.setUserId(userId);
        res.setUserNickname(userNickname);
        return res;
    }
}