import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import React from 'react';

import PuppyAPI from '@/api/puppy.api';
import { ButtonDelete } from '@/components/app';
import { Button, Icon, Loader } from '@/components/common';
import { PuppyFilterType } from '@/types/puppy.types';

type AdminDatabasePuppiesListPropsType = {
  router: AppRouterInstance;
  filters: PuppyFilterType;
  deletePuppy: (id: string) => any;
};

const AdminDatabasePuppiesList = async ({
  router,
  filters,
  deletePuppy,
}: AdminDatabasePuppiesListPropsType) => {
  try {
    const puppies: any[] = await PuppyAPI().findAll(filters);

    const formatBooleanText = (data: any) => (data === true ? 'Yes' : 'No');

    return (
      <>
        {puppies.map((puppy: any) => (
          <tr key={puppy?.id}>
            <td>{puppy?.name || ''}</td>
            <td>{puppy?.breed || ''}</td>
            <td className='gender'>{String(puppy?.gender || '').toUpperCase()}</td>
            <td className='age'>{puppy?.age || 0}</td>
            <td className='is-vaccinated'>{formatBooleanText(puppy?.is_vaccinated)}</td>
            <td className='is-neutered'>{formatBooleanText(puppy?.is_neutered)}</td>
            <td className='actions'>
              <Button
                className='is-info'
                onClick={() => router.push(`/admin/database/puppies/form/${puppy?.id}`)}
              >
                <Icon icon={faEdit} />
              </Button>
              <ButtonDelete
                id={puppy?.id}
                onSubmit={() => deletePuppy(puppy?.id)}
              />
            </td>
          </tr>
        ))}
      </>
    );
  } catch (error: any) {
    return (
      <tr>
        <td
          colSpan={7}
          className='has-background-danger'
        >
          Failed to get the list of puppies. Please try again.
        </td>
      </tr>
    );
  }
};

export default AdminDatabasePuppiesList;
