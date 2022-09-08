package com.sea.domain.item.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.sea.domain.animal.db.Animal;
import com.sea.domain.donation.db.Donation;
import lombok.Getter;

@Entity
@Getter
@Table(name = "ITEM")
public class Item {
	
	@Id
	@Column(name = "item_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int itemId;
	
	@ManyToOne
	@JoinColumn(name = "fk_animal_id")
	Animal fkAnimalId;
	
	@Column(name = "item_img_url", length = 1000)
	String itemImgUrl;
	
	@Column(name = "item_token_id", length = 200)
	String itemTokenId;
	
	@Column(name = "item_owner_address", length = 200)
	String itemOwnerAddress;
	
	@OneToOne
	@JoinColumn(name = "fk_donation_id")
	Donation fkDonationId;
	
	@Column(name = "item_title", length = 100)
	String itemTitle;
	
	@Column(name = "item_price")
	double itemPrice;
}
