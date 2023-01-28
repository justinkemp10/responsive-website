import React from 'react';
import './header.css';
import world from '../../assets/world-logo2.png';

const Header = () => {
  return (
    <div className='jgk3__header section__padding' id='home'>
        <div className='jgk3__header-content'>
          <h1 className='gradient__text'>Hey There! Let's create something incredible together!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est.</p>
          <div className='jgk3__header-content__input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type='button'>Get Started</button>
          </div>
          {/* <div className='jgk3__header-content__people'>
            <img src={people} />
          </div> */}
          <div className='jgk3__header-image'>
            <img src={world} alt='world'/>
          </div>
        </div>
    </div>
  )
}

export default Header;