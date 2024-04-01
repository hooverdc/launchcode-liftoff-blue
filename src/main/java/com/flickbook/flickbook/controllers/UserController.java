package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.User;
import com.flickbook.flickbook.service.UserService;
import com.flickbook.flickbook.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
  @Autowired
  private UserService userService;

  @PostMapping("add")
  public String add(@RequestBody User user) {
    userService.saveUser(user);
    return "New user is added";
  }

}
