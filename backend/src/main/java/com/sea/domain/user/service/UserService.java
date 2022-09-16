package com.sea.domain.user.service;

import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.request.UserUpdateTestResultPutReq;

public interface UserService {
	User getUserByAddress(String address);

    User updateTestResult(User user, UserUpdateTestResultPutReq testInfo);

    User getTestResultByUserId(int userId);
}
