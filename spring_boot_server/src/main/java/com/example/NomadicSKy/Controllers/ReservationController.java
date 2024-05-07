package com.example.NomadicSKy.Controllers;


import com.example.NomadicSKy.Models.Reservation;
import com.example.NomadicSKy.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> list = reservationService.getAllReservations();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable("id") int id) {
        Reservation reservation = reservationService.getReservationById(id);
        return new ResponseEntity<>(reservation, reservation != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Reservation> saveReservation(@RequestBody Reservation reservation) {
        Reservation savedReservation = reservationService.saveReservation(reservation);
        return new ResponseEntity<>(savedReservation, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable("id") int id) {
        reservationService.deleteReservation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

