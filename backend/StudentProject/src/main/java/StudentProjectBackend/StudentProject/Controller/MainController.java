package StudentProjectBackend.StudentProject.Controller;

import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    StudentService studentService;

    @GetMapping("/")
    public String greeting() {
        return "Hello Greetings";
    }

    //GET ALL STUDENTS
    @GetMapping("/allStudents")
    public @ResponseBody
    List<Students> getAllStudents() {return studentService.getAllStudents(); }



}
