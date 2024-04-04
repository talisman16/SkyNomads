package com.example.NomadicSKy.Models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Entity
@Table(name = "ClasseVoyage")
public class ClasseVoyage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Class_voyage_Id")
    private int classVoyageId;

    @Column(name = "Class_voyage_Nom")
    private String classVoyageNom;

    @Column(name = "Class_voyage_Capacite")
    private int classVoyageCapacite;

    // Constructeurs, getters et setters
    public ClasseVoyage() {}

    public ClasseVoyage(String classVoyageNom, int classVoyageCapacite) {
        this.classVoyageNom = classVoyageNom;
        this.classVoyageCapacite = classVoyageCapacite;
    }

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