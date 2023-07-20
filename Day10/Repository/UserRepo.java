package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Cases;
import com.example.demo.Entity.Users;



@Repository
public interface UserRepo extends JpaRepository<Users,Integer>{

}
