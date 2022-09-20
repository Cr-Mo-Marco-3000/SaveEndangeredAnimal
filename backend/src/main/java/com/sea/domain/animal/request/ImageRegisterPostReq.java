package com.sea.domain.animal.request;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ImageRegisterPostReq {
	int animalId;
	String animalEnglishName;
}
