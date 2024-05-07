package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.DetailSiege;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailSiegeRepo extends JpaRepository<DetailSiege, Integer> {
    
}
