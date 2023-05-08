

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect} from 'react';         //  store and manage state variables in a functional component. 
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';                  // for generating unique id


function Add() {


  const [id, setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setSalary]=useState(0)

  let history=useNavigate()     // navigate to the home page

  const  handleData=(e)=>
    {
        e.preventDefault();          // to prevent refreshing on clicking add button

        let ids = uuid ()          // for unique id  but getting id is big
        console.log(ids);
        let uniqueId = ids.slice(0,8)     // slice is for setting small id
        console.log(uniqueId)

        // adding data to the Employee array- on clicking add button

        Employee.push({
            id:uniqueId,
            empname:empname,
            age:age,
            designation:designation,
            salary:salary,
        })

        history('/')


    }


  return (
    <div>
        <h1 className='text-center m-5 mt-5'>Add Employee Details</h1>
       <p className='p-1'>An employee management system is intended to organize HR and other departments' work processes. It usually includes such features as comprehensive employee databases, work time tracking, custom access levels, and reporting.</p>
    
    <Row className='mb-5'>
        <Col md={5}>
        <img style={{width:"600px", height:"650px" }} src="https://icon-library.com/images/employee-icon-png/employee-icon-png-17.jpg"/>
        </Col>
        
        <Col md={6}>
        <Form className='border border-4 p-5'>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <h3 className='text-center'>Add your Details</h3>
        
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name"  
        // value={empname} 
        onChange={(e)=>setEmpname (e.target.value)}required
        />
       </Form.Group>

    <Form.Group className="mb-3" >

      <Form.Label>Age</Form.Label>
     <Form.Control type="number" placeholder="Enter Your Age"
    //   value={age} 
    onChange={(e)=>setAge(e.target.value)} required
      />
    </Form.Group>

    
    <Form.Group className="mb-3" >
      <Form.Label>Designation</Form.Label>
     <Form.Control type="text" placeholder="Enter Your Designation" 
    //  value={designation}
    onChange={(e)=>setDesignation(e.target.value)} required
     />
    </Form.Group>

    
    <Form.Group className="mb-3" >
      <Form.Label>Salary</Form.Label>
     <Form.Control type="text" placeholder="Enter Your Salary" 
     
    //  value={salary}
    onChange={(e)=>setSalary(e.target.value)} required
     />
    </Form.Group>

    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleData(e)}>
       Add
      </Button>
    </Form>
        </Col>
    </Row>
    </div>
  )
}

export default Add