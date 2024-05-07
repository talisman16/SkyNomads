package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.StatutPaiement;
import com.example.NomadicSKy.Service.StatutPaiementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/statutpaiements")
public class StatutPaiementController {

    @Autowired
    private StatutPaiementService statutPaiementService;

    @GetMapping
    public ResponseEntity<List<StatutPaiement>> getAllStatutPaiements() {
        List<StatutPaiement> statutPaiements = statutPaiementService.getAllStatutPaiements();
        return new ResponseEntity<>(statutPaiements, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatutPaiement> getStatutPaiementById(@PathVariable int id) {
        Optional<StatutPaiement> statutPaiement = statutPaiementService.getStatutPaiementById(id);
        return statutPaiement.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<StatutPaiement> createStatutPaiement(@RequestBody StatutPaiement statutPaiement) {
        StatutPaiement createdStatutPaiement = statutPaiementService.createStatutPaiement(statutPaiement);
        return new ResponseEntity<>(createdStatutPaiement, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StatutPaiement> updateStatutPaiement(@PathVariable int id, @RequestBody StatutPaiement statutPaiement) {
        StatutPaiement updatedStatutPaiement = statutPaiementService.updateStatutPaiement(id, statutPaiement);
        return new ResponseEntity<>(updatedStatutPaiement, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStatutPaiement(@PathVariable int id) {
        statutPaiementService.deleteStatutPaiement(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
