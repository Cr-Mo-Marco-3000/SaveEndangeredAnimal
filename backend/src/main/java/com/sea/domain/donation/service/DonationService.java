package com.sea.domain.donation.service;

import java.util.List;

import com.sea.domain.donation.db.entity.Donation;
import com.sea.domain.donation.dto.MyDonationDto;
import com.sea.domain.donation.request.DonationRegisterPostReq;
import com.sea.domain.user.db.entity.User;

public interface DonationService {

	List<MyDonationDto> getDonationList(User user);
	Donation createDonation(DonationRegisterPostReq registerInfo, User user);
	
}
