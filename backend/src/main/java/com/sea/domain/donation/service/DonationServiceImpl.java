package com.sea.domain.donation.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sea.domain.animal.db.entity.Animal;
import com.sea.domain.animal.db.repository.AnimalRepository;
import com.sea.domain.donation.db.entity.Donation;
import com.sea.domain.donation.db.repository.DonationRepository;
import com.sea.domain.donation.dto.MyDonationDto;
import com.sea.domain.donation.request.DonationRegisterPostReq;
import com.sea.domain.user.db.entity.User;
import com.sea.domain.user.db.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Service
public class DonationServiceImpl implements DonationService {

	@Autowired
	AnimalRepository animalRepository;

	@Autowired
	DonationRepository donationRepository;
	
	@Autowired
	UserRepository userRepository;

	@Override
	public List<MyDonationDto> getDonationList(int userId) {
		User user = userRepository.findById(userId).get();
		List<Donation> donations = donationRepository.findByFkUserId(user).get();

		List<MyDonationDto> list = new ArrayList<>();

		for (Donation donation : donations) {
			MyDonationDto donationDto = new MyDonationDto(donation);
			list.add(donationDto);
		}

		return list;

	}

	@Override
	public Donation createDonation(DonationRegisterPostReq registerInfo, int userId) {
		Animal animal = animalRepository.findByAnimalId(registerInfo.getAnimalId()).get();
		User user = userRepository.findById(userId).get();

		Donation donation = Donation.builder().donationAmount(registerInfo.getDonationAmount())
				.donationStatusCode(registerInfo.getDonationStatusCode())
				.donationTransactionHash(registerInfo.getDonationTransactionHash()).fkUserId(user).fkAnimalId(animal)
				.build();

		return donationRepository.save(donation);
	}
}
