import React from "react";
// import { Link } from 'react-router-dom';
import info from "./info.json";
import "./about.css";

function About() {
  return (
    <div className="aboutDiv container-fluid ">
      {info.map((teamMember) => (
        <div className="container " key={teamMember.name}>
          <div className="memberCard card-body flex-md-row">
            <img className="mx-auto d-block" src={teamMember.img} alt={teamMember.name} />
            <div className="memberData details flex-start flex-shrink-1">
              <h3 className="card-text">Name: {teamMember.name}</h3>
              <span>Role: {teamMember.role}</span>
              <a className=" d-flex flex-shrink-1" target="_blank" rel="noreferrer" href={teamMember.contact}>
                LinkedIn: {teamMember.contact}
              </a>
            </div>
          </div>
        </div>
      ))}
      ;{/* <i onClick={(e) => handleClick(e)}>About Us</i> */}
    </div>
  );
}

export default About;
