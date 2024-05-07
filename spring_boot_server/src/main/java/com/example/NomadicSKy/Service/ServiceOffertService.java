package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.ClassVoyage;
import com.example.NomadicSKy.Models.ServiceOffert;
import com.example.NomadicSKy.Repository.ServiceOffertRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceOffertService {
    ServiceOffertRepo serviceOffertRepo;
    @Autowired
    public ServiceOffertService(ServiceOffertRepo serviceOffertRepo) {
        this.serviceOffertRepo = serviceOffertRepo;
    }

    public List<ServiceOffert> getAllServices() {
        return serviceOffertRepo.findAll();
    }

    public Optional<ServiceOffert> getServiceById(int id) {
        return serviceOffertRepo.findById(id);
    }
    public ServiceOffert CreateServiceOffert(ServiceOffert serviceOffert) {
        return serviceOffertRepo.save(serviceOffert);
    }
    public Optional<ServiceOffert> getServiceOffertById(int id) {
        return serviceOffertRepo.findById(id);
    }

    public void deleteService(int id) {
        serviceOffertRepo.deleteById(id);
    }
}
