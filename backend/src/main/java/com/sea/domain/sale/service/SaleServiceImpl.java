package com.sea.domain.sale.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sea.domain.item.db.entity.Item;
import com.sea.domain.item.db.repository.ItemRepository;
import com.sea.domain.sale.db.entity.Sale;
import com.sea.domain.sale.db.repository.SaleRepository;
import com.sea.domain.sale.dto.SaleDto;
import com.sea.domain.sale.request.SaleCancleDeleteReq;
import com.sea.domain.sale.request.SaleCompletePutReq;
import com.sea.domain.sale.request.SaleRegisterPostReq;
import com.sea.domain.user.db.entity.User;

@Service("saleService")
public class SaleServiceImpl implements SaleService {
	@Autowired
	ItemRepository itemRepository;

	@Autowired
	SaleRepository saleRepository;

	@Override
	public Sale createSale(SaleRegisterPostReq registerInfo) {
		
		Item item = itemRepository.findById(registerInfo.getItemId()).get();

		Sale sale = Sale.builder().saleContractAddress(registerInfo.getSaleContractAddress())
				.saleCashContractAddress(registerInfo.getSaleCashContractAddress())
				.saleSellerAddress(registerInfo.getWalletAddres()).saleStartTime(registerInfo.getSaleStartTime())
				.saleEndTime(registerInfo.getSaleEndTime()).fkItemId(item).build();

		return saleRepository.save(sale);
	}

	@Override
	public boolean deleteSale(SaleCancleDeleteReq cancleInfo) {
		Sale sale = saleRepository.findById(cancleInfo.getSaleId()).get();

		if (!sale.getSaleSellerAddress().equals(cancleInfo.getWalletAddress())) {
			return false;
		}

		saleRepository.delete(sale);
		;

		return true;
	}

	@Override
	public List<SaleDto> getSaleList() {
		List<Sale> sales = saleRepository.findAll();
		List<SaleDto> list = new ArrayList<SaleDto>();

		for (Sale sale : sales) {
			SaleDto dto = new SaleDto(sale);
			list.add(dto);
		}

		return list;
	}

	@Override
	public Sale updateSale(SaleCompletePutReq completeInfo) {
		Sale sale = saleRepository.findById(completeInfo.getSaleId()).get();

		sale.updateBuyerAddress(completeInfo.getSaleBuyerAddress());

		return saleRepository.save(sale);
	}

	@Override
	public SaleDto getSaleDetail(int saleNo) {
		Sale sale = saleRepository.findById(saleNo).get();
		
		return new SaleDto(sale);
	}

	@Override
	public List<SaleDto> getMySaleList(String userWalletAddress) {
		List<Sale> sales = saleRepository.findBySaleSellerAddressAndSaleYn(userWalletAddress, 1).orElse(null);
		List<SaleDto> list = new ArrayList<SaleDto>();

		for (Sale sale : sales) {
			SaleDto dto = new SaleDto(sale);
			list.add(dto);
		}

		return list;
	}
}