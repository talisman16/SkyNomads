package com.example.NomadicSKy.Controllers;

import com.example.NomadicSKy.Models.User;
import com.example.NomadicSKy.Repository.UserRepo;
import com.example.NomadicSKy.Service.UserService;
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

    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserController(UserService userService, BCryptPasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    // POST request to add a new user
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user) {
        try {
            // Encrypt the password before saving
            user.setUser_password(passwordEncoder.encode(user.getUser_password()));
            
               
            User newUser = userService.addUser(user);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // GET request to retrieve all users
    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        try {
            List<User> users = userService.getAllUsers();
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
            Optional<User> userData = userService.getUserById(id);
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
            userService.deleteUserById(id);
            return "User with the id " + id + " deleted!";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            // Authenticate the user
            boolean isAuthenticated = userService.authenticateUser(user);
            if (isAuthenticated) {
                // Fetch user data
                Optional<User> userData = userService.getUserByEmail(user.getUser_email());
                if (userData.isPresent()) {
                    // Return user data
                    return new ResponseEntity<>(userData.get(), HttpStatus.OK);
                } else {
                    return new ResponseEntity<>("No user found", HttpStatus.NOT_FOUND);
                }
            } else {
                return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUserById(@PathVariable("id") Integer id, @RequestBody User newUser) {
        try {
            Optional<User> userData = userService.getUserById(id);
            if (userData.isPresent()) {
                User user = userData.get();
                // Update user data
                user.setUser_prenom(newUser.getUser_prenom());
                user.setUser_nom(newUser.getUser_nom());
                user.setUser_email(newUser.getUser_email());
                user.setUser_PhoneNumber(newUser.getUser_PhoneNumber());
                user.setUser_password(passwordEncoder.encode(newUser.getUser_password()));
                user.setUser_Adresse(newUser.getUser_Adresse());
                user.setUser_Ville(newUser.getUser_Ville());
                user.setUser_pays(newUser.getUser_pays());
                // Save the updated user
                userService.addUser(user);
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
  
}
