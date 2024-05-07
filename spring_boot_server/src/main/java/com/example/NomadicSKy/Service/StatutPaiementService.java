package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.StatutPaiement;
import com.example.NomadicSKy.Repository.StatutPaiementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StatutPaiementService {

    @Autowired
    private StatutPaiementRepo statutPaiementRepository;

    public List<StatutPaiement> getAllStatutPaiements() {
        return statutPaiementRepository.findAll();
    }

    public Optional<StatutPaiement> getStatutPaiementById(int id) {
        return statutPaiementRepository.findById(id);
    }

    public StatutPaiement createStatutPaiement(StatutPaiement statutPaiement) {
        return statutPaiementRepository.save(statutPaiement);
    }

    public StatutPaiement updateStatutPaiement(int id, StatutPaiement updatedStatutPaiement) {
        if (statutPaiementRepository.existsById(id)) {
            updatedStatutPaiement.setPaymentId(id);
            return statutPaiementRepository.save(updatedStatutPaiement);
        } else {
            throw new IllegalArgumentException("StatutPaiement with ID " + id + " does not exist.");
        }
    }

    public void deleteStatutPaiement(int id) {
        statutPaiementRepository.deleteById(id);
    }
}