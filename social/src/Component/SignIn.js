import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SignInComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isOld, setIsOld] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState();
  const [password, setUserPassword] = useState();
  const [id, setId] = useState();
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [apiUrl, setApiUrl] = useState('');
  useEffect(() => {
    const fetchConfig = async () => {
      const response = await fetch('/config.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiUrl(data.apiurl_signin);
    }
    fetchConfig();
  });
  const postData = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: email,
          userPassword: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        if(data.userId !== undefined) {
        setId(data.userId);
        localStorage.setItem('userId', data.userId);
        console.log(data.userId);
        navigate('/dashboard', {state:{userId: data.userId, userName: data.userName }});
        }else if(!data.success){
          setErrorMessage(data.message);
        }
      }
    } catch (e) {
      console.error('Error:', e);
      setErrorMessage('An error occurred. Please try again.');
    };
  };
  useEffect(()=>{
    const storedUserId= localStorage.getItem('userId');
    if(storedUserId){
      setId(storedUserId);
      navigate('/dashboard', {state:{userId: storedUserId}});
    }
  })
  return (
    <div className="login-box">
      <form onSubmit={postData}>
        <legend>Sign In</legend>
        <input type="text" placeholder="Email" className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field password-input"
            value={password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <span
            onClick={togglePasswordVisibility}
            className="password-toggle-icon"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {id && <p>Logged in as user ID: {id}</p>}
        <button type="submit" className="submit-btn">
          Sign In
        </button>
        <div className="forgot-password">
          <a href="/">Forgot my Password</a>
        </div>
      </form>
      <p>Sign up with</p>
      <div className="social-login">
        <button className="social-btn google">G</button>
        <button className="social-btn facebook">F</button>
        <button className="social-btn apple">A</button>
      </div>
    </div>
  );
};
export default SignInComponent;