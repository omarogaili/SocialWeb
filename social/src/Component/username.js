import React,{useEffect, useState} from 'react';
import Style from './style/Userinfo.module.css';
import ProfileImage from '../assets/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg';

//! this component will be used to get the user information to render when ever we want.
export default function GetUserName(){
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);
    return(
        <div className={Style.Main_Container}>
            <img src= {ProfileImage}></img>
            <h2>{userName}</h2>
        </div>
    )
}
