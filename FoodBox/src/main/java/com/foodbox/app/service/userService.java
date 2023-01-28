package com.foodbox.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.foodbox.app.models.Users;
import com.foodbox.app.repository.userRepository;
@Service
public class userService {

@Autowired	
userRepository repository;
	//find all users
	public List<Users>findAllUsers() {
		return repository.findAll();
	}
	
	//find all by id
	public Users findUserById(Integer id) {
		return repository.getById(id);
	}
	
	//find users by username
	public Users findUserByUserName(String name) {
		System.out.println("finding by name " + name);
		return repository.findByUserName(name);
	}
	
	public Users findByEmail(String email) {
		System.out.println("finding by email" +email);
		return repository.findByEmail(email);
	}
	
	public void addUser(Users[] usr) {
		for(Users u:usr) {
		repository.save(u);
		}
	}
	
	//update userdetails
	public void updateUser(Users usr) {
		Users oldUserdata = repository.getById(usr.getUid());
		if(usr.getFirstName()==null) {
			usr.setFirstName(oldUserdata.getFirstName());
		}
		if(usr.getLastName()==null) {
			usr.setLastName(oldUserdata.getLastName());
		}
		if (usr.getMiddleName()==null) {
			usr.setMiddleName(oldUserdata.getMiddleName());
		}
		if(usr.getUserName()==null) {
			usr.setUserName(oldUserdata.getUserName());
		}
		if(usr.getEmail()==null) {
			usr.setEmail(oldUserdata.getEmail());
		}
		if(usr.getPassword()==null) {
			usr.setPassword(oldUserdata.getPassword());
		}
		if(usr.getCountry()==null) {
			usr.setCountry(oldUserdata.getCountry());
		}
		
		repository.save(usr);
		
	}
	
	//delete user by userId
	public void deleteUser(Users usr) {
		repository.deleteById(usr.getUid());
	}
	
}
