package com.sea.domain.sale.dto;

import java.time.LocalDateTime;

import com.sea.domain.sale.db.entity.Sale;

public class SaleDto {
	int saleId;
	String saleContractAddress;
	int saleYn;
	String saleCashContractAddress;
	String saleSellerAddress;
	String saleBuyerAddress;
	LocalDateTime saleCreatedAt;
	LocalDateTime saleCompletedAt;
	int itemId;
	long saleStartTime;
	long saleEndTime;
	String itemTitle;
	double salePrice;
	String animalKoreanName;
	String itemImgUrl;

	public SaleDto(Sale sale) {
		this.saleId = sale.getSaleId();
		this.saleContractAddress = sale.getSaleContractAddress();
		this.saleYn = sale.getSaleYn();
		this.saleCashContractAddress = sale.getSaleCashContractAddress();
		this.saleSellerAddress = sale.getSaleSellerAddress();
		this.saleBuyerAddress = sale.getSaleBuyerAddress();
		this.saleCreatedAt = sale.getSaleCreatedAt();
		this.saleCompletedAt = sale.getSaleCompletedAt();
		this.itemId = sale.getFkItemId().getItemId();
		this.saleStartTime = sale.getSaleStartTime();
		this.saleEndTime = sale.getSaleEndTime();
		this.salePrice = sale.getSalePrice();
		this.itemTitle = sale.getFkItemId().getItemTitle();
		this.itemImgUrl = sale.getFkItemId().getItemImgUrl();
		this.animalKoreanName = sale.getFkItemId().getFkDonationId().getFkAnimalId().getAnimalKoreanName();
	}
}
