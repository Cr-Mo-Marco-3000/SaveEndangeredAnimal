package com.sea.domain.item.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sea.common.auth.UserDetails;
import com.sea.common.model.response.BaseResponseBody;
import com.sea.domain.item.db.entity.Item;
import com.sea.domain.item.dto.ItemDto;
import com.sea.domain.item.request.ItemRegisterPostReq;
import com.sea.domain.item.request.ItemUpdatePutReq;
import com.sea.domain.item.response.ItemListGetRes;
import com.sea.domain.item.service.ItemService;
import com.sea.domain.user.db.entity.User;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;
import springfox.documentation.annotations.ApiIgnore;

@Slf4j
@RestController
@RequestMapping("/api/v1/item")
public class ItemController {

	@Autowired
	ItemService itemService;
	
	@ApiOperation(value = "작품 등록")
	@PostMapping()
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공", response = BaseResponseBody.class),
		@ApiResponse(code = 400, message = "실패", response = BaseResponseBody.class),
		})
	public ResponseEntity<? extends BaseResponseBody> registerItem(@RequestBody ItemRegisterPostReq registerInfo, @ApiIgnore Authentication authentication) {

		UserDetails userDetails = (UserDetails) authentication.getDetails();
		User user = userDetails.getUser();
		
		try {
			itemService.registerItem(registerInfo,user.getUserWalletAddress());
		} catch (Exception e) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Failed"));
		}

		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@ApiOperation(value = "작품 수정")
	@PutMapping()
	@ApiResponses({
		@ApiResponse(code = 200, message = "성공", response = BaseResponseBody.class),
		@ApiResponse(code = 400, message = "실패", response = BaseResponseBody.class),
		})
	public ResponseEntity<? extends BaseResponseBody> updateItem(@RequestBody ItemUpdatePutReq updateInfo){
		Item item = itemService.updateItem(updateInfo);
		
		return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
	}
	
	@ApiOperation(value = "내 작품 조회")
	@GetMapping()
	@ApiResponses({ @ApiResponse(code = 200, message = "성공", response = ItemDto.class), })
		public ResponseEntity<? extends BaseResponseBody> getDonationList(@ApiIgnore Authentication authentication, @RequestParam String type) {
			
			List<ItemDto> list = new ArrayList<>();
			
			if ("ALL".equals(type))
				list = itemService.getItemList();
			else {
				UserDetails userDetails = (UserDetails) authentication.getDetails();
				User user = userDetails.getUser();
				
				list = itemService.getMyItemList(user.getUserWalletAddress());
				}
			
			return ResponseEntity.status(200).body(ItemListGetRes.of(200, "Success", list));

	}
}
