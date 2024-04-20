package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.DetailSiege;
import com.example.NomadicSKy.Repository.DetailSiegeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/siege-details")
public class DetailSiegeController {

    @Autowired
    private DetailSiegeRepo detailSiegeRepository;

    @GetMapping
    public ResponseEntity<List<DetailSiege>> getAllDetailSieges() {
        List<DetailSiege> detailSieges = detailSiegeRepository.findAll();
        return new ResponseEntity<>(detailSieges, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<DetailSiege> createDetailSiege(@RequestBody DetailSiege detailSiege) {
        DetailSiege savedDetailSiege = detailSiegeRepository.save(detailSiege);
        return new ResponseEntity<>(savedDetailSiege, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDetailSiege(@PathVariable Integer id) {
        detailSiegeRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

   
}
