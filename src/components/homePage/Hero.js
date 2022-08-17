import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/Header.css';




export default class Header extends Component {
  scrollTop = () => {
    window.scrollTo( { top: 1080, behavior: 'smooth' } );
  };
  render () {
    return (
      <>
        <div className="container-fluid">
          <div className="background">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <header>
            <section className="header-content">
            <img src={require('../logo.png')} alt="logo" />
              <h1>Welcome</h1>
              <h3> Create personalized clothes to match your style</h3>
              <h4>Making high quality products designed to make your life easier.</h4>
              <Link to='/CreateDesign'> <button>Know more</button></Link>
              <Link to='/AboutUs'> <button>Meet Us</button></Link>
            </section>
            <svg className="arrows" onClick={this.scrollTop}>
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </header>
        </div>
      </>
    );
  }
}
