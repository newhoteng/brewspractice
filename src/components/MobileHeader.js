import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const MobileHeader = () => {
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
        <div className='menu-cont'>
          <div style={menuBarStyle} className='menubar'></div>
          <div style={menuBarStyle} className='menubar'></div>
          <div style={menuBarStyle} className='menubar menubar3'></div>
        </div>
        <nav className='mobile-nav'>
          <NavLink className='navlink' to="/">HOME</NavLink>
          <NavLink to="team">OUR TEAM</NavLink>
          <NavLink to="experience">OUR EXPERIENCE</NavLink>
          <button className='contact-btn'>Contact Us</button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default MobileHeader