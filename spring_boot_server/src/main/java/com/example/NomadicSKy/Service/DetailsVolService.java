package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.DetailsVol;
import com.example.NomadicSKy.Repository.DetailsVolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailsVolService {

    private final DetailsVolRepository detailsVolRepository;

    @Autowired
    public DetailsVolService(DetailsVolRepository detailsVolRepository) {
        this.detailsVolRepository = detailsVolRepository;
    }

    // Method to add a new flight detail
    public DetailsVol addDetailsVol(DetailsVol detailsVol) {
        return detailsVolRepository.save(detailsVol);
    }

    // Method to retrieve all flight details
    public List<DetailsVol> getAllDetailsVols() {
        return detailsVolRepository.findAll();
    }

    // Method to retrieve flight detail by ID
    public Optional<DetailsVol> getDetailsVolById(Integer id) {
        return detailsVolRepository.findById(id);
    }

    // Method to delete flight detail by ID
    public void deleteDetailsVolById(Integer id) {
        detailsVolRepository.deleteById(id);
    }
}
