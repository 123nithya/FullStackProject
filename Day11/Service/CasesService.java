package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Cases;
import com.example.demo.Repository.CaseRepo;

@Service
public class CasesService {

	@Autowired
	public CaseRepo repo;
	
	 public List<Cases> getAllCases() {
	        return repo.findAll();
	 }


	    public Cases addCases(Cases employee) {
	        return repo.save(employee) ;
	    }
}
