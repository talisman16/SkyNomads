package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.ServiceVol;
import com.example.NomadicSKy.Service.ServiceVolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/services")
public class ServiceVolController {

    @Autowired
    private ServiceVolService serviceVolService;

    @GetMapping
    public ResponseEntity<List<ServiceVol>> getAllServicesVol() {
        List<ServiceVol> services = serviceVolService.getAllServicesVol();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceVol> getServiceVolById(@PathVariable int id) {
        Optional<ServiceVol> service = serviceVolService.getServiceVolById(id);
        return service.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<ServiceVol> createServiceVol(@RequestBody ServiceVol serviceVol) {
        ServiceVol createdService = serviceVolService.createServiceVol(serviceVol);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceVol> updateServiceVol(@PathVariable int id, @RequestBody ServiceVol serviceVol) {
        ServiceVol updatedService = serviceVolService.updateServiceVol(id, serviceVol);
        return new ResponseEntity<>(updatedService, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceVol(@PathVariable int id) {
        serviceVolService.deleteServiceVol(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}