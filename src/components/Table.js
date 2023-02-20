import React, { useEffect, useState } from 'react'
import "../styles/table.css"
import Popup from './Popup'

export default function Table() {

    const [employee,setEmployee]=useState([])
    const [showPopup,setShowPopup]=useState(false)
    let tableTd=[]
    let tableRow={
      id:"",
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      salary:""
    }
    const [tableData,setTableData]=useState(tableRow)
    
    

    const handleEdit=(e)=>{
      tableTd=e.target.closest("tr").querySelectorAll("td")
      for(let i=0;i<tableTd.length;i++){
        tableRow={
          ...tableRow,
          id:tableTd[0].textContent,
          firstName:tableTd[1].textContent,
          lastName:tableTd[2].textContent,
          email:tableTd[3].textContent,
          address:tableTd[4].textContent,
          salary:tableTd[5].textContent
        }
      }
      setTableData(tableRow)
      
     setShowPopup(true)  
    }

    const  fetchData=async ()=>{
        const response=await fetch("http://localhost:8080/employee")
        const data=await response.json()
        setEmployee(data);
    }

   useEffect(()=>{
     fetchData();
   },[])
   
   const handleDelete= async (e)=>{
      const id=e.target.closest("tr").cells[0].textContent
       await fetch("http://localhost:8080/employee/"+id,{
        method:"DELETE"
      })
       await fetchData();
   }

   const handleClose=()=>{
    setShowPopup(false)
   }

  return (
   <div>
   <h1>Employees</h1>
     <table>
       <thead></thead>
       <tbody>
       <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
        {employee.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>{val.salary}</td>
              <td>
                <div className='buttons'>
                    <button onClick={(e)=>handleEdit(e)}>Edit</button>
                    <button onClick={(e)=>handleDelete(e)} className="delete-button">Delete</button>
                </div>
              </td>
            </tr>
          )
        })}
       </tbody>
      </table>
      {showPopup && <Popup handleClose={handleClose} data={tableData} fetchHandler={fetchData}/>}
   </div>
  )
}
