package com.example.NomadicSKy.Models;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "details_vol")
public class DetailsVol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vol_id;

    @ManyToOne
    @JoinColumn(name = "source_aeroport_id")
    private Aéroport sourceAeroport;

    @ManyToOne
    @JoinColumn(name = "destination_aeroport_id")
    private Aéroport destinationAeroport;

    @Column(name = "date_departure")
    private Date dateDeparture;

    @Column(name = "date_arrival")
    private Date dateArrival;

    @Column(name = "type_avion")
    private String typeAvion;

    // Constructors, getters, and setters

    // Getter and setter for vol_id
    public Integer getVol_id() {
        return vol_id;
    }

    public void setVol_id(Integer vol_id) {
        this.vol_id = vol_id;
    }

    // Getter and setter for sourceAeroport
    public Aéroport getSourceAeroport() {
        return sourceAeroport;
    }

    public void setSourceAeroport(Aéroport sourceAeroport) {
        this.sourceAeroport = sourceAeroport;
    }

    // Getter and setter for destinationAeroport
    public Aéroport getDestinationAeroport() {
        return destinationAeroport;
    }

    public void setDestinationAeroport(Aéroport destinationAeroport) {
        this.destinationAeroport = destinationAeroport;
    }

    // Getter and setter for dateDeparture
    public Date getDateDeparture() {
        return dateDeparture;
    }

    public void setDateDeparture(Date dateDeparture) {
        this.dateDeparture = dateDeparture;
    }

    // Getter and setter for dateArrival
    public Date getDateArrival() {
        return dateArrival;
    }

    public void setDateArrival(Date dateArrival) {
        this.dateArrival = dateArrival;
    }

    // Getter and setter for typeAvion
    public String getTypeAvion() {
        return typeAvion;
    }

    public void setTypeAvion(String typeAvion) {
        this.typeAvion = typeAvion;
    }
}
