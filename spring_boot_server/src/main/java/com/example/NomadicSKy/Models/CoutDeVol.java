package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "Cout_Vol")
public class CoutDeVol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Place", nullable = false, length = 100)
    private String idPlace;

    @Column(name = "Valide_De_Date", nullable = false)
    private Date valideDeDate;

    @Column(name = "Valide_A_Date", nullable = false)
    private Date valideADate;

    @Column(name = "Cout", nullable = true)
    private Long cout;

    @OneToOne
    @JoinColumn(name = "siege_detail_id", referencedColumnName = "siege_detail_id")
    private DetailSiege siegeDetail;

    // Constructeurs, getters et setters

    public String getIdPlace() {
        return idPlace;
    }

    public void setIdPlace(String idPlace) {
        this.idPlace = idPlace;
    }

    public Date getValideDeDate() {
        return valideDeDate;
    }

    public void setValideDeDate(Date valideDeDate) {
        this.valideDeDate = valideDeDate;
    }

    public Date getValideADate() {
        return valideADate;
    }

    public void setValideADate(Date valideADate) {
        this.valideADate = valideADate;
    }

    public Long getCout() {
        return cout;
    }

    public void setCout(Long cout) {
        this.cout = cout;
    }

    public DetailSiege getSiegeDetail() {
        return siegeDetail;
    }

    public void setSiegeDetail(DetailSiege siegeDetail) {
        this.siegeDetail = siegeDetail;
    }
}
