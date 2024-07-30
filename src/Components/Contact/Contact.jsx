import 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
      <div className='contact'>
          <div className="contact-title">
              <h1>Get In Touch</h1>
              <img src={theme_pattern} alt="" />
          </div>
          <div className="contact-section">
              <div className="contact-left">
                  <h1>Let's Talk</h1>
                  <p>I'm currently avaible to take on new projects, so feel free to contact me</p>
                  <div className="contact-details">
                      <div className="contact-detail"></div>
                      <div className="contact-detail"></div>
                      <div className="contact-detail"></div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Contact