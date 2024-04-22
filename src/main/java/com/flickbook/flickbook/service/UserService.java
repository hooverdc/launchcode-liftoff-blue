package com.flickbook.flickbook.service;

import com.flickbook.flickbook.models.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers ();



}
