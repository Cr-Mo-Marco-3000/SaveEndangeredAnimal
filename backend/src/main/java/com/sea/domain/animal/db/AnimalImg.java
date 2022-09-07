package com.sea.domain.animal.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ANIMALIMG")
public class AnimalImg {
	
	@Id
	@Column(name = "animal_img_no")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int animalImgNo;
	
	@ManyToOne
	@JoinColumn(name = "animal_no")
	Animal animalNo;
	
	@Column(name = "animal_img_address", length = 100)
	String animalImgAddress;
}
