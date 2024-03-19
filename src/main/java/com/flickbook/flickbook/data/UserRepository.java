package com.flickbook.flickbook.data;

import com.flickbook.flickbook.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
