import React, { useState, useEffect } from 'react';
import MobileHeader from './MobileHeader';
import DeskHeader from './DeskHeader';

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileHeader /> : <DeskHeader />;
};

export default Header;