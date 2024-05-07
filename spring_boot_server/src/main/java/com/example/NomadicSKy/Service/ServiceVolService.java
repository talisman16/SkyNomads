package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.ServiceVol;
import com.example.NomadicSKy.Repository.ServiceVolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ServiceVolService {
    @Autowired
    private ServiceVolRepo serviceVolRepository;

    public List<ServiceVol> getAllServicesVol() {
        return serviceVolRepository.findAll();
    }

    public Optional<ServiceVol> getServiceVolById(int id) {
        return serviceVolRepository.findById(id);
    }

    public ServiceVol createServiceVol(ServiceVol serviceVol) {
        return serviceVolRepository.save(serviceVol);
    }

    public ServiceVol updateServiceVol(int id, ServiceVol updatedService) {
        if (serviceVolRepository.existsById(id)) {
            updatedService.setIdService(id);
            return serviceVolRepository.save(updatedService);
        } else {
            throw new IllegalArgumentException("ServiceVol with ID " + id + " does not exist.");
        }
    }

    public void deleteServiceVol(int id) {
        serviceVolRepository.deleteById(id);
    }
}
