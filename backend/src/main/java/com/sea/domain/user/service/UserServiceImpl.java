package com.sea.domain.user.service;

import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.db.repository.UserRepository;
import com.sea.domain.user.request.UserUpdateTestResultPutReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.util.Optional;

public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Value("${default.profileImg}")
    String defaultProfileImg;

    @Override
    public User getUserByAddress(String userWalletAddress) {
        Optional<User> user = userRepository.findUserByUserWalletAddress(userWalletAddress);

        if (user.isPresent()) {
            return user.get();
        } else {
            User newUser = User.builder().userNickname("noname").userRole("ROLE_USER").userWalletAddress(userWalletAddress).userProfileImg(defaultProfileImg).userTestResult(null).build();
            return userRepository.save(newUser);
        }
    }

    @Override
    public User updateTestResult(User user, UserUpdateTestResultPutReq testInfo) {
        user.updateTestResult(testInfo.getResult());

        return userRepository.save(user);
    }

    @Override
    public User getTestResultByUserId(int userId) {
        Optional<User> user = userRepository.findById(userId);

        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }
}
