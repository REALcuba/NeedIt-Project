import React from 'react'
import info from "./info.json"



function About() {
    const handleClick = (e) => {
        // alert("this is a project to help those who need a freandly hand")
        // console.log("about", e);
        info.map((teamMember) => (
          <div class="team-member">
            <h2>{teamMember.name}</h2>
            <img src={teamMember.img} />
            <p>{teamMember.project}</p>
            <p>{teamMember.contact}</p>
          </div>
        ));
    }
  return (
    <div className='aboutDiv'>

        <i onClick={(e) => handleClick(e)}>About Us</i>
    </div>
  )
}

export default About