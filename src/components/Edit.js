

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';         //  store and manage state variables in a functional component. 
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
function Edit() {


  const [id, setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

useEffect(()=>
{
   setId(localStorage.getItem("ID"));
   setEmpname(localStorage.getItem("NAME"));
   setAge(localStorage.getItem("AGE"));
   setDesignation(localStorage.getItem("DESIGNATION"));
   setSalary(JSON.parse (localStorage.getItem("SALARY")));   // json parse is a method used to parse a JSON string and convert it into a JavaScript object.


},[])  // empty array is used for stopping the continuity

// index value of array of employees

var index = Employee.map(item=>item.id).indexOf(id);         // npm i react uuid
console.log(index);

 // navigate to homepage for display the updated details
   
 let history = useNavigate()

const handleUpdate=(e)=>
{
     // for stoping the refresh

     e.preventDefault()
     console.log(e);
     let emp = Employee[index]
     console.log(emp)

     emp.empname = empname
     emp.age = age
     emp.designation = designation
     emp.salary = salary
     console.log(emp);

     history('/')


    

}

  
return (
    <>
       <h1 className='text-center m-5 mt-5'>Update Employee Details</h1>
       <p className='p-1'>An employee management system is intended to organize HR and other departments' work processes. It usually includes such features as comprehensive employee databases, work time tracking, custom access levels, and reporting.</p>
    
    <Row className='mb-5'>
        <Col md={5}>
        <img style={{width:"600px", height:"650px" }} src="https://icon-library.com/images/employee-icon-png/employee-icon-png-17.jpg"/>
        </Col>
        
        <Col md={6}>
        <Form className='border border-4 p-5'>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <h3 className='text-center'>Update your Details</h3>
        
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  value={empname} onChange={(e)=>setEmpname(e.target.value)}required/>
       </Form.Group>

    <Form.Group className="mb-3" >

      <Form.Label>Age</Form.Label>
     <Form.Control type="number" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)} required/>
    </Form.Group>

    
    <Form.Group className="mb-3" >
      <Form.Label>Designation</Form.Label>
     <Form.Control type="text" placeholder="Enter Your Designation" value={designation}onChange={(e)=>setDesignation(e.target.value)} required/>
    </Form.Group>

    
    <Form.Group className="mb-3" >
      <Form.Label>Salary</Form.Label>
     <Form.Control type="text" placeholder="Enter Your Salary" value={salary}onChange={(e)=>setSalary(e.target.value)} required/>
    </Form.Group>

    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
        Update
      </Button>
    </Form>
        </Col>
    </Row>
    
    
    </>
  )
}

export default Edit