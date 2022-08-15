
import React, { useState } from 'react'
import '../Styling/AboutUs.css' // imports styles of the cards 
// import {SocialMediaIconsReact} from 'social-media-icons-react'; // npm i social-media-icons-react to install the kit (I got the icons from this kit)
import MemberData from './AboutUs.json'

var subTitle = "Full-Stack Developer"


export default function AboutUs() {
  const [isHovering, setIsHovering] = useState(false) // setting the hover states
  const handleMouseOver = () => {  // this function is activated when the mouse is over the card.
    setIsHovering(true); // sets the state to be true to show more card content.
  };
  const handleMouseOut = () => { // this function is activated when the mouse is NOT over the card.
    setIsHovering(false);
  };
  return (

    <div >
      <h1 className='about-title'> Our Team </h1>


      <div className="main-container">

        <div className="card-container">
          <span className="pro">About Us</span>
          <img className="round" src="https://i.ytimg.com/vi/rCRg16vYABk/maxresdefault.jpg" alt="user" width={127} height={128} />
          <h3>Design Studio</h3>
          <h6>Location: Amman, Jordan</h6>
          <p>Design Studio is a creative print-on-demand marketplace where you can discover & buy unique products, gifts & artwork created by artists around the world. <br /> <br /> Since our founding in 2022 and we aim to increase productivity and expand our customer list. We provide customers with latest technologies. </p>
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



      {MemberData.map(member => {
        return (
          <div className='prof-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> {/* if you hover over this div, it expands the card. */}
            <div className='box'>
              {console.log(member.image)}
              <img className='img-box' src={member.image} alt="profile-img" />
              <h2 className='name' >{member.name}</h2>
              <h3 className='des'>{subTitle}</h3>

              {isHovering && (
                <div className='hoverShow'>




                </div>)}

            </div>


          </div>
        )
      })}


    </div>
  )
}


