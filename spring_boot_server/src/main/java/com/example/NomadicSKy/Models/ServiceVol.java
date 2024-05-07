package com.example.NomadicSKy.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Service_Vol")
public class ServiceVol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Service", nullable = false)
    private int idService;

    @Column(name = "Nom_Service", nullable = false, length = 100)
    private String nomService;



    public int getIdService() {
        return idService;
    }

    public void setIdService(int idService) {
        this.idService = idService;
    }

    public String getNomService() {
        return nomService;
    }

    public void setNomService(String nomService) {
        this.nomService = nomService;
    }
}
