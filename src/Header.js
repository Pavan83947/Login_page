// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from './assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="PAVAN Logo" className="logo" />
      <h1 className="header-title">Lubricants reimagined</h1>
      <p className="header-subtitle">Since 190 years</p>
    </header>
  );
}

export default Header;
