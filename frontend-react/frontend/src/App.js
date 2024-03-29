import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Table from './components/table/Table'
import Navbar from './Navbar';
import { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import AddUser from './users/addUsers';
import EditUser from './users/editUser';



const list = [
  { id: 44, name: "Joe Dean", Age: 66},
  { id: 2, name: "Anita Dean", Age: 44},
  { id: 3, name: "Rox Dean", Age: 33},
  { id: 411, name: "Rox Dean", Age: 55},
  { id: 5, name: "Rox Dean", Age: 44},
  { id: 6, name: "Bob Brown", Age: 22},
  { id: 23, name: "Rox Dean", Age: 40},
  { id: 8, name: "Rox Dean", Age: 29},
  { id: 119, name: "Anna Wintor", Age: 44},
  { id: 10, name: "Rox Dean", Age: 44},
  { id: 11, name: "Rox Dean", Age: 44},
]

const colNames = ['Id', 'Name', 'Age']

function App() {
  return (

    <>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/Student" element={<Student />} />
          <Route path= "/faculty" element={<Faculty />} />
          <Route path= "/addUser" element={<AddUser />} />
          <Route path= "/editUser/:id" element={<EditUser />} />

        </Routes>
      </div>
    </>


  )
    
    return <Navbar/>
    // <div className="App">
    //   <Navbar/>
    //   <Table list={list} colNames={colNames} pageSize={3} />
    // </div>
  // );
}

export default App;
