package StudentProjectBackend.StudentProject.Repo;

import StudentProjectBackend.StudentProject.Model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacultyRepo extends JpaRepository<Faculty, Integer> {

    Optional<Faculty> findByFacultyID(int facultyID);

}
