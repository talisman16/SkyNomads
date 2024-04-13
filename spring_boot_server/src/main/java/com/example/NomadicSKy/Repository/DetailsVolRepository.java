package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.DetailsVol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsVolRepository extends JpaRepository<DetailsVol, Integer> {
    // You can add custom query methods here if needed
}
