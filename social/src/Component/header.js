import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/Soical Logo.png';
import Navbar from './UserNav'


const Header = () => {
  const location = useLocation();
  return (
    <>
    <header className="App-header">
      <img src={logo} alt="Social Logo" className="App-logo" />
    </header>
    {location.pathname === '/VibeNest' && <Navbar/>}
    </>
  );
};

export default Header;
