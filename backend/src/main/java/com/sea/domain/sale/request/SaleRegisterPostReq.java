package com.sea.domain.sale.request;

import lombok.Getter;

@Getter
public class SaleRegisterPostReq {
	String saleContractAddress;
	String saleCashContractAddress;
	int saleStartTime;
	int saleEndTime;
	int itemId;
}
