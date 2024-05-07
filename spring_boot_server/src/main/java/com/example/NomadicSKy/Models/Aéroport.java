package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;


// table aeropoty
@Entity
@Table(name = "Aeroport" , uniqueConstraints = {@UniqueConstraint(columnNames = "nom_Aeroport" )})
public class Aéroport {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer Aeroport_id;

  @Column(name = "nom_Aeroport", unique = true, nullable = false)
  private String nom_Aeroport;

  @Column(name = "Aeroport_ville")
  private String Aeroport_ville;

  @Column(name = "Aeroport_pays")
  private String Aeroport_pays;

  public Aéroport() {
  }

  public Aéroport(String nom_Aeroport, String Aeroport_ville, String Aeroport_pays) {
    this.nom_Aeroport = nom_Aeroport;
    this.Aeroport_ville = Aeroport_ville;
    this.Aeroport_pays = Aeroport_pays;
  }
  // Getters

  // id de l'aeroport
  public Integer getIdAeroport()
  {
    return this.Aeroport_id;
  }
  //  ville de l'aeroport
  public String getAeroportVille()
  {
    return this.Aeroport_ville;
  }
// pays de l'areoport

  public String getPaysAeroport()
  {
    return this.Aeroport_pays;
  }
  // nom de l'aeroport
  public String getNomAeroport()
  {
    return this.nom_Aeroport;
  }


// Setters

  public void setIdAeroport(Integer id) {
    this.Aeroport_id = id;
  }

  // Setter for nom_Aeroport
  public void setNomAeroport(String nomAeroport) {
    this.nom_Aeroport = nomAeroport;
  }

  // Setter for Aeroport_ville
  public void setAeroportVille(String ville) {
    this.Aeroport_ville = ville;
  }

  // Setter for Aeroport_pays
  public void setPaysAeroport(String pays) {
    this.Aeroport_pays = pays;
  }

}

