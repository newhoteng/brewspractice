import React, { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const MobileHeader = () => {
  const [burgerClass, setBurgerClass] = useState('menubar unclicked');
  const [menuClass, setMenuClass] = useState('mobile-nav hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNavClick = () => {
    setMenuClass('mobile-nav hidden');
    setBurgerClass('menubar unclicked');
    setIsMenuClicked(!isMenuClicked);
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('menubar clicked');
      setMenuClass('mobile-nav visible');
    } else {
      setBurgerClass('menubar unclicked');
      setMenuClass('mobile-nav hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const location = useLocation();

  let headerStyle = {
    background: 'hsla(216, 26%, 21%, 0.25)',
    color: 'white',
  };

  let menuBarStyle = {
    background: 'lightblue',
  }

  if (location.pathname !== '/') {
    headerStyle = {
      background: 'white',
      color: 'hsla(216, 26%, 21%, 1)',
      boxShadow: '0 5px 5px #e5e5e5',
    }
    menuBarStyle = {
      background: 'hsla(216, 26%, 21%, 1)'
    }
  }

  return (
    <>
      <header style={headerStyle} className='mobile-header'>
        <div className='logo-div'>LOGO</div>
        <div className='menu-cont' onClick={updateMenu}>
          <div style={menuBarStyle} className={burgerClass}></div>
          <div style={menuBarStyle} className={burgerClass}></div>
          <div style={menuBarStyle} className={burgerClass}></div>
        </div>
        <nav className={menuClass}>
          <NavLink to="/" onClick={handleNavClick}>HOME</NavLink>
          <NavLink to="team" onClick={handleNavClick}>OUR TEAM</NavLink>
          <NavLink to="experience" onClick={handleNavClick}>OUR EXPERIENCE</NavLink>
          <button className='contact-btn' onClick={handleNavClick}>Contact Us</button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default MobileHeader