package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Service_Offering")
public class ServiceOffert {

    @Id
    @ManyToOne
    @JoinColumn(name = "ID_Classe_Voyage", referencedColumnName = "ID_Classe_Voyage")
    private ClassVoyage classeVoyage;

    @Id
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
