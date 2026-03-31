package com.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.attendance.model.Faculty;
import com.attendance.repository.FacultyRepository;

@RestController
@RequestMapping("/faculty")
@CrossOrigin(origins = "*")
public class FacultyController {

    @Autowired
    private FacultyRepository facultyRepository;

    @PostMapping
    public String addFaculty(@RequestBody Faculty faculty) {

        if (facultyRepository.existsByEmail(faculty.getEmail())) {
            return "Faculty with this email already exists";
        }

        facultyRepository.save(faculty);
        return "Faculty added successfully";
    }

    @GetMapping
    public List<Faculty> getAllFaculty() {
        return facultyRepository.findAll();
    }
}