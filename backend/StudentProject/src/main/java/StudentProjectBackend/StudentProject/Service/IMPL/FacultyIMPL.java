package StudentProjectBackend.StudentProject.Service.IMPL;

import StudentProjectBackend.StudentProject.Model.Faculty;
import StudentProjectBackend.StudentProject.Repo.FacultyRepo;
import StudentProjectBackend.StudentProject.Service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    //Get 1 Faculty
    @Override
    public Optional<Faculty> getFacultyByID(int facultyID) {
        return facultyRepo.findByFacultyID(facultyID);
    }

    // Delete by Faculty ID
    public void deleteFacultyByID(int facultyID) {
        facultyRepo.deleteById(facultyID);
    }

    public void saveOrUpdate(Faculty faculty) {
        facultyRepo.save(faculty);
    }
}
