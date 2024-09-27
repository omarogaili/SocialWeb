import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import SignInComponent from './Component/SignIn'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/dashboard";
import SignUp from './Component/SingUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="login-container">
          <Routes>
            <Route path="/VibeNest" element={<Dashboard />} />
            <Route path="/" element={<SignInComponent />} />
          <Route path="/Sing-Up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
