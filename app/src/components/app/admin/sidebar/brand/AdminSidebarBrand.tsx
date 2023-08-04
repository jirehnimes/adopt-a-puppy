'use client';

import Image from 'next/image';
import React from 'react';
import { MenuItem } from 'react-pro-sidebar';

import logo from '@/assets/images/logo.png';

const AdminSidebarBrand = () => {
  return (
    <MenuItem>
      <Image
        src={logo}
        height={40}
        alt='Adopt A Puppy'
      />
    </MenuItem>
  );
};

export default AdminSidebarBrand;
