package com.example.NomadicSKy.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "User", uniqueConstraints = {@UniqueConstraint(columnNames = "user_email")})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    private String user_prenom;

    private String user_nom;

    @Column(name="user_email" , unique =  true , nullable = false)
    private String useremail;


    @Column(name ="user_PhoneNumber" , unique =  true , nullable =  false)
    private String user_PhoneNumber;


    private String user_password;

    private String user_Adresse;

    private String user_Ville;


    private String user_pays;

    // Setters

    // Setter for user_id
    public void setUser_id(Integer id) {
        this.user_id = id;
    }

    // Setter for user_prenom
    public void setUser_prenom(String prenom) {
        this.user_prenom = prenom;
    }

    // Setter for user_nom
    public void setUser_nom(String nom) {
        this.user_nom = nom;
    }

    // Setter for user_email
    public void setUser_email(String email) {
        this.useremail = email;
    }

    // Setter for user_PhoneNumber
    public void setUser_PhoneNumber(String phoneNumber) {
        this.user_PhoneNumber = phoneNumber;
    }

    // Setter for user_password
    public void setUser_password(String password) {
        this.user_password = password;
    }

    // Setter for user_Adresse
    public void setUser_Adresse(String adresse) {
        this.user_Adresse = adresse;
    }

    // Setter for user_Ville
    public void setUser_Ville(String ville) {
        this.user_Ville = ville;
    }

    // Setter for user_pays
    public void setUser_pays(String pays) {
        this.user_pays = pays;
    }


    // Getters

    // Getter for user_id
    public Integer getUser_id() {
        return user_id;
    }

    // Getter for user_prenom
    public String getUser_prenom() {
        return user_prenom;
    }

    // Getter for user_nom
    public String getUser_nom() {
        return user_nom;
    }

    // Getter for user_email
    public String getUser_email() {
        return useremail;
    }

    // Getter for user_PhoneNumber
    public String getUser_PhoneNumber() {
        return user_PhoneNumber;
    }

    // Getter for user_password
    public String getUser_password() {
        return user_password;
    }

    // Getter for user_Adresse
    public String getUser_Adresse() {
        return user_Adresse;
    }

    // Getter for user_Ville
    public String getUser_Ville() {
        return user_Ville;
    }

    // Getter for user_pays
    public String getUser_pays() {
        return user_pays;
    }
}
