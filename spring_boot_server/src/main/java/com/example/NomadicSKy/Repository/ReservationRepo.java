package com.example.NomadicSKy.Repository;

import com.example.NomadicSKy.Models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

}
