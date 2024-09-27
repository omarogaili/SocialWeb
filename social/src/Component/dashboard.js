import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './style/Dashboard.module.css'
import Signout from './SingOut';
import Navbar from './UserNav';
export default function Dashboard() {
    const location = useLocation();
    const userId = location.state?.userId;
    const userName = location.state?.userName;
    return (
        <div className={style.dashboard}>
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            {userId && <p>User ID : {userId}</p>}
            {userName && <p>UserName: {userName}</p>}
            <Signout />
        </div>
    );
}
