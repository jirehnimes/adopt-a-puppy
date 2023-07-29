import React, { FC, ReactNode } from 'react';

import NavbarBrand, { NavbarBrandType } from './brand/NavbarBrand';
import NavbarItem, { NavbarItemType } from './item/NavbarItem';
import NavbarMenu, { NavbarMenuType } from './menu/NavbarMenu';
import styles from './navbar.module.sass';
import NavbarPosition, { NavbarPositionType } from './position/NavbarPosition';

type NavbarChildrenType = {
  Brand: NavbarBrandType;
  Menu: NavbarMenuType;
  Item: NavbarItemType;
  Position: NavbarPositionType;
};

type NavbarPropsType = { children: ReactNode };

type NavbarType = FC<NavbarPropsType> & NavbarChildrenType;

const Navbar: NavbarType = ({ children }: NavbarPropsType) => {
  return (
    <nav
      className={`navbar is-fixed-top ${styles.navbar}`}
      role='navigation'
      aria-label='main navigation'
    >
      {children}
    </nav>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Menu = NavbarMenu;
Navbar.Item = NavbarItem;
Navbar.Position = NavbarPosition;

export default Navbar;
