package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.ServiceVol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceVolRepo extends JpaRepository<ServiceVol, Integer> {

}