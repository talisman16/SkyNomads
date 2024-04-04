package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Calendar")
public class Calendrier {

    @Id
    @Column(name = "Jour_Date", nullable = false)
    private java.sql.Date jourDate;

    @Column(name = "Jour_Ouvrable_Oui_Non", nullable = false, length = 1)
    private char jourOuvrableOuiNon;

    // Constructors, getters, and setters

    public java.sql.Date getJourDate() {
        return jourDate;
    }

    public void setJourDate(java.sql.Date jourDate) {
        this.jourDate = jourDate;
    }

    public char getJourOuvrableOuiNon() {
        return jourOuvrableOuiNon;
    }

    public void setJourOuvrableOuiNon(char jourOuvrableOuiNon) {
        this.jourOuvrableOuiNon = jourOuvrableOuiNon;
    }
}
