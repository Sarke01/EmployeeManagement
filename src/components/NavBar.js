import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <nav>
        <div className='container'>
            <Link to="/" className='link'>Employee System</Link>
            <Link to="/" className='link'> Home</Link>
            <Link to="/addEmployee" className='link'>Add employee</Link>
        </div>
    </nav>
  )
}
