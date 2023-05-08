package com.foodbox.app.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.app.models.administrators;
import com.foodbox.app.repository.adminRepo;

@Service
public class adminService {
	@Autowired
	adminRepo repo;

	public void addAdminUser(administrators usr) {
		repo.save(usr);
		
	}
	
	public administrators findByUsername(String t) {
		return repo.findByUsername(t);
	}
	
	public administrators findByEmail(String t) {
		return repo.findByEmail(t);
	}

	public void removeAdminUser(int id) {
		administrators u = repo.findById(id).get(); 		
		if(u!=null) {
			repo.delete(u);
		}
				
	}

	public Map<String, String> AuthenticateByUsername(administrators usr) {
		Map<String, String> result = new HashMap<>();
		result.put("admin", "0");
		result.put("authentication", "0");
		administrators u = null;
		u = repo.findByUsername(usr.getUserName());
		if (u == null) {
			return result;
		} else if ((u.getUserName()).equals(usr.getUserName())) {
			result.put("admin", "1");
			if ((u.getPassword()).equals(usr.getPassword())) {
				result.put("authentication", "1");
			}

		}
		return result;
	}
	public Map<String, String> AuthenticateByEmail(administrators usr) {
		Map<String, String> result = new HashMap<>();
		result.put("admin", "0");
		result.put("authentication", "0");
		administrators u = null;
		u = repo.findByEmail(usr.getEmail());
		if (u == null) {
			return result;
		} else if ((u.getEmail()).equals(usr.getEmail())) {
			result.put("admin", "1");
			if ((u.getPassword()).equals(usr.getPassword())) {
				result.put("authentication", "1");
			}

		}
		return result;
	}
	
	public String changePassword(administrators usr) {
		String result;
		administrators u =repo.findByUsername(usr.getUserName());
		u.setPassword(usr.getPassword());
		try {
			repo.save(u);
			result="1";
		}
		catch(Exception e) {
			System.out.println(e);
			result="0";
		}
		return result;
	}
}
