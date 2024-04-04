package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.User;
import com.example.NomadicSKy.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepo userRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserRepo userRepo, BCryptPasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    // POST request to add a new user
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        try {
            // Encrypt the password before saving
            user.setUser_password(passwordEncoder.encode(user.getUser_password()));
            User newUser = userRepo.save(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET request to retrieve all users
    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> users = (List<User>) userRepo.findAll();
            if (users.isEmpty()) {
                return new ResponseEntity<>("No user added yet", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Integer id) {
        try {
            Optional<User> userData = userRepo.findById(id);
            
            if (userData.isPresent()) {
                return new ResponseEntity<>(userData.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("No user added yet", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public String deleteUserById(@PathVariable("id") Integer id) {
        try {
            userRepo.deleteById(id);
            return "user with the id ; " + id +  "deleted! "; 
        } catch (Exception e) {
            return e.getMessage();
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            // Find the user by email
            Optional<User> userData = userRepo.findByuseremail(user.getUser_email());
            if (userData.isPresent()) {
                // Check if the provided password matches the stored password
                if (passwordEncoder.matches(user.getUser_password(), userData.get().getUser_password())) {
                    return new ResponseEntity<>("Login successful", HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("Incorrect password", HttpStatus.UNAUTHORIZED);
                }
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
