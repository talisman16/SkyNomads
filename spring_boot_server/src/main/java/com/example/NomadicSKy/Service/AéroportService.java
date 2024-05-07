package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.Aéroport;
import com.example.NomadicSKy.Repository.AéroportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AéroportService {

    private final AéroportRepo aéroportRepo;

    @Autowired
    public AéroportService(AéroportRepo aéroportRepo) {
        this.aéroportRepo = aéroportRepo;
    }

    // Method to add a new airport
    public Aéroport addAéroport(Aéroport aéroport) {
        return aéroportRepo.save(aéroport);
    }

    // Method to retrieve all airports
    public List<Aéroport> getAllAéroports() {
        return (List<Aéroport>) aéroportRepo.findAll();
    }

    // Method to retrieve airport by ID
    public Optional<Aéroport> getAéroportById(Integer id) {
        return aéroportRepo.findById(id);
    }

    // Method to delete airport by ID
    public void deleteAéroportById(Integer id) {
        aéroportRepo.deleteById(id);
    }

    // Additional methods for updating or modifying airports can be added here if needed.
}
