import 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
      <div className='hero'>
          <img src={profile_img} alt="" />
          <h1><span>I`m Carlo,</span> web developer based in Germany.</h1>
          <p>I am a web developer from Hamburg, Germany with 2 years of experience with React JavaScript, Python, Flutter</p>
          <div className="hero-action">
              <div className="hero-connection">Connect With Me</div>
              <div className="hero-resume">My Resume</div>
          </div>
          
    </div>
  )
}

export default Hero