package StudentProjectBackend.StudentProject.Controller;

import StudentProjectBackend.StudentProject.Model.Faculty;
import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Service.FacultyService;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MainController {

    @Autowired
    StudentService studentService;
    @Autowired
    FacultyService facultyService;

    //TEST//
    @GetMapping("/")
    public String greeting() {
        return "Hello Moto";
    }


    //FACULTY PURPLE_KITTY PARTS//
    //GET ALL STUDENTS
    @GetMapping("/allStudents")
    public @ResponseBody
    List<Students> getAllStudentsController() {return studentService.getAllStudents(); }

    //GET STUDENTS BY ID//
    @GetMapping("/users/{studentId}")
    public @ResponseBody Optional<Students> getStudentsById(@PathVariable int studentId) {
        return studentService.getStudentByID(studentId);
    }

    //DELETE STUDENTS BY ID//
    @DeleteMapping("/studentDeleteByID/{studentID}")
    public void deleteStudent(@PathVariable("studentID") int studentId) {
        studentService.deleteStudentByID(studentId);
    }

    //ADD STUDENT BY ID//
    @PostMapping("/addStudent")
    public void addStudent(@RequestBody Students students) {
        studentService.saveOrUpdate(students);
    }

    //UPDATE STUDENT BY ID//
    @PatchMapping("/updateStudent")
    public void updateStudent(@RequestBody Students students) {
        studentService.saveOrUpdate(students);
    }






    //FACULTY SEIGE MODE PARTS//
    //GET ALL FACULTY
    @GetMapping("/allFaculty")
    public @ResponseBody
    List<Faculty> getAllFacultyController() {return facultyService.getAllFaculty(); }

    //GET FACULTY BY ID//
    @GetMapping("/users/faculty/{facultyID}")
    public @ResponseBody Optional<Faculty> getFacultyByID(@PathVariable int facultyID) {
        return facultyService.getFacultyByID(facultyID);
    }

    // Delete Faculty BY ID
    @DeleteMapping("/facultyDeleteByID/{facultyID}")
    public void deleteFacultyByID(@PathVariable("facultyID") int facultyID) {
        facultyService.deleteFacultyByID(facultyID);
    }

}
