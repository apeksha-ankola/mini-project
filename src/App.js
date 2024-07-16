import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home'/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import DashboardPage from './Components/Dashboard/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
      </Routes>
    </Router>
  );
}

export default App;
