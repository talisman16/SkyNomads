package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.DetailsVol;
import com.example.NomadicSKy.Service.DetailsVolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/details-vols")
public class DetailsVolController {

    private final DetailsVolService detailsVolService;

    @Autowired
    public DetailsVolController(DetailsVolService detailsVolService) {
        this.detailsVolService = detailsVolService;
    }

  
    @PostMapping
    public ResponseEntity<DetailsVol> addDetailsVol(@RequestBody DetailsVol detailsVol) {
        try {
            DetailsVol newDetailsVol = detailsVolService.addDetailsVol(detailsVol);
            return new ResponseEntity<>(newDetailsVol, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping
    public ResponseEntity<?> getAllDetailsVols() {
        try {
            List<DetailsVol> detailsVols = detailsVolService.getAllDetailsVols();
            if (detailsVols.isEmpty()) {
                return new ResponseEntity<>("No flight details added yet", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(detailsVols, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET request to retrieve flight detail by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getDetailsVolById(@PathVariable("id") Integer id) {
        try {
            Optional<DetailsVol> detailsVolData = detailsVolService.getDetailsVolById(id);
            if (detailsVolData.isPresent()) {
                return new ResponseEntity<>(detailsVolData.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Flight detail not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE request to delete flight detail by ID
    @DeleteMapping("/{id}")
    public String deleteDetailsVolById(@PathVariable("id") Integer id) {
        try {
            detailsVolService.deleteDetailsVolById(id);
            return "Flight detail with the id " + id + " deleted!";
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}
