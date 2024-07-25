import 'react'
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
                      <p>I'm a web developer and I have successfully completed two years of training. My training included HTML, CSS, JavaScript, React JS, Flutter, SwiftUI, and Python.</p>
                      
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}}/></div>
                      <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                      <div className="about-skill"><p>SwiftUI</p><hr style={{width: "45%"}}/></div>
                      <div className="about-skill"><p>Flutter</p><hr style={{width: "55%"}}/></div>
                      <div className="about-skill"><p>Python</p><hr style={{width: "55%"}}/></div>
                  </div>
              </div>
          </div>
          <div className="about-achievements">
              <div className="about-achievement">
                  <h1>2+</h1>
                  <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />
              <div className="about-achievement">
                  <h1>25+</h1>
                  <p>PROJECTS COMPLETED</p>
              </div>
             
          </div>
    </div>
  )
}

export default About