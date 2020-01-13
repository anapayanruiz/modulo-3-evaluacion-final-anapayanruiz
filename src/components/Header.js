import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';


const Header = (props) => {
  return (
    <header className="title" >
      <img src={logo} alt={props.alt} class="img-fluid" alt="Responsive image" />
    </header >
  );
}

export default Header;
