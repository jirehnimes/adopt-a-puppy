'use client';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { ReactNode, Suspense } from 'react';

import { AdminHeaderActions } from '@/components/app';
import { Button, Icon, Loader } from '@/components/common';
import { AdminDatabasePuppiesList } from '@/components/pages';

import useAdminDatabasePuppiesHook from './admin-database-puppies.hook';
import styles from './admin-database-puppies.module.sass';

const PageAdminDatabasePuppies = () => {
  const router = useRouter();
  const { filters, deletePuppy } = useAdminDatabasePuppiesHook();

  return (
    <div className='admin__database__puppies'>
      <AdminHeaderActions>
        <Button
          className='is-success'
          onClick={() => router.push('/admin/database/puppies/form')}
        >
          <Icon icon={faPlus} />
          <span>Create</span>
        </Button>
      </AdminHeaderActions>
      <table className={`table is-striped is-fullwidth ${styles.table}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th className='gender'>Gender</th>
            <th className='age'>Age (Years)</th>
            <th className='is-vaccinated'>Is Vaccinated?</th>
            <th className='is-neutered'>Is Neutered?</th>
            <th className='actions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Suspense
            fallback={
              <tr>
                <td colSpan={7}>
                  <Loader />
                </td>
              </tr>
            }
          >
            <AdminDatabasePuppiesList
              router={router}
              filters={filters()}
              deletePuppy={deletePuppy}
            />
          </Suspense>
        </tbody>
      </table>
    </div>
  );
};

export default PageAdminDatabasePuppies;
