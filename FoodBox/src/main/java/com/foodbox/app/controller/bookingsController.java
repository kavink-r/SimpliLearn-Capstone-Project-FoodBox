package com.foodbox.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.app.models.Bookings;
import com.foodbox.app.service.bookingsService;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/bookings")
public class bookingsController {
	@Autowired
	bookingsService service;
	
	@GetMapping("/all")
	public List<Bookings> getAllBookings(){
		return service.getAllBookings();
	}
	
	@PostMapping("/saveBooking")
	public Map<String, String> saveBooking(@RequestBody Bookings bk){
		Map<String, String> status = new HashMap <>();
		status.put("status", null);
		try {
		Bookings bkng =	service.saveBooking(bk);
			status.replace("status", Integer.toString(bkng.getBookingId()));
		}catch(Exception e) {
			System.out.println(e);
			status.replace("status", "error");
		}
		return status;
	}
}
