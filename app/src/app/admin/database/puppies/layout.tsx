'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

import { AdminHeaderActions } from '@/components/app';
import { Button, Icon, Title } from '@/components/common';

type PageAdminDatabasePuppiesLayoutPropsType = {
  children: ReactNode;
};

const PageAdminDatabasePuppiesLayout = ({ children }: PageAdminDatabasePuppiesLayoutPropsType) => {
  const router = useRouter();
  const [pageType, setPageType] = useState<string>('');

  return (
    <div className='container'>
      <Title>Puppies</Title>
      <AdminHeaderActions>
        <Button
          className='is-success'
          onClick={() => router.push('/admin/database/puppies/form')}
        >
          <Icon icon={faPlus} />
          <span>Create</span>
        </Button>
      </AdminHeaderActions>
      {children}
    </div>
  );
};

export default PageAdminDatabasePuppiesLayout;
