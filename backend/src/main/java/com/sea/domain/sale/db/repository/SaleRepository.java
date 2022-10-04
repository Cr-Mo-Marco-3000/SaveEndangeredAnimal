package com.sea.domain.sale.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sea.domain.item.db.entity.Item;
import com.sea.domain.sale.db.entity.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Integer>{

	Optional<List<Sale>> findBySaleSellerAddressAndSaleYnAndSaleEndTimeGreaterThan(String userWalletAddress, int i, long now);
	Optional<List<Sale>> findBySaleYnAndSaleEndTimeGreaterThan(int i, long now);
	Optional<Sale> findByFkItemIdAndSaleSellerAddress(Item itemId, String saleSellerAddress);
	
}
