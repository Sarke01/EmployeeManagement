import React, { useState } from 'react'
import  PopupCss from "../styles/popup.module.css"
import close from "../images/close.png"

export default function Popup(props) {
   const {handleClose,data,fetchHandler} = props 
   const [inputData,setInputData]=useState(data)

   const handleChange=(e)=>{
    setInputData(prevData=>{
        return {
            ...prevData,
            [e.target.name] : e.target.value
        }
    })
   }

   const handleApply=async() =>{
    await fetch("http://localhost:8080/employee/"+inputData.id,{
        method:"PUT",
        headers:{
            "Content-Type" :"application/json"
        },
        body:JSON.stringify(inputData)
    })
    await fetchHandler();
    handleClose();
   }

  return (
    <>
        <div className={PopupCss.popup}>
            <div className={PopupCss.field}>
                <label>First Name</label>
                <input type="text" value={inputData.firstName} name="firstName" onChange={handleChange}></input>
            </div>
            <div className={PopupCss.field}>
                <label>Last Name</label>
                <input type="text" value={inputData.lastName} name="lastName" onChange={handleChange}></input>
            </div>
            <div className={PopupCss.field}>
                <label>Email</label>
                <input type="email" value={inputData.email} name="email" onChange={handleChange}></input>
            </div>
            <div className={PopupCss.field}>
                <label>Adress</label>
                <input type="text"value={inputData.address} name="address" onChange={handleChange}></input>
            </div>
            <div className={PopupCss.field}>
                <label>Salary</label>
                <input type="text" value={inputData.salary} name="salary" onChange={handleChange}></input>
            </div>
            <button className={PopupCss["apply-button"]} onClick={handleApply}>Apply</button>
            <button className={PopupCss["close-button"]} onClick={handleClose}>
            <img src={close} alt=""></img>
            </button>
        </div>
        
    </>
  )
}
