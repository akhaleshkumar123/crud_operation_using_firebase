import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='header'>
      <nav className="navbar bg-body-tertiary" style={{padding:"15px 50px 15px"}}>
  <div className="container-fluid">
    <a className="navbar-brand"  style={{fontSize:"22px", fontFamily:"800"}}>
    <Link to="/readdata" style={{textDecoration:"none"}}>All person data  </Link> 
      
       </a>
    <form className="d-flex"   role="search" style={{gap:'20px'}}>

      <button className="btn btn-outline-success" type="submit"  >
        <Link to="/ragistation"  style={{textDecoration:"none"}}> SignIn </Link>
      </button>
      <button className="btn btn-outline-success" type="submit">
      <Link to="/login" style={{textDecoration:"none"}}>Login</Link>
      </button>
      <button className="btn btn-outline-success" type="submit">
      <Link to="/logout" style={{textDecoration:"none"}}>  LogOut</Link>  
      </button>
      <button className="btn btn-outline-success" type="submit">
      <Link to="/Create" style={{textDecoration:"none"}}> New Person</Link>  
      </button>
    </form>
  </div>
</nav>

      </div>
    </>
  );
}

export default Navbar;
