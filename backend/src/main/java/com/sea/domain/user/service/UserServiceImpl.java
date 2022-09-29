package com.sea.domain.user.service;

import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.db.repository.UserRepository;
import com.sea.domain.user.request.UserUpdateTestResultPutReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("userService")
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
            User newUser = User.builder().userNickname("noname").userRole("ROLE_USER").userWalletAddress(userWalletAddress).userProfileImg(defaultProfileImg).build();
            return userRepository.save(newUser);
        }
    }

    @Override
    public void updateTestResult(UserUpdateTestResultPutReq updateInfo) {
    	User user = userRepository.findUserByUserWalletAddress(updateInfo.getWalletAddress()).get();
    	
        user.updateTestResult(updateInfo.getList());

        userRepository.save(user);
    }

    @Override
    public List<String> getTestResultByUserId(String walletAddress) {
        Optional<User> user = userRepository.findUserByUserWalletAddress(walletAddress);

        if (user.isPresent()) {
            return user.get().getUserTestResult();
        } else {
            return null;
        }
    }
}
