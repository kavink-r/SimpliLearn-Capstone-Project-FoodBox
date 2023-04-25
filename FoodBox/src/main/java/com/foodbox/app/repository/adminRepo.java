package com.foodbox.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.foodbox.app.models.administrators;

@Repository
public interface adminRepo extends JpaRepository<administrators, Integer> {
	
	@Query("SELECT u FROM administrators u WHERE u.userName=?1")
	public administrators findByUsername(String username);
	@Query("SELECT u FROM administrators u WHERE u.email=?1")
	public administrators findByEmail(String email);
}
