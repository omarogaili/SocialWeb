import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/Soical Logo.png';
import Navbar from './UserNav'
import style from './style/Header.module.css';
import HamburgerMenu from './HamburgerMenu';



const Header = () => {
  const location = useLocation();
  return (
    <div className={style.Main}>
    <header className={style.App_Header}>
      <img src={logo} alt="Social Logo" className={style.App_Logo} />
    </header>
    {location.pathname === '/VibeNest' && <Navbar/>}
    {location.pathname === '/Profile'  && <HamburgerMenu/>}
    </div>
  );
};

export default Header;
