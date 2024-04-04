package com.example.NomadicSKy.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ClassVoyage")
public class ClassVoyage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Class_voyage_Id")
    private int classVoyageId;

    @Column(name = "Class_voyage_Nom")
    private String classVoyageNom;

    @Column(name = "Class_voyage_Capacite")
    private int classVoyageCapacite;

    public int getClassVoyageId() {
        return classVoyageId;
    }

    public void setClassVoyageId(int classVoyageId) {
        this.classVoyageId = classVoyageId;
    }

    public String getClassVoyageNom() {
        return classVoyageNom;
    }

    public void setClassVoyageNom(String classVoyageNom) {
        this.classVoyageNom = classVoyageNom;
    }

    public int getClassVoyageCapacite() {
        return classVoyageCapacite;
    }

    public void setClassVoyageCapacite(int classVoyageCapacite) {
        this.classVoyageCapacite = classVoyageCapacite;
    }
}