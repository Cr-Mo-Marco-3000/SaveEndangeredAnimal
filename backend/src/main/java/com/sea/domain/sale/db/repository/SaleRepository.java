package com.sea.domain.sale.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sea.domain.sale.db.entity.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Integer>{

	Optional<List<Sale>> findBySaleSellerAddressAndSaleYnAndSaleEndTimeMoreThan(String userWalletAddress, int i, long now);
	Optional<List<Sale>> findBySaleYnAndSaleEndTimeMoreThan(int i, long now);
	
}
