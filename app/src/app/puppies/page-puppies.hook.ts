import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import PuppyAPI from '@/api/puppy.api';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER } from '@/consts/puppy.consts';
import { PuppyFilterType } from '@/types/puppy.types';

const INITIAL_FILTERS: PuppyFilterType = {
  search: null,
  gender: [PUPPY_GENDER.MALE, PUPPY_GENDER.FEMALE],
  is_vaccinated: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
  is_neutered: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
};

const usePagePuppiesHook = () => {
  const formFilters = useForm<PuppyFilterType>({
    reValidateMode: 'onSubmit',
    defaultValues: { ...INITIAL_FILTERS },
  });
  const { getValues, handleSubmit } = formFilters;

  // const [filters, setFilters] = useState<PuppyFilterType>({ ...INITIAL_FILTERS });
  const [puppies, setPuppies] = useState<any[]>([]);

  const submitFilters = handleSubmit((formData) => {
    console.log(formData);
    getPuppies();
  });

  const getPuppies = async () => {
    try {
      const response = await PuppyAPI().findAll(getValues());
      setPuppies(response);
    } catch (error: any) {
      // TODO: Show error message.
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getPuppies();
  // });

  return {
    formFilters: { ...formFilters, submitFilters },
    puppies,
  };
};

export default usePagePuppiesHook;
