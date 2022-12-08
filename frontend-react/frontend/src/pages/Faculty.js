import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Faculty() {
  
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    loadFaculty();
  });

  const loadFaculty=async ()=> {
    const result = await axios.get("http://localhost:8080/allFaculty");
    setFaculty(result.data);
  }
  
  return (
    <div className='container'>
    <div className='py-4'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Faculty ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Assigned College</th>
            <th scope="col">Position Level</th>
            <th scope="col">Tenure</th>
            <Link to="/addUser">
              <button type="button" class="addFaculty">
                Add Faculty
              </button>
            </Link>
          </tr>
        </thead>
        <tbody>
          {
            faculty.map((faculty,index)=>(
              <tr>
                <td key={faculty.facultyID}>{faculty.facultyID}</td>
                <td key={faculty.firstName}>{faculty.firstName}</td>
                <td key={faculty.middleName}>{faculty.middleName}</td>
                <td key={faculty.lastName}>{faculty.lastName}</td>
                <td key={faculty.address}>{faculty.address}</td>
                <td key={faculty.phoneNumber}>{faculty.phoneNumber}</td>
                <td key={faculty.assignedCollege}>{faculty.assignedCollege}</td>
                <td key={faculty.positionLevel}>{faculty.positionLevel}</td>
                <td key={faculty.tenure}>{faculty.tenure}</td>
                {/* <td>
                  <Link type="button" class="btn btn-primary"                  
                  to={`/editUser/${user.studentID}`}
                  >Edit</Link>  
                
                  <button type="button" class="btn btn-danger"
                  onClick={()=>deleteUser(user.studentID)}
                  >Delete</button>
                </td> */}
              </tr>  
            ))
          }
        </tbody>
      </table>
    </div>

  </div>
      
    )



  }


