'use client';

import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';

import styles from './admin-sidebar.module.sass';
import AdminSidebarBrand from './brand';

const AdminSidebar = () => {
  return (
    <Sidebar className={styles['admin-sidebar']}>
      <Menu style={{ paddingTop: '20px' }}>
        <AdminSidebarBrand />
        <SubMenu
          label='Database'
          defaultOpen
        >
          <MenuItem>Puppies</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default AdminSidebar;
