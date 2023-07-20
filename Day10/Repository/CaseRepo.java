package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Cases;



@Repository
public interface CaseRepo extends JpaRepository<Cases,Integer>{

}
