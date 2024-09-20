import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import SignInComponent from './Component/SignIn'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="login-container">
        <SignInComponent />
      </div>
    </div>
  );
}
export default App;
