package StudentProjectBackend.StudentProject.Controller;

import StudentProjectBackend.StudentProject.Model.Faculty;
import StudentProjectBackend.StudentProject.Model.Students;
import StudentProjectBackend.StudentProject.Repo.StudentRepo;
import StudentProjectBackend.StudentProject.Service.FacultyService;
import StudentProjectBackend.StudentProject.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public String deleteStudent(@PathVariable("studentID") int studentId) {
        Students studentToDelete = studentService.getStudentByID(studentId)
                .orElseThrow(() -> new IllegalArgumentException("BAD IDEA"));

        studentService.deleteStudentByID(studentToDelete.getStudentID());

        return "Deleted +" + studentId;
    }

    //ADD STUDENT BY ID//
    @PostMapping("/addStudent")
    public void addStudent(@RequestBody Students students) {
        studentService.saveOrUpdate(students);
    }

    //UPDATE STUDENT BY ID//
//    @PatchMapping("/updateStudent")
//    public void updateStudent(@RequestBody Students students) {
//        studentService.saveOrUpdate(students);
//    }

    //UPDATE STUDENT BY ID//
    @PutMapping("/updateStudent/{studentId}")
    public ResponseEntity<Students> updateStudent(@RequestBody Students studentDetails, @PathVariable int studentId) {
        Students updatedStudent = studentService.getStudentByID(studentId)
                .orElseThrow(() -> new IllegalArgumentException("BAD IDEA"));

        updatedStudent.setStudentID(studentDetails.getStudentID());
        updatedStudent.setFirstName(studentDetails.getFirstName());
        updatedStudent.setMiddleName(studentDetails.getMiddleName());
        updatedStudent.setLastName(studentDetails.getLastName());
        updatedStudent.setAddress(studentDetails.getAddress());
        updatedStudent.setPhoneNumber(studentDetails.getPhoneNumber());
        updatedStudent.setGradeLevel(studentDetails.getGradeLevel());
        studentService.saveOrUpdate(updatedStudent);

        return ResponseEntity.ok(updatedStudent);
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

    //Add faculty by ID
    @PostMapping("/addFaculty")
    public void addFaculty(@RequestBody Faculty faculty) {
        facultyService.saveOrUpdate(faculty);
    }

    //Update Student by ID
    @PutMapping("/updateFaculty")
    public void updateFaculty(@RequestBody Faculty faculty) {
        facultyService.saveOrUpdate(faculty);
    }

}
