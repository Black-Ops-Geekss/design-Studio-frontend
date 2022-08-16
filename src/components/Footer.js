import React from 'react';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from './logo.png';
import '../Styling/Footer.css';
import { Container } from 'react-bootstrap';



class Footer extends React.Component {
  render () {
    return ( <>
      <div className="footer">
        <Container>
          <div className="footerB">
            <h3><img src={logo} style={{ width: "175px" }} alt='Logo' /></h3>
            <ul className="social">
              <li>
                <a href="#url" className="facebook">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#url" className="twitter">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#url" className="youtube">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerB">
            <ul className="links">
              <li><a href="#url">Contact Us</a></li>
              <li><a href="#url">Amman-Jordan</a></li>
              <li><a href="#url">Main st</a></li>
              <li><a href="#url">Phone: 999 999 9999</a></li>
            </ul>
          </div>
          <div className="footerB">
            <div className="line">
              <div className="info">Amman , airport Street</div>
            </div>
            <div className="line">
              <div className="info">working Hours: From 8:00 AM to 5:00 PM</div>
            </div>
            <div className="line">
              <div className="info">
                <span>+0798888437</span>
                <span>+0792811425</span>
              </div>
            </div>
          </div>
          <iframe width="250" height="150" id="gmap_canvas" src='https://maps.google.com/maps?q=LTUC&t=&z=9&ie=UTF8&iwloc=&output=embed' title='LUTC' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
          </iframe>
        </Container>
        <p className="copyright">© 2022 Copyright : Black Ops Geekss</p>
      </div>
    </>
    );
  }
}

export default Footer;