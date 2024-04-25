package com.flickbook.flickbook.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reviews")
public class Review {
  @Id
  @GeneratedValue()
  private Long id;

  @NotNull(message = "Author is required")
  @Column(name = "author")
  private String author;
  
  @NotNull(message = "Name is required")
  @Size(max = 250, message = "Movie name can only be 250 characters maximum")
  @Column(name = "title")
  private String title;

  private String year;

  private boolean series;

  private String description;

}
