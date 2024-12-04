// src/App.js
import React from 'react';
import Header from './Header';
import LoginCard from './LoginCard';
import Footer from './Footer';
import ImageSection from './ImageSection';
import './App.css';

function Login() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LoginCard />
         <div>
          <ImageSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
