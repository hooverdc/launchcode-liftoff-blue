package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserRepository userRepository;
  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  
    //    TODO
    
  }
}
