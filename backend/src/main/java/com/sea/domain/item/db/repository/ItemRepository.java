package com.sea.domain.item.db.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sea.domain.item.db.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer>{

	Optional<List<Item>> findByItemOwnerAddress(String userWalletAddress);

}
