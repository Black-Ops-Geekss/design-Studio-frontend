import { Component } from 'react';
// import { Navbar, li } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from './logo.png';
import '../Styling/Nav.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
export default class Header extends Component {
  render () {
    return (
      <>
    <Container>
        <div className='header-new'>
          <div className='logo-header'>
          <img src={logo} alt="logo" style={{width:'80px'}}/>
          <h4>Design Studio</h4>
          </div>
        <ul>
        {!this.props.Admin&&(
          <>
           <li><Link to='/'>Home</Link></li>
            <li><Link to="/OrderNow">Cart</Link></li>
            <li><Link to='/CreateDesign'>Create Your Design</Link></li>
            <li><Link to="/AboutUs">AboutUs</Link></li>
            </>
          )}
          {this.props.Admin && (
            <>
              <li><Link to="/" >View as Guest</Link></li>
              <li><Link to="/Admin" >Manage Designs </Link></li>
              <li><Link to="/Admin/ManageOrders" >Manage Orders </Link></li>
                <li><Link to="/Admin/Profile">Profile</Link></li>
                <li onClick={()=>this.props.onClick(false)}><Link to='/'>Sign Out</Link></li>
              
            </>
          )}
        
         
         </ul>
       </div >
       </Container>
  </>
    );
  }
}
