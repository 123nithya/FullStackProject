package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Admin;

import com.example.demo.Repository.AdminRepo;


@Service
public class AdminService {

	@Autowired
	public AdminRepo repo;
	
	 public List<Admin> getAllAdmin() {
	        return repo.findAll();
	 }


	    public Admin addAdmin(Admin employee) {
	        return repo.save(employee) ;
	    }
}
