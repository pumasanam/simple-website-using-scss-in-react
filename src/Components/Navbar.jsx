import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./CSS/Navbar.scss";
// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <>

    <div className="container-fluid navBG">
      <div className='row'>
        <div className="col-10 mx-auto">
          <Navbar  expand="lg">
              <NavLink to="/" style={{fontSize:'1.9rem', color:'#565387'}}>Sanam Rai</NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navUL">
                  <NavLink activeClassName="menu_active" exact className='navLink' style={{fontSize:'1.3rem'}} to="/">Home</NavLink>
                  <NavLink activeClassName="menu_active" exact className='navLink' style={{fontSize:'1.3rem'}} to="/service">Service</NavLink>
                  <NavLink activeClassName="menu_active" exact className='navLink' style={{fontSize:'1.3rem'}} to="/about">About</NavLink>
                  <NavLink activeClassName="menu_active" exact className='navLink' style={{fontSize:'1.3rem'}} to="/contact">Contact</NavLink> 
                </Nav>
              </Navbar.Collapse>
        </Navbar>
        </div>
      </div>
    </div>
        
    </>
  );
};

export default MainNav;




