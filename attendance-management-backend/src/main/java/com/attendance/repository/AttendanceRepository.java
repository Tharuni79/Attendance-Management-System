package com.attendance.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.attendance.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    List<Attendance> findByStudentId(Long studentId);

    List<Attendance> findBySubjectId(Long subjectId);

    List<Attendance> findByStudentIdAndSubjectId(Long studentId, Long subjectId);

    List<Attendance> findByDate(LocalDate date);

    boolean existsByStudentIdAndSubjectIdAndDate(Long studentId, Long subjectId, LocalDate date);
}