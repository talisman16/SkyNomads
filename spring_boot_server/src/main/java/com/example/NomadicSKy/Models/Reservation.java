package com.example.NomadicSKy.Models;


import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Reservation_id")
    private int reservationId;

    @ManyToOne
    @JoinColumn(name = "User_id")
    private User user;

    @ManyToOne
    @JoinColumn(name ="siege_detail_id")
    private DetailSiege DetailSiege;

    @Column(name = "Date_dereser")
    private LocalDateTime dateDeReservation;
    //
    // getters et setters



    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public DetailSiege getSiege() {
        return this.DetailSiege;
    }

    public void setSiege(DetailSiege detailSiege) {
        this.DetailSiege = detailSiege;
    }

    public LocalDateTime getDateDereser() {
        return this.dateDeReservation;
    }

    public void setDateDereser(LocalDateTime dateDeReservation) {
        this.dateDeReservation = dateDeReservation;
    }
}