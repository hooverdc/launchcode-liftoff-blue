package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.service.UserServiceImpl;
import com.flickbook.flickbook.service.MovieServiceImpl; //needs services added
import com.flickbook.flickbook.service.ReviewService; //needs services added
import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import javax.xml.catalog.BaseEntry;
import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private UserServiceImpl userServiceImpl;

  @Autowired
  private MovieServiceImpl movieService;

  @Autowired ReviewService reviewService;

  @PostMapping("/add")
  public String add(@RequestBody User user){
    userServiceImpl.saveUser(user);
    return "User successfully added";
  }

//  @GetMapping("/{userId}/movies")
//  public ResponseEntity<List<Movie>> getUserMovies(@PathVariable Long userId) {
//    List<Movie> movies = movieService.getUserMovies(userId);
//    return ResponseEntity.ok(movies);
//  }

//  @PostMapping("/{userId}/movies/{movieId}/reviews")
//  public ResponseEntity<Review> writeReview(@PathVariable Long userId, @PathVariable Long movieId, @RequestBody Review review) {
//    // Write the review for the provided movieId and userId
//    Review savedReview = reviewService.writeReview(userId, movieId, review);
//
//    // Return the saved review in the response body
//    return ResponseEntity.status(HttpStatus.CREATED).body(savedReview);
//  }


  private String generateRandomMovieId() {
    return "MOVIE-" + Math.random();
  }
  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  
    //    TODO
    
  }
}
