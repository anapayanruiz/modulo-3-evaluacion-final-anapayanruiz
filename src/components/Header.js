import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';


const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" className="img-fluid" src={logo} alt={props.alt} />
    </header >
  );
}

export default Header;
