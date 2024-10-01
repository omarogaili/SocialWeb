import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import SignInComponent from './Component/SignIn'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Account from "./Component/account";
import SignUp from './Component/SingUp';
import Profile from "./Pages/Profile";
import { UserProvider } from './Component/Context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="login-container">
            <Routes>
              <Route path="/VibeNest" element={<Account />} />
              <Route path="/" element={<SignInComponent />} />
              <Route path="/Sing-Up" element={<SignUp />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
