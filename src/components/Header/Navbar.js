import React from 'react'
import { Link} from "react-router-dom";



function Navbar() {
  return (
    <nav>
      <ul className="main-menu">
        <li> <Link className="link" to="/">Home</Link></li>
        <li> <Link className="link" to="/work-flow">Work Flow</Link></li>
        <li> <Link className="link" to="/about">About me</Link></li>
        <li> <Link className="link" to="/contact">Contact</Link></li>
      </ul>
    </nav>
    
  )
}

export default Navbar
