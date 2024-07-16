import 'react'
import './Navbar.css'
// import logo from '../../assets/template.svg'

const Navbar = () => {
  return (
      <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <h2 className='meinName'>Carlo</h2> {/* ersetz das img_logo */}
          <ul className="nav-menu">
              <li>Home</li>
              <li>About Me</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
          </ul>
          <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar