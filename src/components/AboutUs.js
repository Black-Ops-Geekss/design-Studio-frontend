import React from 'react';
import '../Styling/AboutUs.css';
import MemberData from './AboutUs.json';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import About from './homePage/About';



class AboutUs extends React.Component {
  render () {
    return (
      <>
        <About />
        <div className="about" id="about">
          <h2 className="main-title">Our Team</h2>
          <div className="container">
            {MemberData.map( ( card ) => {
              return (
                <div className="box">
                  <img src={card.image} alt="img" />
                  <div className='contentfull'>
                    <div className="content">
                      <h3>{card.name}</h3>
                      <p>{card.descrption}</p>
                    </div>
                    <div className="info">
                      <a href={card.email} className='google'>
                        <FaGoogle />
                      </a>
                      <a href={card.github} className='github'>
                        <FaGithub />
                      </a>
                      <a href={card.linkedin} className='linkend'>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              );
            } )}
          </div>
        </div>
      </>
    );
  }
}
export default AboutUs;