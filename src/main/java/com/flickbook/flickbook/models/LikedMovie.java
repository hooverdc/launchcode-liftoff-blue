package com.flickbook.flickbook.models;

import jakarta.persistence.*;

@Entity
@Table(name = "liked_movies")
public class LikedMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "review")
    private String review;

    // getters and setters
}