import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.png';
import { Navbar } from '@/components/common';

import styles from './front-navbar-brand.module.sass';

const FrontNavbarBrand = () => {
  return (
    <Navbar.Brand className={styles['front-navbar-brand']}>
      <Navbar.Item path='/'>
        <Image
          src={logo}
          height={40}
          alt='Adopt A Puppy'
        />
      </Navbar.Item>
    </Navbar.Brand>
  );
};

export default FrontNavbarBrand;
