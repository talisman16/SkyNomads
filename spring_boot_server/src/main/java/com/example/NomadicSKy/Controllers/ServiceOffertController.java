package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.ClassVoyage;
import com.example.NomadicSKy.Models.ServiceOffert;
import com.example.NomadicSKy.Service.ServiceOffertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/servicesOffert")
public class ServiceOffertController {

    private final ServiceOffertService serviceOffertService;

    @Autowired
    public ServiceOffertController(ServiceOffertService serviceOffertService) {
        this.serviceOffertService = serviceOffertService;
    }

    @GetMapping
    public ResponseEntity<List<ServiceOffert>> getAllServicesOffert() {
        List<ServiceOffert> services = serviceOffertService.getAllServices();
        return ResponseEntity.ok().body(services);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceOffert> getServiceOffertById(@PathVariable int id) {
        Optional<ServiceOffert> service = serviceOffertService.getServiceById(id);
        return service.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ServiceOffert> createServiceOffert(@RequestBody ServiceOffert serviceOffert) {
        ServiceOffert createdService = serviceOffertService.CreateServiceOffert(serviceOffert);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdService);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceOffert(@PathVariable int id) {
        serviceOffertService.deleteService(id);
        return ResponseEntity.noContent().build();
    }
}

