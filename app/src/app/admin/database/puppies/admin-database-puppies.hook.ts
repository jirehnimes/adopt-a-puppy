import { useForm } from 'react-hook-form';

import PuppyAPI from '@/api/puppy.api';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER } from '@/consts/puppy.consts';
import { PuppyFilterType } from '@/types/puppy.types';

const INITIAL_FILTERS: PuppyFilterType = {
  search: '',
  gender: [PUPPY_GENDER.MALE, PUPPY_GENDER.FEMALE],
  is_vaccinated: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
  is_neutered: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
};

const useAdminDatabasePuppiesHook = () => {
  const formFilters = useForm<PuppyFilterType>({
    reValidateMode: 'onSubmit',
    defaultValues: { ...INITIAL_FILTERS },
  });
  const { getValues } = formFilters;

  const deletePuppy = async (id: string) => {
    try {
      await PuppyAPI().remove(id);
    } catch (error: any) {
      console.error(error?.message || error);
    }
  };

  return {
    filters: getValues,
    deletePuppy,
  };
};

export default useAdminDatabasePuppiesHook;
