import { Metadata } from 'next';
import { ReactNode } from 'react';

import { AdminBox, AdminSidebar } from '@/components/app';

import styles from './admin-layout.module.sass';

type AdminLayoutPropsType = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Admin | Adopt A Puppy',
  icons: [
    {
      rel: 'shortcut icon',
      href: 'favicon.png',
      url: '/public/favicon.png',
      type: 'image/x-icon',
    },
  ],
};

const AdminLayout = ({ children }: AdminLayoutPropsType) => {
  return (
    <div className={styles['admin-layout']}>
      <AdminSidebar />
      <main>
        <AdminBox>{children}</AdminBox>
      </main>
    </div>
  );
};

export default AdminLayout;
