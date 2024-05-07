package com.example.NomadicSKy.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Service_Offering")
public class ServiceOffert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    @ManyToOne
    @JoinColumn(name = "class_voyage_id", referencedColumnName = "class_voyage_id")
    private ClassVoyage classeVoyage;


    @ManyToOne
    @JoinColumn(name = "ID_Service")
    private ServiceVol serviceVol;

    @Column(name = "Offert_Oui_Non", nullable = false, length = 1)
    private char offertOuiNon;

    @Column(name = "Du_Mois", length = 20)
    private String duMois;

    @Column(name = "Au_Mois", length = 20)
    private String auMois;

    // Constructeurs, getters et setters

    public ClassVoyage getClasseVoyage() {
        return classeVoyage;
    }

    public void setClasseVoyage(ClassVoyage classeVoyage) {
        this.classeVoyage = classeVoyage;
    }

    public ServiceVol getServiceVol() {
        return serviceVol;
    }

    public void setServiceVol(ServiceVol serviceVol) {
        this.serviceVol = serviceVol;
    }

    public char getOffertOuiNon() {
        return offertOuiNon;
    }

    public void setOffertOuiNon(char offertOuiNon) {
        this.offertOuiNon = offertOuiNon;
    }

    public String getDuMois() {
        return duMois;
    }

    public void setDuMois(String duMois) {
        this.duMois = duMois;
    }

    public String getAuMois() {
        return auMois;
    }

    public void setAuMois(String auMois) {
        this.auMois = auMois;
    }
}
