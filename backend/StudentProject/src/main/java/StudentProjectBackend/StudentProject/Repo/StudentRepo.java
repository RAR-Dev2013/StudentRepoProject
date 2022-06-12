package StudentProjectBackend.StudentProject.Repo;

import StudentProjectBackend.StudentProject.Model.Students;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Students, String> {


}
