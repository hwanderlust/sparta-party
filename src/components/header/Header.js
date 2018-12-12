import React from 'react';
import Logo from './Logo';
import Hamburger from './Hamburger';
import LoginBtn from './LoginBtn';

const Header = () => {
  return (
    <header className="header">
      <div className='header-wrapper'>
        <Logo />

        <div className="header__right">
          <span className="header__right-item">212.555.5555</span>

          <LoginBtn />
          <Hamburger />
        </div>

      </div>
    </header>
  );
};

export default Header;