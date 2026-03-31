package com.attendance.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendance.model.Faculty;

public interface FacultyRepository extends JpaRepository<Faculty, Long> {

    boolean existsByEmail(String email);
}