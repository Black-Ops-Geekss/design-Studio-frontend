import { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import '../Styling/Header.css';


export default class Header extends Component {
  render () {
    return (
      <div>
        <div className="header" id="header">
          <div className='container'>
            <img src={logo} alt='log' className='logoimg' />
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
    );
  }
}

