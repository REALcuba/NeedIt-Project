import React from 'react'



function About() {
    const handleClick = (e) => {
        alert("this is a project to help those who need a freandly hand")
        console.log("about", e);
    }
  return (
    <div className='aboutDiv footerDiv'>

        <i onClick={(e) => handleClick(e)}>About Us</i>
    </div>
  )
}

export default About