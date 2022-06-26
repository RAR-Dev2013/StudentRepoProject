package StudentProjectBackend.StudentProject.Service.IMPL;

import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Repo.StudentRepo;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    //GET STUDENTS BY ID
    @Override
    public Optional<Students> getStudentByID(int studentID) {
        return studentRepo.findById(studentID);
    }

    //DELETE BY STUDENT ID//
    public void deleteStudentByID(int studentID) {
        studentRepo.deleteById(studentID);

    }


}
