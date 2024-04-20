package com.flickbook.flickbook.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Username is required")
    @Column(name = "user_name", nullable = false, unique = true)
    private String userName;

    @NotNull(message = "Email is required")
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @NotNull(message = "Password is required")
    @Size(min = 8, max = 64, message = "Password must be between 8 and 64 characters")
    @Column(name = "password")
    private String password;

    @Column(name = "profile_picture")
    private String ProfilePicture;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<MovieList> userLists = new ArrayList<>();
}