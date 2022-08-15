import React from 'react';
import { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Header extends Component {

  render () {


    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Design Studio</Navbar.Brand>
        <div style={{ display: 'flex', fontSize: '20px', justifyContent: 'space-between', margin: '5px', color: 'white' }}>

          {!this.props.Admin && ( <>
            <NavItem><Link to="/" className="nav-link" style={{ margin: '0px 15px' }} >Home</Link></NavItem>
            <NavItem><Link to="/OrderNow" className="nav-link" style={{ margin: '0px 15px' }}>Cart </Link></NavItem>
            <NavItem><Link to="/CreateDesign" className="nav-link" style={{ margin: '0px 15px' }}>Create Your Own Design</Link></NavItem>
            <NavItem><Link to="/AboutUs" className="nav-link" style={{ margin: '0px 15px' }}>AboutUs</Link></NavItem>
          </>
          )}

          {this.props.Admin && (
            <>
              <NavItem><Link to="/" className="nav-link" style={{ margin: '0px 15px' }} >View as Guest</Link></NavItem>
              <NavItem><Link to="/Admin/ManageDesigns" className="nav-link" style={{ margin: '0px 15px' }}>Manage Designs </Link></NavItem>
              <NavItem><Link to="/Admin/ManageOrders" className="nav-link" style={{ margin: '0px 15px' }}>Manage Orders </Link></NavItem>

              <NavDropdown title="Hi, Admin" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/Admin/Profile" className="nav-link" style={{ margin: '0px 15px' }}>Profile</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
            </>
          )}
        </div>

      </Navbar>
    );

  }
}
