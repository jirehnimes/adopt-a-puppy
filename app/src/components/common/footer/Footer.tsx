import React, { ReactNode } from 'react';

type FooterPropsType = {
  children: ReactNode;
};

const Footer = ({ children }: FooterPropsType) => {
  return (
    <footer className='footer'>
      <div className='container'>{children}</div>
    </footer>
  );
};

export default Footer;
