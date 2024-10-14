import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import { LandingPage } from './pages/LandingPage';
import EmailVerification from './pages/EmailVerification';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { About } from './pages/About';
import { Properties } from './pages/Properties';
import { Services } from './pages/Services';


function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path='/email-verification' element={<EmailVerification/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/reset-password' element={<ResetPassword/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
