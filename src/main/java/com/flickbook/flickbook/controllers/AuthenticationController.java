package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.User;
import com.flickbook.flickbook.models.dto.LoginForm;
import com.flickbook.flickbook.models.dto.RegistrationForm;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Controller
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
    @Autowired
    UserRepository userRepository;

    private static final String userSessionKey = "user";

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    public User getUserFromSession(HttpSession session) {
        Long userId = (Long) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }
        Optional<User> userOptional= userRepository.findById(userId);
        if (userOptional.isEmpty()) {
            return null;
        }
        return userOptional.get();
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationForm registrationForm, HttpSession session) {
        User user = new User(registrationForm.getUsername(), registrationForm.getPassword());
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build(); // User already exists
        } else {
            User newUser = userRepository.save(user);
            setUserInSession(session, newUser);
            return ResponseEntity.ok().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginForm loginForm, HttpSession session) {
        User existingUser = userRepository.findByUsername(loginForm.getUsername());
        if (existingUser != null && existingUser.isMatchingPassword(loginForm.getPassword())) {
            setUserInSession(session, existingUser);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
