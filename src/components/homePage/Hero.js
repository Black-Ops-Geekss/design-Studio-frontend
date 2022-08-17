import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/Header.css';




export default class Header extends Component {
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
              <h1>Welcome</h1>
              <p> Welcome to our studio. We are a passionated group of people,<br />
                making high quality products designed to make your life easier.</p>
              <Link to='/AboutUs'> <button>Know more</button></Link>
            </section>
          </header>
        </div>
      </>
    );
  }
}
