package com.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.attendance.model.Student;
import com.attendance.repository.StudentRepository;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping
    public String addStudent(@RequestBody Student student) {

        if (studentRepository.existsByEmail(student.getEmail())) {
            return "Student with this email already exists";
        }

        studentRepository.save(student);
        return "Student added successfully";
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}