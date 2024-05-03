package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.CoutDeVol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoutdeVolRepo extends JpaRepository<CoutDeVol, String> {
    
}
