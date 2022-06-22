package StudentProjectBackend.StudentProject.Service;

import StudentProjectBackend.StudentProject.Model.Students;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    public List<Students> getAllStudents();

    Optional<Students> getStudentByID(int studentID);
}
