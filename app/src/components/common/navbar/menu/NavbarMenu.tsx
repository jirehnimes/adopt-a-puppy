import React, { FC, ReactNode } from 'react';

type NavbarMenuPropsType = {
  children: ReactNode;
};

export type NavbarMenuType = FC<NavbarMenuPropsType>;

const NavbarMenu = ({ children }: NavbarMenuPropsType) => {
  return <div className='navbar-menu'>{children}</div>;
};

export default NavbarMenu;
