package StudentProjectBackend.StudentProject.Service.IMPL;

import StudentProjectBackend.StudentProject.Model.Faculty;
import StudentProjectBackend.StudentProject.Repo.FacultyRepo;
import StudentProjectBackend.StudentProject.Service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacultyIMPL implements FacultyService {

    @Autowired
    FacultyRepo facultyRepo;

    //Get all faculty
    public List<Faculty> getAllFaculty() {
        List<Faculty> list = facultyRepo.findAll();
        System.out.println(list.size());
        return list;
    }

    // Get a faculty member by ID
    // Had to change String to Optional<Faculty>
    public Faculty getByID(int id){
        // Convert id into a string
        String s_fmember = String.valueOf(id);
        // Dont know what Optional<Faculty> type is but
        // finally accepts my search
        Faculty f_member = facultyRepo.getReferenceById(s_fmember);
        return f_member;

    }
}
