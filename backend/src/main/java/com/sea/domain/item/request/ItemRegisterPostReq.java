package com.sea.domain.item.request;

import lombok.Getter;

@Getter
public class ItemRegisterPostReq {
	String itemImgUrl;
	String itemTokenId;
	int donationId;
	String itemTitle;
	double itemPrice;
}
