package com.example.NomadicSKy.Repository;


import com.example.NomadicSKy.Models.ServiceOffert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceOffertRepo extends JpaRepository<ServiceOffert, Integer> {

}
