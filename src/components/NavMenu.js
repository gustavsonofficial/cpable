import React from 'react';

const NavMenu = ({ menuOpen }) => (
  <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#solutions">Solutions</a>
    <a href="#pricing">Pricing</a>
    <a href="#contact">Contact</a>
  </nav>
);

export default NavMenu;
