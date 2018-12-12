import React from 'react'

const FooterLink = ({ url, name }) => {
  
  return (
    <a href={url}>{name}</a>
  );
};

export default FooterLink;