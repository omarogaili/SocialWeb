import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Make sure you have installed react-icons

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-box">
      <form>
        <legend>Sign In</legend>
        <input type="text" placeholder="Username" className="input-field" />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input-field password-input"
          />
          <span
            onClick={togglePasswordVisibility}
            className="password-toggle-icon"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

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
