
import React, { useState } from 'react'
import './AboutUs.css' // imports styles of the cards 
// import {SocialMediaIconsReact} from 'social-media-icons-react'; // npm i social-media-icons-react to install the kit (I got the icons from this kit)
import MemberData from './AboutUs.json'

var subTitle= "Full-Stack Developer"


export default function AboutUs() {
    const [isHovering, setIsHovering] = useState(false) // setting the hover states
    const handleMouseOver = () => {  // this function is activated when the mouse is over the card.
        setIsHovering(true); // sets the state to be true to show more card content.
      };
      const handleMouseOut = () => { // this function is activated when the mouse is NOT over the card.
        setIsHovering(false);
      };
  return (
    <div> 
      <h1 className='about-title'> Our Team </h1>
    {MemberData.map(member => {
      return (
        <div className='prof-container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> {/* if you hover over this div, it expands the card. */ }
        <div className='box'>
          {console.log(member.image)}
          <img className='img-box' src={Hamazah} alt="profile-img" />
          <h2 className='name' >{member.name}</h2> 
          <h3 className='des'>{subTitle}</h3>
          
          {isHovering && (
            <div className='hoverShow'>
           {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,28,30,1)" iconSize="5" roundness="20%" url={member.github} size="30" />
           <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,28,30,1)" iconSize="5" roundness="20%" url={member.linkedin} size="30" />
           <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,28,30,1)" iconSize="5" roundness="20%" url={member.mail} size="30" /> */}
            {/* to modifiy the icon shape, color, etc.., use this website: https://social-media-icons-react-editor.netlify.app/ these icons cause errors, use another kit */} 
             
            </div> )}
  
        </div>
  
  
      </div>
      )
    })}

   
    </div>
  )
}


 