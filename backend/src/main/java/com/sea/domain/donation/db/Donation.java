package com.sea.domain.donation.db;

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
import com.sea.domain.user.db.User;

@Entity
@Table(name = "DONATION")
public class Donation {
	
	@Id
	@Column(name = "dontion_no")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int donationNo;
	
	@Column(name = "donation_amount")
	int donationAmount;
	
	@CreationTimestamp
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
	@Column(name = "donation_created_at")
	LocalDateTime donationCreatedAt;
	
	@Column(name = "donation_status_code", length = 20)
	String donationStatusCode;
	
	@Column(name = "donation_transaction_hash", length = 200)
	String donationTransactionHash;
	
	@ManyToOne
	@JoinColumn(name = "fk_user_no")
	User fkUserNo;
}
