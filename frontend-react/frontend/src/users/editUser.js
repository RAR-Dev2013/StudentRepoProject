import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditUser() {
  
    let navigate=useNavigate()

    const {studentId}= useParams()
    
    const [user, setUser]=useState({
        studentID:"",
        firstName:"",
        middleName:"",
        lastName:"",
        address:"",
        phoneNumber:"",
        gradeLevel:""
    })
    
    const {studentID, firstName, middleName, lastName, address, phoneNumber, gradeLevel}= user;

    const onInputChange=(e)=> {
        setUser({ ...user,[e.target.name]:e.target.value});
    }

    useEffect(()=>{
        loadUser()
    }, [])

    const onSubmit =async (e) => {
        e.preventDefault();
        console.log(e);
        await axios.put(`http://localhost:8080/updateStudent/${studentID}`, user)
        // .then((user) => {
        //     console.log(user)
        // })
        navigate("/Student");
    };

    const loadUser = async ()=> {
        const result=await axios.get(`http://localhost:8080/users/${studentID}`)
        setUser(result.data)
    };
    
    return <div className="container">
        <h1>Form Goes Here</h1>
        <form onSubmit={(e)=> onSubmit(e)}>
            <div class="mb-3">
                <label for="labelStudentID" class="form-label">Student ID</label>
                <input
                    type="studentID"
                    class="form-control"
                    id="inputStudentId"
                    aria-describedby="emailHelp"
                    placeholder="Enter an ID you'll remeber"
                    name="studentID"
                    value={studentID}
                    onChange={(e)=>onInputChange(e)}

                    />
                <div id="helpStudentID" class="form-text">We'll never share your Student ID with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="inputFirstName" class="form-label">First Name</label>
                <input
                    type="firstName"
                    class="form-control"
                    id="inputFirstName"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <div class="mb-3">
                <label for="inputMiddleName" class="form-label">Middle Name</label>
                <input
                    type="middleName"
                    class="form-control"
                    id="inputMiddleName"
                    placeholder="Enter your middle name"
                    name="middleName"
                    value={middleName}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <div class="mb-3">
                <label for="inputLastName" class="form-label">Last Name</label>
                <input
                    type="lastName"
                    class="form-control"
                    id="inputLastName"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <div class="mb-3">
                <label for="inputAddress" class="form-label">Address</label>
                <input
                    type="Address"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter your Address"
                    name="address"
                    value={address}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <div class="mb-3">
                <label for="inputPhoneNumber" class="form-label">Phone Number</label>
                <input
                    type="phoneNumber"
                    class="form-control"
                    id="inputPhoneNumber"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <div class="mb-3">
                <label for="inputGradeLevel" class="form-label">Grade Level</label>
                <input
                    type="gradeLevel"
                    class="form-control"
                    id="inputGradeLevel"
                    placeholder="Enter your grade level"
                    name="gradeLevel"
                    value={gradeLevel}
                    onChange={(e)=>onInputChange(e)}
                    />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}


