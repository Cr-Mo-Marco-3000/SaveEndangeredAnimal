package com.sea.domain.animal.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.sea.domain.animal.db.entity.Animal;
import com.sea.domain.animal.dto.AnimalDto;
import com.sea.domain.animal.dto.AnimalNameDto;
import com.sea.domain.animal.dto.MyAnimalDto;
import com.sea.domain.animal.request.AnimalRegisterPostReq;
import com.sea.domain.user.db.entity.User;

public interface AnimalService {

	Page<AnimalDto> getAnimalList(Pageable pageable); // 상품 전체 조회
	
	List<AnimalNameDto> getAnimalListByName();
	
	AnimalDto animalDetail(int animalId); // 상품 상세 조회
	
	List<MyAnimalDto> getMyAnimalListByUserName(User user);

	Animal registerAnimal(AnimalRegisterPostReq registerInfo);
}
