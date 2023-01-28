import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/jk-logo.svg';


const Navbar = () => {
  return (
    <div className="jgk3_navbar">
      <div className='jgk3__navbar-links'>
        <div className='jgk3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;