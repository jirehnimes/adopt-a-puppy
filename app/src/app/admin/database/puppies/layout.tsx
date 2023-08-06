import { Metadata } from 'next';
import { ReactNode } from 'react';

import { Title } from '@/components/common';

type PageAdminDatabasePuppiesLayoutPropsType = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Puppies - Admin | Adopt A Puppy',
  icons: [
    {
      rel: 'shortcut icon',
      href: 'favicon.png',
      url: '/public/favicon.png',
      type: 'image/x-icon',
    },
  ],
};

const PageAdminDatabasePuppiesLayout = ({ children }: PageAdminDatabasePuppiesLayoutPropsType) => {
  return (
    <div className='container'>
      <Title>Puppies</Title>

      {children}
    </div>
  );
};

export default PageAdminDatabasePuppiesLayout;
