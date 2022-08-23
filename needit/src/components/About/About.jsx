import React from 'react'
// import { Link } from 'react-router-dom';
import info from "./info.json"
import "./about.css";



function About() {
  
      return (
        <div className='aboutDiv'>

      {info.map((teamMember) => (
        <div class="container" key={teamMember.id}>
          <div className='memberCard'>
            

          <img src={teamMember.img }alt={teamMember.name} />
          <div className='memberData'>
          <h3>Name: {teamMember.name}</h3>
          <p>Role: {teamMember.role}</p>
          <a href={teamMember.contact}>LinkedIn: {teamMember.contact}</a>
            </div>
          </div>
        </div>
      ))};
     {/* <i onClick={(e) => handleClick(e)}>About Us</i> */}
    </div>
  )
}

export default About;