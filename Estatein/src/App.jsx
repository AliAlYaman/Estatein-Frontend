import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import { LandingPage } from './pages/LandingPage';
import EmailVerification from './pages/EmailVerification';


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path='/email-verification' element={<EmailVerification/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
