import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'
// import { Navbar, NavItem } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styling/Header.css'
export default class Header extends Component {

  render () {


    return (
      <div>
      <div className="header" id="header">
        <div className='container'>
        <img src={logo} alt='log' className='logoimg'/>

              {!this.props.Admin &&        
              <ul className="main-nav">
            <Link to='/'><li><a href="#url">Home</a></li></Link> 
            <Link to="/OrderNow"><li><a href="#url">Cart</a></li></Link>
            <Link to="/CreateDesign"><li><a href="#url">Create Your Own Design</a></li></Link>
            <Link to="/AboutUs"><li><a href="#url">AboutUs</a></li></Link>
                   </ul>
                   }  
            {this.props.Admin &&

          <ul className="main-nav">

            <Link to='/'><li><a href="#url">View as Guest</a></li></Link> 
            <Link to="/OrderNow"><li><a href="#url">Manage Designs </a></li></Link>
            <Link to="/CreateDesign"><li><a href="#url">Manage Orders</a></li></Link>
            <li><a href="#url">Hi, Admin</a></li>
            <Link to="/Admin/Profile"><li><a href="#url">Profile</a></li></Link>
            <Link to="/"><li><a href="#url">   Sign Out</a></li></Link>
                   </ul>
                   }
         </div>
         </div>
      </div>
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //   <Navbar.Brand>Design Studio</Navbar.Brand>
      //   <div style={{ display: 'flex', fontSize: '20px', justifyContent: 'space-between', margin: '5px', color: 'white' }}>

      //     {!this.props.Admin && ( <>
      //       <NavItem><Link to="/" className="nav-link" style={{ margin: '0px 15px' }} >Home</Link></NavItem>
      //       <NavItem><Link to="/OrderNow" className="nav-link" style={{ margin: '0px 15px' }}>Cart </Link></NavItem>
      //       <NavItem><Link to="/CreateDesign" className="nav-link" style={{ margin: '0px 15px' }}>Create Your Own Design</Link></NavItem>
      //       <NavItem><Link to="/AboutUs" className="nav-link" style={{ margin: '0px 15px' }}>AboutUs</Link></NavItem>
      //     </>
      //     )}

      //     {this.props.Admin && (
      //       <>
            
      //         <NavItem><Link to="/" className="nav-link" style={{ margin: '0px 15px' }} >View as Guest</Link></NavItem>
      //         <NavItem><Link to="/Admin/ManageDesigns" className="nav-link" style={{ margin: '0px 15px' }}>Manage Designs </Link></NavItem>
      //         <NavItem><Link to="/Admin/ManageOrders" className="nav-link" style={{ margin: '0px 15px' }}>Manage Orders </Link></NavItem>

      //         <NavDropdown title="Hi, Admin" id="basic-nav-dropdown">
      //         <NavDropdown.Item><Link to="/Admin/Profile" className="nav-link" style={{ margin: '0px 15px' }}>Profile</Link></NavDropdown.Item>
      //         <NavDropdown.Divider />
      //         <NavDropdown.Item href="/">
      //           Sign Out
      //         </NavDropdown.Item>
      //       </NavDropdown>
      //       </>
      //     )}
      //   </div>


      // </Navbar>
      
    );

  }
}
