package com.sea.domain.user.response;

import com.sea.common.model.response.BaseResponseBody;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserTestResultGetRes extends BaseResponseBody {
    String testResult;

    public static UserTestResultGetRes of(Integer statusCode, String message, String testResult) {
        UserTestResultGetRes res = new UserTestResultGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setTestResult(testResult);
        return res;
    }
}
