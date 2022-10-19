import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



export default function Student() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  });

  const loadUsers=async ()=> {
    const result = await axios.get("http://localhost:8080/allStudents");
    setUsers(result.data);
  }


  return (
    // <p className="Student">
    //   STUDENT STUDENT
    // </p>
    <div className='container'>
      <div className='py-4'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">StudentID</th>
              <th scope="col">First Name</th>
              <th scope="col">Middle Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Grade Level</th>
              <th scope="col">Grade Level</th>
              <Link to="/addUser">HI</Link>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
              <tr>
              <td key={user.studentID}>{user.studentID}</td>
              <td key={user.firstName}>{user.firstName}</td>
              <td key={user.middleName}>{user.middleName}</td>
              <td key={user.lastName}>{user.lastName}</td>
              <td key={user.address}>{user.address}</td>
              <td key={user.phoneNumber}>{user.phoneNumber}</td>
              <td key={user.gradeLevel}>{user.gradeLevel}</td>
            </tr>  
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

