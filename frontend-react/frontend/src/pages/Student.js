import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";



export default function Student() {

  const [users, setUsers] = useState([]);

  const {studentID}=useParams()

  useEffect(() => {
    loadUsers();
  });

  const loadUsers=async ()=> {
    const result = await axios.get("http://localhost:8080/allStudents");
    setUsers(result.data);
  }
  
  const deleteUser = async (studentID)=>{
    await axios.delete(`http://localhost:8080/studentDeleteByID/${studentID}`)
    loadUsers()
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
              <Link to="/addUser">
                <button type="button" class="addUser">
                  Add User
                </button>
              </Link>
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
                  <td>
                    <Link type="button" class="btn btn-primary"                  
                    to={`/editUser/${user.studentID}`}
                    >Edit</Link>  
                  
                    <button type="button" class="btn btn-danger"
                    onClick={()=>deleteUser(user.studentID)}
                    >Delete</button>
                  </td>
                </tr>  
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

