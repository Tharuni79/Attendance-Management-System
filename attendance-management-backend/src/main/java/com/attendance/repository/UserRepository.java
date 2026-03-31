package com.attendance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendance.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsernameAndPasswordAndRole(String username, String password, String role);
}