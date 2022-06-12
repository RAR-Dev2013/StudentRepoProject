package StudentProjectBackend.StudentProject.Service.IMPL;

import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Repo.StudentRepo;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentIMPL implements StudentService {

    @Autowired
    StudentRepo studentRepo;

    //GET ALL STUDENTS
    public List<Students> getAllStudents() {
        List<Students> list = studentRepo.findAll();
        System.out.println(list.size());
        return list;

    }
}
