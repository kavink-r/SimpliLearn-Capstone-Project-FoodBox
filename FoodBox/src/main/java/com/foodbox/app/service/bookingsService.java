package com.foodbox.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.app.models.Bookings;
import com.foodbox.app.repository.bookingsRepo;

@Service
public class bookingsService {
	@Autowired
	private bookingsRepo repo;

	public List<Bookings> getAllBookings() {
		return repo.findAll();
	}

	public Bookings saveBooking(Bookings bk) {
		return repo.save(bk);
	}

}
