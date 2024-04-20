package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.ClassVoyage;
import com.example.NomadicSKy.Repository.ClassVoyageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/class-voyages")
public class ClassVoyageController {

    @Autowired
    private ClassVoyageRepo classVoyageRepository;

    @GetMapping
    public ResponseEntity<List<ClassVoyage>> getAllClassVoyages() {
        List<ClassVoyage> classVoyages = classVoyageRepository.findAll();
        return new ResponseEntity<>(classVoyages, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ClassVoyage> createClassVoyage(@RequestBody ClassVoyage classVoyage) {
        ClassVoyage savedClassVoyage = classVoyageRepository.save(classVoyage);
        return new ResponseEntity<>(savedClassVoyage, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClassVoyage(@PathVariable Integer id) {
        classVoyageRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

   
}
