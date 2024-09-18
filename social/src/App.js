import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import LoginForm from './LoginForm/LoginForm';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="login-container">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
