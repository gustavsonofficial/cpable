import React from 'react';

const BurgerMenu = ({ toggleMenu }) => (
  <div className="burger-menu" onClick={toggleMenu}>
    <div className="burger-bar"></div>
    <div className="burger-bar"></div>
    <div className="burger-bar"></div>
  </div>
);

export default BurgerMenu;
