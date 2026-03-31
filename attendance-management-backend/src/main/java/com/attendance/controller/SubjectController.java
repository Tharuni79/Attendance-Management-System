package com.attendance.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.attendance.model.Subject;
import com.attendance.repository.SubjectRepository;

@RestController
@RequestMapping("/subjects")
@CrossOrigin(origins = "*")
public class SubjectController {

    @Autowired
    private SubjectRepository subjectRepository;

    @PostMapping
    public String addSubject(@RequestBody Subject subject) {

        if (subjectRepository.existsBySubjectCode(subject.getSubjectCode())) {
            return "Subject with this code already exists";
        }

        subjectRepository.save(subject);
        return "Subject added successfully";
    }

    @GetMapping
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }
}