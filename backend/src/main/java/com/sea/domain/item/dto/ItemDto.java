package com.sea.domain.item.dto;

import com.sea.domain.item.db.entity.Item;

import io.swagger.annotations.ApiModel;
import lombok.Getter;

@Getter
@ApiModel("ItemDto")
public class ItemDto {
	int itemId;
	
	String itemImgUrl;
	
	String itemTokenId;
	
	String itemOwnerAddress;
	
	int donationId;
	
	String itemTitle;
	
	double itemPrice;
	int animalEndangeredLevel;

	String animalKoreanName;
	
	public ItemDto(Item item) {
		this.itemId = item.getItemId();
		this.itemImgUrl = item.getItemImgUrl();
		this.itemTokenId = item.getItemTokenId();
		this.itemOwnerAddress = item.getItemOwnerAddress();
		this.donationId = item.getFkDonationId().getDonationId();
		this.itemTitle = item.getItemTitle();
		this.itemPrice = item.getItemPrice();
		this.animalKoreanName = item.getFkDonationId().getFkAnimalId().getAnimalKoreanName();
		this.animalEndangeredLevel = item.getFkDonationId().getFkAnimalId().getAnimalEndangeredLevel();
	}
}
