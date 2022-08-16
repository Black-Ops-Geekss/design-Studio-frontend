import React, { Component } from 'react'
import logo from '../logo.jpg'
import '../../Styling/About.css'
 class About extends Component {
  render() {
    return (
      <div className='main'>
<div className="main-container">

<div className="card-container">
    <img className="round" src={logo} alt="user" width={127} height={128}/>
    <div className="card-content-text">
    <h3>Design Studio</h3>
    <h6>Location: Amman, Jordan</h6>
    <p>Design Studio is a creative print-on-demand marketplace where you can discover & buy unique products, gifts & artwork created by artists around the world. <br/> <br/> Since our founding in 2022 and we aim to increase productivity and expand our customer list. We provide customers with latest technologies. </p>
    </div>
    <div className="buttons">


    </div>
    <div className="skills">
        <h6>Technologies used in this project:</h6>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
      <li>ExpressJS</li>
      <li>MongoDB</li>

        </ul>
    </div>
</div>






    </div>
        
      </div>
    )
  }
}

export default About