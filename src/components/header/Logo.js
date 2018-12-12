import React from 'react'
import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <a href="#" tabIndex="1">
      <img className='header__left' src={logo} alt='' />
    </a>
  );
};

export default Logo;