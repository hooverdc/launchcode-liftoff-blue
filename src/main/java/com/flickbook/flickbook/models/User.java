package com.flickbook.flickbook.models;

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

    @ManyToMany
    private List<Movie> moviesWatched = new ArrayList<>();

    @ManyToMany
    private List<Movie> moviesRecommend = new ArrayList<>();
    public User(String userName, String password) {
        this.username = userName;
        this.pwHash = encoder.encode(password);
    }
    public User() {
    }



    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }
}