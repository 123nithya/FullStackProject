package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Cases;
import com.example.demo.Repository.CaseRepo;
import com.example.demo.Service.CasesService;




@RestController
public class CaseController {
	
	@Autowired
    public CasesService Cserv;

    @GetMapping("/case/get")
    public List<Cases> getSome() {
        return Cserv.getAllCases();
    }
    
    @PostMapping("/case/add")
    public String addCases(@RequestBody Cases ca) {
        return (Cserv.addCases(ca)) != null ? "value added successfully" : "value not added";
    }

}
