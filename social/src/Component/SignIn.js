import React from 'react';

const SignInComponent = () => {
  return (
    <div className="login-box">
      
      <form>
      <legend>Sing In</legend>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button type="submit" className="submit-btn">Sign In</button>
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
