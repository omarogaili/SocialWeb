import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import LoginForm from './Component/LoginForm'


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
