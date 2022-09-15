package com.sea.domain.item.request;

import lombok.Getter;

@Getter
public class ItemUpdatePutReq {
	int itemId;
	double itePrice;
	String itemOwnerAddress;
}
