'use client';

import React from 'react';
import { MenuItem } from 'react-pro-sidebar';

import { ImageLogo } from '@/components/app';
import { ADMIN_ROUTES } from '@/consts/routes.consts';

const AdminSidebarBrand = () => {
  return (
    <MenuItem href={ADMIN_ROUTES.HOME}>
      <ImageLogo />
    </MenuItem>
  );
};

export default AdminSidebarBrand;
