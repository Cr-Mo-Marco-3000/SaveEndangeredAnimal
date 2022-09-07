package com.sea.domain.animal.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnimalImgRepository extends JpaRepository<AnimalImg, Integer>{

}
