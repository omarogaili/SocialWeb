import React from "react";
import Comment from '../Component/comment'
import Account from '../Component/username';
import Navbar from "../Component/UserNav";
export default function Profile(){
    return (
        <div>
            <Account />
            <Comment />
        </div>
    );
}