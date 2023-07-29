import React, { FC, ReactNode } from 'react';

type NavbarPositionPropsType = {
  position?: 'start' | 'end';
  children: ReactNode;
};

export type NavbarPositionType = FC<NavbarPositionPropsType>;

const NavbarPosition = ({
  position = 'start',
  children,
}: NavbarPositionPropsType) => {
  return <div className={`navbar-${position}`}>{children}</div>;
};

export default NavbarPosition;
