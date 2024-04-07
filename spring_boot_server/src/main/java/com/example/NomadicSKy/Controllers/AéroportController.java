package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.Aéroport;
import com.example.NomadicSKy.Service.AéroportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/aeroports")
public class AéroportController {

    private final AéroportService aéroportService;

    @Autowired
    public AéroportController(AéroportService aéroportService) {
        this.aéroportService = aéroportService;
    }

    // POST request to add a new airport
    @PostMapping
    public ResponseEntity<Aéroport> addAéroport(@RequestBody Aéroport aéroport) {
        try {
            Aéroport newAéroport = aéroportService.addAéroport(aéroport);
            return new ResponseEntity<>(newAéroport, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET request to retrieve all airports
    @GetMapping
    public ResponseEntity<?> getAllAéroports() {
        try {
            List<Aéroport> aéroports = aéroportService.getAllAéroports();
            if (aéroports.isEmpty()) {
                return new ResponseEntity<>("No airports added yet", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(aéroports, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET request to retrieve airport by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getAéroportById(@PathVariable("id") Integer id) {
        try {
            Optional<Aéroport> aéroportData = aéroportService.getAéroportById(id);
            if (aéroportData.isPresent()) {
                return new ResponseEntity<>(aéroportData.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Airport not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE request to delete airport by ID
    @DeleteMapping("/{id}")
    public String deleteAéroportById(@PathVariable("id") Integer id) {
        try {
            aéroportService.deleteAéroportById(id);
            return "Airport with the id " + id + " deleted!";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
  
   
}
