package com.example.NomadicSKy.Models;


import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    @JoinColumn(name = "Seat_id")
    private Seat seat;

    @Column(name = "Date_dereser")
    private String dateDereser;
    //
    // Constructeurs, getters et setters
    public Reservation() {}

    public Reservation(User user, Seat seat, String dateDereser) {
        this.user = user;
        this.seat = seat;
        this.dateDereser = dateDereser;
    }

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

    public Seat getSeat() {
        return seat;
    }

    public void setSeat(Seat seat) {
        this.seat = seat;
    }

    public String getDateDereser() {
        return dateDereser;
    }

    public void setDateDereser(String dateDereser) {
        this.dateDereser = dateDereser;
    }
}