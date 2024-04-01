package com.flickbook.flickbook.service;

import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public User saveUser(User user) {
       return userRepository.save(user);
    }
}