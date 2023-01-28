import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/jk-logo.svg';

// const Menu = () => (
//   <>
//   <p><a href='#home'>Home</a></p>
//   <p><a href='#wjgk3'>What is JGK3?</a></p>
//   <p><a href='#possibility'>Open AI</a></p>
//   <p><a href='#features'>Case Studies</a></p>
//   <p><a href='#blog'>Library</a></p>
//   </>
// )

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jgk3_navbar">
      <div className='jgk3__navbar-links'>
        <div className='jgk3__navbar-links_logo'>
          <img src={logo} />
        </div>
        <div className='jgk3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wjgk3'>What is JGK3?</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='jgk3__navbar-sign'>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='jgk3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className='jgk3__navbar-menu_container scale-up-center'>
          <div className='jgk3__navbar-menu_container-links'>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wjgk3'>What is JGK3?</a></p>
            <p><a href='#possibility'>Open AI</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Library</a></p>
          </div>
          <div className='jgk3__navbar-menu_container-links-sign'>
            <p>Sign In</p>
            <button type="button">Sign Up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;