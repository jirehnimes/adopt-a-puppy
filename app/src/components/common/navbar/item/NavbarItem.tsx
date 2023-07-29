import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

type NavbarItemPropsType = {
  path?: string;
  children: ReactNode;
};

export type NavbarItemType = FC<NavbarItemPropsType>;

const NavbarItem: NavbarItemType = ({
  path = '/',
  children,
}: NavbarItemPropsType) => {
  return (
    <Link
      href={path}
      className='navbar-item'
    >
      {children}
    </Link>
  );
};

export default NavbarItem;
