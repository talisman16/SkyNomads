package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.CoutDeVol;
import com.example.NomadicSKy.Repository.CoutdeVolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/coutDeVol")
public class CoutDeVolController {

    @Autowired
    private CoutdeVolRepo coutDeVolRepository;

    // GET endpoint to retrieve all CoutDeVol entities
    @GetMapping
    public ResponseEntity<List<CoutDeVol>> getAllCoutDeVol() {
        List<CoutDeVol> coutDeVolList = coutDeVolRepository.findAll();
        return new ResponseEntity<>(coutDeVolList, HttpStatus.OK);
    }

    // GET endpoint to retrieve a CoutDeVol entity by ID
    @GetMapping("/{id}")
    public ResponseEntity<CoutDeVol> getCoutDeVolById(@PathVariable("id") String id) {
        Optional<CoutDeVol> coutDeVolOptional = coutDeVolRepository.findById(id);
        return coutDeVolOptional.map(coutDeVol -> new ResponseEntity<>(coutDeVol, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // POST endpoint to create a new CoutDeVol entity
    @PostMapping
    public ResponseEntity<CoutDeVol> createCoutDeVol(@RequestBody CoutDeVol coutDeVol) {
        CoutDeVol createdCoutDeVol = coutDeVolRepository.save(coutDeVol);
        return new ResponseEntity<>(createdCoutDeVol, HttpStatus.CREATED);
    }

    // DELETE endpoint to delete a CoutDeVol entity by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoutDeVol(@PathVariable("id") String id) {
        Optional<CoutDeVol> coutDeVolOptional = coutDeVolRepository.findById(id);
        if (coutDeVolOptional.isPresent()) {
            coutDeVolRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
