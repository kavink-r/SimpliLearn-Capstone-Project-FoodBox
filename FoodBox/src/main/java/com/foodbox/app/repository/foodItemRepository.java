package com.foodbox.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.foodbox.app.models.foodItem;
@Repository
public interface foodItemRepository extends JpaRepository<foodItem, Integer> {
	
	@Query("SELECT f from foodItem f where f.foodName=?1")
	public foodItem findByName(String name) ;

}
