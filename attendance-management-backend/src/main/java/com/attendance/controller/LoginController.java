package com.attendance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.attendance.model.User;
import com.attendance.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {

        User user = userRepository.findByUsernameAndPasswordAndRole(
                loginUser.getUsername(),
                loginUser.getPassword(),
                loginUser.getRole()
        );

        if (user != null) {
            return "Login successful";
        } else {
            return "Invalid username, password, or role";
        }
    }
}