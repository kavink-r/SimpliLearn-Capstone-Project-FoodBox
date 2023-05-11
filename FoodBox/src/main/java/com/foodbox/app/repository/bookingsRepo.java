package com.foodbox.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.app.models.Bookings;
@Repository
public interface bookingsRepo extends JpaRepository<Bookings, Integer> {
	
}
