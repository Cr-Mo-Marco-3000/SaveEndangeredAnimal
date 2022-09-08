package com.sea.domain.animal.db;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ANIMAL")
public class Animal {
	
	@Id
	@Column(name = "animal_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	int animalId;
	
	@Column(name = "animal_name", length = 50)
	String animalName;
	
	@Column(name = "animal_scientific_name", length = 100)
	String animalScientificName;
	
	@Column(name = "animal_desc")
	String animalDesc;
	
	@Column(name = "animal_max_item")
	int animalMaxItem;
	
	@Column(name = "animal_now_item")
	int animalNowItem;
	
	@Column(name = "animal_img", columnDefinition = "varchar(50)")
	String animalImg;
	
	//tinyInt 추가 
	@Column(name = "animal_yn", columnDefinition = "TINYINT(1)")
	int animalYn;
	
	@Column(name = "animal_endangered_level")
	int animalEndangeredLevel;
	
	@Column(name = "animal_type", length = 30)
	String animalType;
}
