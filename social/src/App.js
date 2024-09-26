import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import SignInComponent from './Component/SignIn'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="login-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Sing-In" element={<SignInComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
