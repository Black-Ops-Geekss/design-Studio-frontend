import React from 'react';
import { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class Header extends Component {

  render(){

    
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Design Studio</Navbar.Brand>
      <div style={{display: 'flex',fontSize: '20px', justifyContent: 'space-between', margin:'5px', color: 'white'}}>
  
      {!this.props.Admin&&(<>
          <NavItem><Link to="/" className="nav-link" style={{margin: '0px 15px'}} >Home</Link></NavItem>
          <NavItem><Link to="/OrderNow" className="nav-link"  style={{margin: '0px 15px'}}>Cart </Link></NavItem>
          <NavItem><Link to="/AboutUs" className="nav-link" style={{margin: '0px 15px'}}>AboutUs</Link></NavItem>
          </>
        )}
  
       {this.props.Admin&&(
          <>
          <NavItem><Link to="/" className="nav-link" style={{margin: '0px 15px'}} >View as Guest</Link></NavItem>
          <NavItem><Link to="/Admin/ManageDesigns" className="nav-link"  style={{margin: '0px 15px'}}>Manage Designs </Link></NavItem>
          <NavItem><Link to="/Admin/ManageEmployees" className="nav-link"  style={{margin: '0px 15px'}}>Manage Employees </Link></NavItem>
          <NavItem><Link to="/Admin/Profile" className="nav-link"  style={{margin: '0px 15px'}}>Hi, Admin </Link></NavItem>
          </>
        )}
      </div>
      
    </Navbar>
    )

  }
}
