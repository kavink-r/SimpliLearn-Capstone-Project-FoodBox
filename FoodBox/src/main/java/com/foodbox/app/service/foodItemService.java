package com.foodbox.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.app.models.foodItem;
import com.foodbox.app.repository.foodItemRepository;
@Service
public class foodItemService {
	@Autowired
	foodItemRepository repo;
	
	public List<foodItem> findAll(){
		return repo.findAll();
	}
	public foodItem findByID(int id) {
		try {
			return repo.findById(id).get();
		}catch(Exception e) {
			System.out.println(e);
			return null;
		}
		
	}
	public String updateFoodDetails(foodItem item) {
		String status="0";
		foodItem oldItem = repo.findById(item.getFoodId()).get();
		if( item.getCookingTime() == 0) {
			item.setCookingTime(oldItem.getCookingTime());
		}
		if(item.getCuisine()==null) {
			item.setCuisine(oldItem.getCuisine());
		}
		if(item.getFoodDesc()==null) {
			item.setFoodDesc(oldItem.getFoodDesc());
		}
		if(item.getFoodName()==null) {
			item.setFoodName(oldItem.getFoodName());
		}
		if(item.getImgUrl()==null) {
			item.setImgUrl(oldItem.getImgUrl());
		}
		if(item.getRate()==0) {
			item.setRate(oldItem.getRate());
		}
		if(item.getRating()==0) {
			item.setRating(oldItem.getRating());
		}
		if(item.getTag()==null) {
			item.setTag(oldItem.getTag());
		}
		
		try {
			repo.save(item);
			status="1";
		}
		catch(Exception e) {
			System.out.println(e);
		}
		
		return status;
	}
	public foodItem findByName(String name) {
		return repo.findByName(name);
	}
	
	public String addFoodItem(foodItem f) {
		String status;
		try {
			
			repo.save(f);
			status="1" ;
		}catch(Exception e) {
			status ="0";
		}
		return status;
	}
	public String deleteFoodItem(foodItem f) {
		String status;
		try {
			repo.delete(f);
			status="1";
		}
		catch(Exception e) {
			System.out.println(e);
			status="0";
		}
		return status;
	}
		
		public String deleteFoodItemById(Integer id) {
			String status;
			try {
				repo.deleteById(id);
				status="1";
			}
			catch(Exception e) {
				System.out.println(e);
				status="0";
			}
			return status;
	}
		public void changestatus(boolean status) {
			
		}
}
