import React, { useEffect, useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import ApiConfig from './ApiurlConfig';
import Style from './style/SignIn.module.css';
import SignUp from './SingUp';
import { UserContext } from './Context/UserContext'
const SignInComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isOld, setIsOld] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState();
  const [password, setUserPassword] = useState();
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const { userInformation, setUserInformation } = useContext(UserContext);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const apiUrl = ApiConfig();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const postData = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if(!email || email.trim() == ''){
      setErrorMessage('Email is required.');
      return;
    }
    if(!emailRegex.test(email)){
      setErrorMessage('Invalid email format.');
      return;
    }
    if(!password || password.trim() == ''){
      setErrorMessage('Password is required.');
      return;
    }
    try {
      const response = await fetch(apiUrl.apiurl_signin, {
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
        if (data.userId !== undefined) {
          setId(data.userId);
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('userName', data.userName);
          console.log(data.userId);
          setUserInformation({
            userId: data.userId,
            userName: data.userName,
            userEmail: data.userEmail
          });
          navigate('/VibeNest', { state: { userId: data.userId, userName: data.userName } });
        } else if (!data.success) {
          setErrorMessage(data.message);
        }
      }
    } catch (e) {
      console.error('Error:', e);
      setErrorMessage('An error occurred. Please try again.');
    };
  };
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setId(storedUserId);
      navigate('/VibeNest', { state: { userId: storedUserId } });
    }
  })
  return (
      <div className={Style.Login_Container}>
        <form onSubmit={postData} className={Style.Login_Box}>
          <legend>Sign In</legend>
          <input type="text" placeholder="Email" className={Style.Input_Field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={Style.Password_Container}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`${Style.Password_Input} ${Style.Input_Field}`}
              value={password}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className={Style.Password_toggle_icon}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {id && <p>Logged in as user ID: {id}</p>}
          <button type="submit" className={Style.Submit_btn}>
            Sign In
          </button>
          <div className={Style.Forgot_password}>
            <a href="/">Forgot my Password</a>
          </div>
          <Link to='/Sing-Up'>Create an account</Link>
        </form>
        <p>Sign up with</p>
        <div className={Style.Social_login}>
          <button className="social-btn google">G</button>
          <button className="social-btn facebook">F</button>
          <button className="social-btn apple">A</button>
        </div>
      </div>
  );
};
export default SignInComponent;