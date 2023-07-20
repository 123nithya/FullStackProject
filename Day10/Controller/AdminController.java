package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Admin;
import com.example.demo.Entity.Cases;
import com.example.demo.Repository.CaseRepo;
import com.example.demo.Service.AdminService;
import com.example.demo.Service.CasesService;




@RestController
public class AdminController {
	
	@Autowired
    public AdminService serv;

    @GetMapping("/admin/get")
    public List<Admin> getSome() {
        return serv.getAllAdmin();
    }
    
    @PostMapping("/admin/add")
    public String addCases(@RequestBody Admin ca) {
        return (serv.addAdmin(ca)) != null ? "value added successfully" : "value not added";
    }

}
