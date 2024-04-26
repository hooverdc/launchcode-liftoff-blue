package com.flickbook.flickbook.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.ArrayList;
import java.util.List;


@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @NotNull(message = "Username is required")
    @Column(name = "user_name", nullable = false, unique = true)
    private String username;


    @NotNull(message = "Password is required")
    @Column(name = "pw_hash")
    private String pwHash;

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Movie> moviesToWatched = new ArrayList<>();

    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Movie> moviesLiked = new ArrayList<>();
    public User(String userName, String password) {
        this.username = userName;
        this.pwHash = encoder.encode(password);
    }
    public User() {
    }

    public void addMovieToWatched(Movie movie) {
        moviesToWatched.add(movie);
    }
    public void addMovieLiked(Movie movie) {
        moviesLiked.add(movie);
    }
    public List<Movie> getMoviesToWatched() {
        return moviesToWatched;
    }
    public List<Movie> getMoviesLiked() {
        return moviesLiked;
    }

    public void deleteMovieToWatched(Movie movie) {
        moviesToWatched.remove(movie);
    }
    public void deleteMovieLiked(Movie movie) {
        moviesLiked.remove(movie);
    }




    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }
}