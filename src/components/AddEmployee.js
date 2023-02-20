import React, { useState } from 'react'
import EmployeCss from "../styles/addemployee.module.css"

export default function AddEmployee() {

    const [employeeAdded,setEmployeeAdded]=useState(false);
    const [inputData,setInputData]=useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        salary:""
    })

    const handleChange=(e)=>{
        setInputData(prevData=>{
            return {
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }


   const handleAdd=async()=>{
    await fetch("http://localhost:8080/employee",{
        method:"POST",
        headers:{
            "Content-Type" :"application/json"
        },
        body:JSON.stringify(inputData)
    })
    setEmployeeAdded(true)
    setInputData({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
        address:"",
        salary:""
    })
   } 

  return (
    <>
        <h1>Add new employee</h1>
        {employeeAdded && <h2>Employee succesfully added !</h2>}
        <div className={EmployeCss.popup}>
                <div className={EmployeCss.field}>
                    <label>First Name</label>
                    <input type="text" value={inputData.firstName} name="firstName" onChange={handleChange}></input>
                </div>
                <div className={EmployeCss.field}>
                    <label>Last Name</label>
                    <input type="text" value={inputData.lastName} name="lastName" onChange={handleChange}></input>
                </div>
                <div className={EmployeCss.field}>
                    <label>Email</label>
                    <input type="email" value={inputData.email} name="email" onChange={handleChange}></input>
                </div>
                <div className={EmployeCss.field}>
                    <label>Adress</label>
                    <input type="text"value={inputData.address} name="address" onChange={handleChange}></input>
                </div>
                <div className={EmployeCss.field}>
                    <label>Salary</label>
                    <input type="text" value={inputData.salary} name="salary" onChange={handleChange}></input>
                </div>
                <button className={EmployeCss["add-button"]} onClick={handleAdd} >Add</button>
        </div>
    </>
  )
}
