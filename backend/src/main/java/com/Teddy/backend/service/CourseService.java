package com.Teddy.backend.service;
import com.Teddy.backend.dao.CourseDao;
import com.Teddy.backend.entity.Course;
import com.Teddy.backend.model.CourseBO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Teddy.backend.dao.CourseDao;
import com.Teddy.backend.entity.Course;
import com.Teddy.backend.model.CourseBO;
import java.util.Optional;
@Service
public class CourseService {

    @Autowired
    private CourseDao courseDao;

    public boolean add(CourseBO bo) {
        Course entity = new Course();
        entity.setCoursename(bo.getCoursename());
        entity.setPDF(bo.getPDF()); // PDF is now a byte[]
        courseDao.save(entity);
        return true;
    }
}
