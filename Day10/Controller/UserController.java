package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Entity.Users;
import com.example.demo.Service.UserService;




@RestController
public class UserController {
	
	@Autowired
    public UserService serv;

    @GetMapping("/user/get")
    public List<Users> getUser() {
        return serv.getAllUsers();
    }
    
    @PostMapping("/user/post")
    public String addUser(@RequestBody Users ca) {
        return (serv.addUsers(ca)) != null ? "value added successfully" : "value not added";
    }

}
