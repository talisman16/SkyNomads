package com.example.NomadicSKy.Service;

import com.example.NomadicSKy.Models.User;
import com.example.NomadicSKy.Repository.UserRepo;

import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

     @Autowired
    private HttpSession session;

    private final UserRepo userRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepo userRepo, BCryptPasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    // Add a new user
    public User addUser(User user) {
        user.setUser_password(passwordEncoder.encode(user.getUser_password()));
        return userRepo.save(user);
    }
    public Optional<User> getUserByEmail(String email) {
        return userRepo.findByuseremail(email);
        }
        
    // Get all users
    public List<User> getAllUsers() {
        return (List<User>) userRepo.findAll();
    }

    // Get a user by ID
    public Optional<User> getUserById(Integer id) {
        return userRepo.findById(id);
    }

    // Delete a user by ID
    public void deleteUserById(Integer id) {
        userRepo.deleteById(id);
    }

    // Authenticate a user
    public boolean authenticateUser(User user) {
        Optional<User> userData = userRepo.findByuseremail(user.getUser_email());
        if (userData.isPresent()) {
            return passwordEncoder.matches(user.getUser_password(), userData.get().getUser_password());
        } else {
            return false;
        }
        
    }
    public void logoutUser(String email) {
        // Perform any necessary logout actions here
        // For example, clearing session-related data
        
        // Clear the user data from the session
        session.removeAttribute("userData");
    
        // Clear the user email from the session
        session.removeAttribute("email");
    
        // Clear the user data from any other storage mechanism
        // that you are using to store the user data.
    }
    

}
