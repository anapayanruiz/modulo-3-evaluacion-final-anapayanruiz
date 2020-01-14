import React from 'react';
import logo from '../images/logo.png';



const Header = (props) => {
  return (
    <header>
      <img className="header__logo" className="img-fluid" src={logo} alt={props.alt} />
    </header >
  );
}

export default Header;
