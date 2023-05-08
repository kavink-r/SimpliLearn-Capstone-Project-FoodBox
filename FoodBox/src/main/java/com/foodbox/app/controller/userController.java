package com.foodbox.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.foodbox.app.models.Users;
import com.foodbox.app.service.userService;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/user")
public class userController {
	@Autowired
	userService usrService;
	
	@GetMapping("/")
	public String landingGreeting(){
		return "You have landed on the Users page!!!<br><h1>Have a nice day!!</h1>";
	}
	
	@GetMapping("/all")
	public List<Users> getAllUsers(){
		return usrService.findAllUsers();
	}
	
	@GetMapping("/finduser")
	public Users getUserByName(@RequestParam(name="name") String name){
		Users usr;
		String pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
		if(name.matches(pattern)) {
			usr = usrService.findByEmail(name);
		}else {
		usr = usrService.findUserByUserName(name);
		}
		return usr;
	}
	
	@PatchMapping("/updateuser/{id}")
	public Map<String, String> updateUser(@PathVariable("id") int id, @RequestBody Users usr){
		Map<String, String> status = new HashMap<>();
		
		try {
			usrService.updateUser(usr);
			status.put("status", "1");
			Users updateduser = new Users();
			updateduser=usrService.findUserById(id);
			status.put("uid", Integer.toString(updateduser.getUserId()));
			status.put("firstname", updateduser.getFirstName());
			status.put("middlename", updateduser.getMiddleName());
			status.put("lastname", updateduser.getLastName());
			status.put("username", updateduser.getUserName());
			status.put("email", updateduser.getEmail());
			status.put("password", updateduser.getPassword());
			status.put("country", updateduser.getCountry());
			}
			catch(Exception e) {
				System.out.println(e);
				status.put("status", "0");
			}
			return status;
	}
	
	@PostMapping("/adduser")
	public Map<String, Integer> createUser(@RequestBody Users usr){
		Map<String, Integer> status = new HashMap<>();
		try {
		usrService.addUser(usr);
		status.put("status", 1);
		}
		catch(Exception e) {
			status.put("status", 0);
		}
		return status;
	}
	
	@DeleteMapping("/remove/{id}")
	public Map<String, Integer> deleteUser(@PathVariable int id){
		Map<String, Integer> status = new HashMap<>();
		try {
		usrService.deleteUser(usrService.findUserById(id));
		status.put("status", 1);
		}
		catch(Exception e) {
			System.out.println(e);
			status.put("status", 0);
		}
		return status;		
	}
}
