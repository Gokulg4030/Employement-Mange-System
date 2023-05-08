
// rfce

import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaTrashAlt, FaUserPlus } from "react-icons/fa";
import {Button} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom'

function Home() {

    const history = useNavigate();            // history is a navigation function
    const handleDelete=(id)=>
    {
      alert("Are you Sure to delete the Employee")
      console.log(Employee.map((item)=>item.id).indexOf(id));          // index of array value
      let index=Employee.map((item)=>item.id).indexOf(id)
      console.log(index);
      Employee.splice(index,1)          // splice is used to remove last item from array
      console.log(Employee);
      history('/')
        }

// set to local storage

    const hanldeEdit=(id,empname,age,designation,salary)=>
    {
        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empname);
        localStorage.setItem("AGE",age);
        localStorage.setItem("DESIGNATION",designation);
        localStorage.setItem("SALARY",JSON.stringify(salary));  // json.stringyfy method converts javascript objects to string


    }
   
    return (
        <div className='container'>
            <h1 className=' text-center mt-5'>Employee Management System</h1>
            <p>An employee management system is intended to organize HR and other departments' work processes. It usually includes such features as comprehensive employee databases, work time tracking, custom access levels, and reporting.It is important to find an employee management system that would meet the needs of your business. In any case, it should provide basic HR functions.The main benefit of this system is that it helps reduce the workload on HR departments and focus on other essential work. Automating recurring and administrative tasks spares much time that can be invested in growing your business.</p>
            
            <Link to={'/add'}>
             <Button className='btn btn-success'>Add Employee &nbsp;<FaUserPlus/></Button>
             </Link>  
            <Table striped bordered hover style={{ margin: "50px", border: "2px solid" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Employee && Employee.length > 0 ?
                            Employee.map((item) =>
                            (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.empname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                    <Link to={'/edit'}>
                                        <Button onClick={()=>hanldeEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button></Link>
                                     &nbsp;&nbsp;
                                     <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaTrashAlt/></Button>
                                     </td>
                                </tr>
                            ))

                            : "No data available"
                    }


                </tbody>
            </Table></div>
    )
}

export default Home