package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.ClassVoyage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassVoyageRepo extends JpaRepository<ClassVoyage, Integer> {
    
}
