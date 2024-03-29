package com.foodbox.app.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.app.models.administrators;
import com.foodbox.app.service.adminService;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/admin")
public class adminController {
	@Autowired
	adminService service;
	@PostMapping("/addAdminUser")
	public Map<String,String> addAdmin(@RequestBody administrators usr){
		Map<String,String> result = new HashMap<>();
		result.put("status", "0");
		try{
			service.addAdminUser(usr);
			result.replace("status", "1");
		}catch(Exception e) {
			System.out.println(e);
			
		}
		return result;
	}
	@GetMapping("/findadmin")
	public administrators findadminuser(@RequestParam("q")String searchterm) {
		
		String pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
		if(searchterm.matches(pattern)) {
			
			return service.findByEmail(searchterm);
		}else if(searchterm!=null) {
			
			return service.findByUsername(searchterm);
		}else {
			return null;
		}
		
	}
	@PutMapping("/changepassword")
	public Map<String,String> changePassword(@RequestBody administrators usr){
		Map<String,String> result = new HashMap<>();
		result.put("status", "0");
		try{
			service.changePassword(usr);
			result.replace("status", "1");
		}catch(Exception e) {
			System.out.println(e);
			
		}
		return result;
	}
	
	@PostMapping ("/authenticate")
	public Map<String,String> authentication(@RequestBody administrators usr){
		Map<String,String> result = new HashMap<>();
		String pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
		System.out.println(usr);
		if(usr.getEmail()!= null && (usr.getEmail()).matches(pattern) ) {
			return service.AuthenticateByEmail(usr);
		}else if(usr.getUserName()!=null ) {
			return service.AuthenticateByUsername(usr);
		}
		
		result.put("admin", "error");
		result.put("authentication", "error");
		return result;
	}
	
	@DeleteMapping("/remove/{id}")
	public Map<String,String> removeAdmin(@PathVariable("id")int id){
		Map<String,String> result = new HashMap<>();
		result.put("status", "0");
		try {
			
			service.removeAdminUser(id);
			result.replace("status", "1");
		}catch(Exception e) {
			System.out.println();
		}
		return result;
	}
	
}
