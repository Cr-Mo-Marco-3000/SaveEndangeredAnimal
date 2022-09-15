package com.sea.domain.donation.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.sea.domain.donation.db.entity.Donation;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("MyDonationDto")
public class MyDonationDto {
	
	double donationAmount;
	
	LocalDateTime donationCreatedAt;
	
	String animalName;
	
	String donationStatusCode;
	
	public MyDonationDto(Donation donation) {
		donationAmount = donation.getDonationAmount();
		donationCreatedAt = donation.getDonationCreatedAt();
		animalName = donation.getFkAnimalId().getAnimalKoreanName(); //한글? 영어?
		donationStatusCode = donation.getDonationStatusCode();
	}
}
