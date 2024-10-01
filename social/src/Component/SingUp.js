import React, { useEffect, useState } from "react";
import ApiConfig from './ApiurlConfig';
import { useNavigate,Link } from "react-router-dom";
export default function SignupComponent() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const apiUrl = ApiConfig();
    if(!apiUrl){
        return(
            <p>Loading...</p>
        );
    }
    const handleSingup = async (e) => {
        e.preventDefault();
        const formData ={
            "userName": name,
            "userEmail": email,
            "userPassword": password
        }
        try {
            const response = await fetch(apiUrl.apiurl_signup, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                
            });
            console.log('user created successfully');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }else{
            const data = await response.json();
            setUserId(data.userId);
            localStorage.setItem('userId', data.userId);
            console.log(data);
            navigate('/VibeNest', {state:{userName : data.userName, userId : data.userId}});
        }
        } catch (e) {
            console.error('Error:', e);
        }
    };
    return (
        <div>
            <legend>Signup</legend>
            <form onSubmit={handleSingup}>
                <input type="text" placeholder="Username" value={name} onChange={(e)=>{setName(e.target.value)}}  required  />
                <input type="text" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}} required  />
                <input type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}








        // const [apiUrl, setApiUrl] = useState();
        // useEffect(() => {
        //     const fetchConfig = async () => {
        //         const response = await fetch('/config.json');
        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`);
        //         }
        //         const data = await response.json();
        //         setApiUrl(data.apiurl_signup);
        //     }
        //     fetchConfig();
        // });