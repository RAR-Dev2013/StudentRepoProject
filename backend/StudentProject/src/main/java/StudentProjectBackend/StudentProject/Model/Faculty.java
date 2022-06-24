package StudentProjectBackend.StudentProject.Model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity(name="faculty")
@Table(name="faculty")
public class Faculty {
    @Id
    @Column(name = "faculty_id")
    private int facultyID;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "assigned_college")
    private String assignedCollege;

    @Column(name = "position_level")
    private String positionLevel;

    @Column(name = "tenure")
    private String tenure;

    public Faculty() {

    }

    public Faculty(int facultyID, String firstName, String middleName, String lastName, String address, String phoneNumber, String assignedCollege, String positionLevel, String tenure) {
        this.facultyID = facultyID;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.assignedCollege = assignedCollege;
        this.positionLevel = positionLevel;
        this.tenure = tenure;
    }

    public int getFacultyID() {
        return facultyID;
    }

    public void setFacultyID(int facultyID) {
        this.facultyID = facultyID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAssignedCollege() {
        return assignedCollege;
    }

    public void setAssignedCollege(String assignedCollege) {
        this.assignedCollege = assignedCollege;
    }

    public String getPositionLevel() {
        return positionLevel;
    }

    public void setPositionLevel(String positionLevel) {
        this.positionLevel = positionLevel;
    }

    public String getTenure() {
        return tenure;
    }

    public void setTenure(String tenure) {
        this.tenure = tenure;
    }
}
