package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Entity.Users;

import com.example.demo.Repository.UserRepo;

@Service
public class UserService {

	@Autowired
	public UserRepo repo;
	
	 public List<Users> getAllUsers() {
	        return repo.findAll();
	 }


	    public Users addUsers(Users employee) {
	        return repo.save(employee) ;
	    }
}
