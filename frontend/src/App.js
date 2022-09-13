import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import MainPage from './pages/main/Mainpage'
import LoginPage from './pages/login/LoginPage';

function App() {

  let header = (
    <div>
    <Link to="/login">
      <button>로그인</button>
    </Link>
    </div>
  );


  return (
    <div className="App">
      <BrowserRouter>
          <Routes> 
            <Route path="/" element={header}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/main/*" element={<MainPage />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
