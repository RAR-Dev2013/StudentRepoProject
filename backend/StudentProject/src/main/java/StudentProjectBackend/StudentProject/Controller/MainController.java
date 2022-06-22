package StudentProjectBackend.StudentProject.Controller;

import StudentProjectBackend.StudentProject.Model.Faculty;
import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Service.FacultyService;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class MainController {

    @Autowired
    StudentService studentService;
    FacultyService facultyService;

    @GetMapping("/")
    public String greeting() {
        return "Hello Moto";
    }

    //GET ALL STUDENTS
    @GetMapping("/allStudents")
    public @ResponseBody
    List<Students> getAllStudents() {return studentService.getAllStudents(); }

    //EDIT STUDENTS

    //Get all FACULTY
    @GetMapping("/allFaculty")
    public @ResponseBody
    List<Faculty> getAllFaculties() {return facultyService.getAllFaculty(); }

    @GetMapping("/users/{studentId}")
    public @ResponseBody Optional<Students> getStudentsById(@PathVariable int studentId) {
        return studentService.getStudentByID(studentId);
    }


}
