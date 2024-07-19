import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Components/Home'/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import DashboardPage from './Components/Dashboard/DashboardPage';
import { useAuthContext } from './context/AuthContext';

function App() {

  let {authUser} = useAuthContext();
  
  return (
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={authUser ? <Navigate to='/dashboard' /> : <Login  />} />
        <Route path="/signup" element={authUser ? <Navigate to='/dashboard' /> : <SignUp />} />
        <Route path="/dashboard" element={authUser ? <DashboardPage /> : <Navigate to='/login'/>} />
      </Routes>

      
  );
}

export default App;
