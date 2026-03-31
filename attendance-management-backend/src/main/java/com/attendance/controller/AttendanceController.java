package com.attendance.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.attendance.model.Attendance;
import com.attendance.repository.AttendanceRepository;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "*")
public class AttendanceController {

    @Autowired
    private AttendanceRepository attendanceRepository;

    @PostMapping
    public String markAttendance(@RequestBody Attendance attendance) {

        Long studentId = attendance.getStudent().getId();
        Long subjectId = attendance.getSubject().getId();
        LocalDate date = attendance.getDate();

        boolean alreadyExists = attendanceRepository
                .existsByStudentIdAndSubjectIdAndDate(studentId, subjectId, date);

        if (alreadyExists) {
            return "Attendance already marked for this student, subject, and date";
        }

        attendanceRepository.save(attendance);
        return "Attendance marked successfully";
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    @GetMapping("/student/{studentId}")
    public List<Attendance> getAttendanceByStudent(@PathVariable Long studentId) {
        return attendanceRepository.findByStudentId(studentId);
    }

    @GetMapping("/subject/{subjectId}")
    public List<Attendance> getAttendanceBySubject(@PathVariable Long subjectId) {
        return attendanceRepository.findBySubjectId(subjectId);
    }

    @GetMapping("/student/{studentId}/subject/{subjectId}")
    public List<Attendance> getAttendanceByStudentAndSubject(@PathVariable Long studentId,
                                                             @PathVariable Long subjectId) {
        return attendanceRepository.findByStudentIdAndSubjectId(studentId, subjectId);
    }

    @GetMapping("/date/{date}")
    public List<Attendance> getAttendanceByDate(@PathVariable String date) {
        return attendanceRepository.findByDate(LocalDate.parse(date));
    }

    @GetMapping("/percentage/student/{studentId}/subject/{subjectId}")
    public double getAttendancePercentage(@PathVariable Long studentId,
                                          @PathVariable Long subjectId) {

        List<Attendance> records = attendanceRepository.findByStudentIdAndSubjectId(studentId, subjectId);

        if (records.isEmpty()) {
            return 0.0;
        }

        long presentCount = records.stream()
                .filter(a -> "PRESENT".equalsIgnoreCase(a.getStatus()))
                .count();

        return (presentCount * 100.0) / records.size();
    }
}