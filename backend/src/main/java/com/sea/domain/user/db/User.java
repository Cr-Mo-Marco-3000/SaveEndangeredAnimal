package com.sea.domain.user.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USER")
public class User {

	@Id
	@Column(name = "user_no")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int userNo;

	@Column(name = "user_nickname", length = 45)
	String userNickname;

	@Column(name = "user_wallet_address", length = 100)
	String userWalletAddress;

	@Column(name = "user_profile_img", length = 200)
	String userProfileImg;

	@Column(name = "user_test_result")
	String userTestResult;
}
