package com.sea.domain.sales.db;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.sea.domain.item.db.entity.Item;

@Entity
@Table(name = "SALE")
public class Sale {
	
	@Id
	@Column(name = "sale_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int saleId;
	
	@Column(name = "sale_contract_address", length = 200)
	String saleContractAddress;
	
	@Column(name = "sale_yn", columnDefinition = "TINYINT(1)")
	int saleYn;
	
	@Column(name = "sale_cash_contract_address", length = 200)
	String saleCashContractAddress; 
	
	@Column(name = "sale_seller_address", length = 200)
	String saleSellerAddress;
	
	@Column(name = "sale_buyer_address", length = 200)
	String saleBuyerAddress;
	
	@CreationTimestamp
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
	@Column(name = "sale_created_at")
	LocalDateTime saleCreatedAt;
	
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
	@Column(name = "sale_completed_at", nullable = true)
	LocalDateTime saleCompletedAt;
	
	@ManyToOne
	@JoinColumn(name = "fk_item_id")
	Item fkItemId;
	
	@Column(name = "sale_start_time")
	int saleStartTime;
	
	@Column(name = "sale_end_time")
	int saleEndTime;
	
}
