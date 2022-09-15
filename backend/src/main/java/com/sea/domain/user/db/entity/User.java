package com.sea.domain.user.db.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Table(name = "USER")
public class User {

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int userId;

	@Column(name = "user_role", length = 20)
	String userRole;

	@Column(name = "user_nickname", length = 45)
	String userNickname;

	@Column(name = "user_wallet_address", length = 100)
	String userWalletAddress;

	@Column(name = "user_profile_img", length = 200)
	String userProfileImg;

	@Column(name = "user_test_result", nullable = true)
	String userTestResult;

	public void updateTestResult(String userTestResult) {
		this.userTestResult = userTestResult;
	}
}
