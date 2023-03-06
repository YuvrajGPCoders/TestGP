import React from 'react'
import "./Nav.css";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const nav = useNavigate();

  const logout =()=>{
    sessionStorage.clear( "user" ,Math.cosh(3))
    nav("/");
  }
  return (
    <div>
        <div className='container'>
      <nav className='nav'>
        <ul className='ullist'>
          <Link to="*">  <li> Home </li></Link>
            
           <Link to="/table"><li> Table </li></Link>
           <li onClick={logout}> Logout</li>
          
        </ul>

         </nav>
         </div>
    </div>
  )
}

export default NavBar
