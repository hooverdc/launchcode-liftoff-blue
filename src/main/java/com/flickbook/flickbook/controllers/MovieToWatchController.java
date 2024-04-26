package com.flickbook.flickbook.controllers;

import com.flickbook.flickbook.data.MovieRepository;
import com.flickbook.flickbook.data.UserRepository;
import com.flickbook.flickbook.models.Movie;
import com.flickbook.flickbook.models.User;
import com.flickbook.flickbook.models.dto.MovieDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/movies-to-watch")
public class MovieToWatchController {
    @Autowired
    MovieRepository movieRepository;

    @Autowired
    UserRepository userRepository;
    @PostMapping("/add")
    public String addMovieLiked(@RequestBody MovieDTO movieDTO) {
        Movie movie = new Movie(movieDTO.getId(),movieDTO.getTitle(), movieDTO.getYear(), movieDTO.getPoster());
        User user = userRepository.findByUsername(movieDTO.getUsername());
        if (user == null) {
            return "User not found";
        }
        movieRepository.save(movie);
        user.addMovieToWatched(movie);
        userRepository.save(user);
        return "Movie is added to to watch list";
    }

    @GetMapping("/get")
    public Iterable<Movie> getMoviesLiked(@RequestParam String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return null;
        }
        return user.getMoviesToWatched();
    }

    @DeleteMapping("/delete")
    public String deleteMovieLiked(@RequestParam String username, @RequestParam String movieId) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return "User not found";
        }
        Optional<Movie> movie = movieRepository.findById(movieId);
        if (movie.isEmpty()) {
            return "Movie not found";
        }
        user.deleteMovieToWatched(movie.get());
        userRepository.save(user);
        return "Movie is removed from to watch list";
    }
}
