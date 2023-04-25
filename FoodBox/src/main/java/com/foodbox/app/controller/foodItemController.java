package com.foodbox.app.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.app.models.Users;
import com.foodbox.app.models.foodItem;
import com.foodbox.app.service.foodItemService;

@RestController
@RequestMapping("/api/food")
public class foodItemController {
	@Autowired
	foodItemService fs;
	
	@GetMapping("/all")
	public List<foodItem> findAllFoods(){
		
		return fs.findAll();
	}
	@PostMapping("/addfood")
	public Map<String, Integer> addFoodItem(@RequestBody foodItem f){
		Map<String,Integer> status=new HashMap<>();
		try {
			fs.addFoodItem(f);
			status.put("status", 1);
		}catch(Exception e) {
			System.out.println(e);
			status.put("status", 0);
		}
		
		return status;
	}
	
	@DeleteMapping("/delete/{id}")
	public Map<String, String> deleteFood(@PathVariable(name = "id", required = false)Integer id ){
		Map<String, String> status = new HashMap<>();
			if(id==null) {
				status.put("status","Food ID not detected");
			}else {
				fs.deleteFoodItemById(id);
				status.put("status", "1");
			}
		return status;
	}
	
	@GetMapping("/find/{id}")
	public List<foodItem> findfooditem(@PathVariable(name="id", required=false)Integer id){
		List<foodItem> foodList = new ArrayList<>();
		foodList.add(fs.findByID(id));
		
		return foodList;
		
	}
	
	@GetMapping("/find")
	public List<foodItem> findfooditem(@RequestParam(name="name")String name){
		List<foodItem> foodList = new ArrayList<>();
		foodList.add(fs.findByName(name));
		
		return foodList;
	}
	
	@PatchMapping("/update/{id}")
	public Map<String, String> updateUser(@PathVariable(name="id",required=false) int id, @RequestBody foodItem item){
		Map<String, String> status = new HashMap<>();
		status.put("status", fs.updateFoodDetails(item));
	return status;
}
}
