package com.flickbook.flickbook.controllers;


import com.flickbook.flickbook.models.Movie;
import com.flickbook.flickbook.models.Review;
import com.flickbook.flickbook.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class LoginController {
}

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginController LoginController;

    @Autowired
    private Regitration Registration;

    @Autowired Username Username;
