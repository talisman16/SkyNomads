package com.example.NomadicSKy.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.NomadicSKy.Models.User;

public interface UserRepo extends CrudRepository<User, Integer> {
    Optional<User> findByuseremail(String useremail);
}
