import React, { FC, ReactNode } from 'react';

type NavbarBrandPropsType = {
  className?: string;
  children: ReactNode;
};

export type NavbarBrandType = FC<NavbarBrandPropsType>;

const NavbarBrand = ({ className, children }: NavbarBrandPropsType) => {
  return <div className={`navbar-brand ${className}`}>{children}</div>;
};

export default NavbarBrand;
