package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "siege_detail")
public class DetailSiege {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "siege_detail_id")
    private Integer siegeDetailId;

    @ManyToOne
    @JoinColumn(name = "class_voyage_id")
    private ClassVoyage classVoyage;

    @ManyToOne
    @JoinColumn(name = "detail_vol_id")
    private DetailsVol detailsVol;


    @Column(name="prix_siege")
    private Integer prix_siege;
    // Constructors, getters, and setters

    // Getter and setter for siegeDetailId
    public Integer getSiegeDetailId() {
        return siegeDetailId;
    }

    public void setPrix(Integer prix) 
    {
        this.prix_siege =prix; 
    }
    public  Integer getPrix ()
    {
        return this.prix_siege;
    }

    public void setSiegeDetailId(Integer siegeDetailId) {
        this.siegeDetailId = siegeDetailId;
    }

    // Getter and setter for classVoyage
    public ClassVoyage getClassVoyage() {
        return classVoyage;
    }

    public void setClassVoyage(ClassVoyage classVoyage) {
        this.classVoyage = classVoyage;
    }

    // Getter and setter for detailsVol
    public DetailsVol getDetailsVol() {
        return detailsVol;
    }

    public void setDetailsVol(DetailsVol detailsVol) {
        this.detailsVol = detailsVol;
    }
}
