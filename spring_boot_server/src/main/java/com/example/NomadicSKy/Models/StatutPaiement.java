package com.example.NomadicSKy.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.time.LocalDate;
@Entity
@Table(name = "Payment_Status")
public class StatutPaiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Payment_ID")
    private int paymentId;

    @Column(name = "Payment_Status_YN", nullable = false, length = 1)
    private char paymentStatusYN;

    @Column(name = "Payment_Due_Date")
    private LocalDate paymentDueDate;

    @Column(name = "Payment_Amount")
    private Integer paymentAmount;

    @ManyToOne
    @JoinColumn(name = "Reservation_ID", nullable = false)
    private Reservation reservation;

    // Constructeurs, getters et setters

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public char getPaymentStatusYN() {
        return paymentStatusYN;
    }

    public void setPaymentStatusYN(char paymentStatusYN) {
        this.paymentStatusYN = paymentStatusYN;
    }

    public LocalDate getPaymentDueDate() {
        return paymentDueDate;
    }

    public void setPaymentDueDate(LocalDate paymentDueDate) {
        this.paymentDueDate = paymentDueDate;
    }

    public Integer getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(Integer paymentAmount) {
        this.paymentAmount = paymentAmount;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
