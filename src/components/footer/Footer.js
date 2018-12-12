import React from 'react';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer>
      {'\u00A9'} 2017 -- SPARTA PLASENT - 

      <FooterLink url="#" name="Instagram" />
      - 
      <FooterLink url="#" name="Facebook" />
      - 
      <FooterLink url="#" name="Twitter" />
      
    </footer>
  );
};

export default Footer;