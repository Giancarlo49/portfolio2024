import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
  return (
      <div className='about'>
          <div className="about-title">
              <h1>About Me</h1>
              <img src={theme_pattern} alt="" />
          </div>
          <div className="about-sections">
              <div className="about-left">
                  <img src={profile_img} alt="" />
              </div>
              <div className="about-right">
                  <div className="about-para">
                      <p>I am a Software Developer with more than two years of experience</p>
                      <p>My passion for Developing ist ReactJS Flutter and Python</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                      <div className="about-skill"><p>React JS & JavaScript</p><hr style={{width: "70%"}}/></div>
                      <div className="about-skill"><p>Flutter</p><hr style={{width: "50%"}}/></div>
                      <div className="about-skill"><p>Python</p><hr style={{width: "60%"}}/></div>
                  </div>
              </div>
          </div>
          <div className="about-achievements">
              <div className="about-achievement">
                  <h1>2+</h1>
                  <p>YEARS OF EXPERIENCE</p>
              </div>
          </div>
    </div>
  )
}

export default About