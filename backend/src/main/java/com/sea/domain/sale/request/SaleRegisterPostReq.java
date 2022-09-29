package com.sea.domain.sale.request;

import lombok.Getter;

import java.math.BigInteger;

@Getter
public class SaleRegisterPostReq {
	String walletAddres;
	String saleContractAddress;
	String saleCashContractAddress;
	long saleStartTime;
	long saleEndTime;
	int itemId;
	double salePrice;
}
