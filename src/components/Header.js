import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header cl>
        <div className='logo-div'>LOGO GOES HERE</div>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="team">OUR TEAM</NavLink>
          <NavLink to="experience">OUR EXPERIENCE</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Header