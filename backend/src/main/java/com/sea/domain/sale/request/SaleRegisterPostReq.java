package com.sea.domain.sale.request;

import lombok.Getter;

@Getter
public class SaleRegisterPostReq {
	String walletAddres;
	String saleContractAddress;
	String saleCashContractAddress;
	int saleStartTime;
	int saleEndTime;
	int itemId;
	double salePrice;
}
