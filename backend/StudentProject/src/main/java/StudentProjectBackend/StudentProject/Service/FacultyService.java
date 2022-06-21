package StudentProjectBackend.StudentProject.Service;

import StudentProjectBackend.StudentProject.Model.Faculty;

import java.util.List;

public interface FacultyService {

    //Get all faculty members method
    public List<Faculty> getAllFaculty();

    // GEt a faculty member by ID method
    public Faculty getByID(int id);

}
