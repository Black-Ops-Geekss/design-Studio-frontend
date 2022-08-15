import React from 'react';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../Styling/createDesign.css';

export default function Footer () {
    return (
        <div className='main-ModalFooter'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Contact Us</h4>
                        <ul className='list-unstyled'>
                            <li>Amman-Jordan</li>
                            <li>Main st</li>
                            <li>Phone: 07 9046 6429</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> About Us</h4>
                        <ul className='list-unstyled'>
                            <li>Story</li>
                            <li>Clients</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h4> Social Media</h4>
                        <ul className='list-unstyled'>
                            <a href="https://github.com/Black-Ops-Geekss" className='icon'><FaGithub size='1.5em' color='black' /></a>
                            <a href="##" className='icon'><FaFacebook size='1.5em' /></a>
                            <a href="##" className='icon'><FaTwitter size='1.5em' /></a>
                        </ul>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <div className="gmap_canvas">
                            <iframe width="250" height="150" id="gmap_canvas" src='https://maps.google.com/maps?q=LTUC&t=&z=9&ie=UTF8&iwloc=&output=embed' title='LUTC' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>
                        </div>
                    </div>
                    <div className='text-center p-4'  >
                        © 2022 Copyright:
                        <a className='text-reset' href='https://github.com/Black-Ops-Geekss'>
                            Black Ops Geekss
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}