import React, { useState } from 'react';
import styles from './style/HamburgerMenu.module.css';
import { useNavigate, Link } from "react-router-dom";
import Signout from './SingOut';
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={styles.hamburgerMenu}>
            <button className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <div className={`${styles.line} ${isOpen ? styles.lineOpen1 : ''}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.lineOpen2 : ''}`}></div>
                <div className={`${styles.line} ${isOpen ? styles.lineOpen3 : ''}`}></div>
            </button>
            {isOpen && (
                <nav className={styles.menu}>
                    <ul>
                        <li><Link to="/VibeNest">Home </Link></li>
                        <li><Signout/> </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;
