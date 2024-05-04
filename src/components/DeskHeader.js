import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const DeskHeader = () => {
  const location = useLocation();

  let headerStyle = {
    background: 'hsla(216, 26%, 21%, 0.25)',
    color: 'white',
  };

  if (location.pathname !== '/') {
    headerStyle = {
      background: 'white',
      color: 'hsla(216, 26%, 21%, 1)',
      boxShadow: '0 5px 5px #e5e5e5',
    }
  }

  return (
    <>
      <header style={headerStyle} className='desk-header'>
        <div className='logo-div'>LOGO</div>
        <nav className='desk-nav'>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="team">OUR TEAM</NavLink>
          <NavLink to="experience">OUR EXPERIENCE</NavLink>
          <button className='contact-btn'>Contact Us</button>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default DeskHeader