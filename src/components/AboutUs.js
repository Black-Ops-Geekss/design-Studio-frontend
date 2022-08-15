
import React, { useState } from 'react'
import '../Styling/AboutUs.css' 
import MemberData from './AboutUs.json'

var subTitle= "Full-Stack Developer"

export default function AboutUs() {
    const [isHovering, setIsHovering] = useState(false) 
    const handleMouseOver = () => {  
        setIsHovering(true); 
      };
      const handleMouseOut = () => {
        setIsHovering(false);
      };
  return (
    <div> 
      <h1 className='about-title'> Our Team </h1>
    {MemberData.map(member => {
      return (
        <div className='prof-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <div className='box'>
          <img className='img-box' src={member.image} alt="profile-img" />
          <h2 className='name' >{member.name}</h2> 
          <h3 className='des'>{subTitle}</h3>
          {isHovering && (
            <div className='hoverShow'>
            </div> )}
        </div>
      </div>
      )
    })}
    </div>
  )
}