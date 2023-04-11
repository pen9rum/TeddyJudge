package com.Teddy.backend.controller;
import com.Teddy.backend.model.TeacherBO;
import com.Teddy.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class CustomerController {

    @Autowired
    private TeacherService teacherService;

    @PostMapping("/addteacher")
    public ResponseEntity<Void> addTeacher(@RequestBody TeacherBO teacherBo) {
        System.out.println("app");
        if(teacherService.add(teacherBo)==false)
        {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        System.out.println("apple");
        teacherService.add(teacherBo);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<TeacherBO> getCustomer(@PathVariable("id") long id) {
//        TeacherBO teacherBo = teacherService.get(id);
//        if (TeacherBO.getId() != null) {
//            return new ResponseEntity<>(teacherBo, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
}
