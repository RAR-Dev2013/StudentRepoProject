package StudentProjectBackend.StudentProject.Service;

import StudentProjectBackend.StudentProject.Model.Faculty;

import java.util.List;
import java.util.Optional;

public interface FacultyService {

    public List<Faculty> getAllFaculty();

    Optional<Faculty> getFacultyByID(int facultyID);

    public void deleteFacultyByID(int facultyID);

    public void saveOrUpdate(Faculty faculty);
}
