package com.foodbox.app.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.app.models.sampleModel;

@RestController
public class testController {
	
	@GetMapping(path = "/")
	public Map<String, String> HelloMessage() {
		Map<String, String> sample = new HashMap<>();
		sample.put("name", "kavin");
		return sample;
	}
	
	@GetMapping("/h")
	public sampleModel hello() {
		sampleModel t = new sampleModel();
		t.setId("23");
		t.setName("Deepak");
		return t;
	}
}
