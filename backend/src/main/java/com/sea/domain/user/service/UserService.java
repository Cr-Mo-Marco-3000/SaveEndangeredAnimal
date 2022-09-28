package com.sea.domain.user.service;

import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.request.UserUpdateTestResultPutReq;

import java.util.List;

public interface UserService {
	User getUserByAddress(String address);

    void updateTestResult(UserUpdateTestResultPutReq updateInfo);

    List<String> getTestResultByUserId(String walletAddress);
}
