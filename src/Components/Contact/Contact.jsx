import "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaible to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>luxelevare@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+49 151 10 6595 90</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Hamburg, Deutschland</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text placeholder='Enter Your Name" name="name" />
          <label htmlFor="Your Email"></label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
