import React from "react";

export default function AddUser() {
    return <div className="container">
        <h1>Form Goes Here</h1>
        <form>
            <div class="mb-3">
                <label for="labelStudentID" class="form-label">Student ID</label>
                <input type="studentID" class="form-control" id="inputStudentId" aria-describedby="emailHelp" placeholder="Enter an ID you'll remeber"/>
                    <div id="helpStudentID" class="form-text">We'll never share your Student ID with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="inputFirstName" class="form-label">First Name</label>
                <input type="firstName" class="form-control" id="inputFirstName" placeholder="Enter your first name"/>
            </div>
            <div class="mb-3">
                <label for="inputMiddleName" class="form-label">Middle Name</label>
                <input type="middleName" class="form-control" id="inputMiddleName" placeholder="Enter your middle name"/>
            </div>
            <div class="mb-3">
                <label for="inputLastName" class="form-label">Last Name</label>
                <input type="lastName" class="form-control" id="inputLastName" placeholder="Enter your last name"/>
            </div>
            <div class="mb-3">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="Address" class="form-control" id="inputAddress" placeholder="Enter your Address"/>
            </div>
            <div class="mb-3">
                <label for="inputPhoneNumber" class="form-label">Phone Number</label>
                <input type="phoneNumber" class="form-control" id="inputPhoneNumber" placeholder="Enter your phone number"/>
            </div>
            <div class="mb-3">
                <label for="inputGradeLevel" class="form-label">Grade Level</label>
                <input type="gradeLevel" class="form-control" id="inputGradeLevel" placeholder="Enter your grade level"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}


