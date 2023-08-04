import { useParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import PuppyAPI from '@/api/puppy.api';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';
import { PuppyFormCreateType } from '@/types/puppy.types';

const INITIAL_FORM: PuppyFormCreateType = {
  name: null,
  age: null,
  gender: 'null',
  size: 'null',
  is_vaccinated: BOOLEAN_STRING.FALSE,
  is_neutered: BOOLEAN_STRING.FALSE,
  photo_url: null,
  breed: null,
  traits: null,
};

const useAdminDatabasePuppiesUpdateHook = () => {
  const urlParams = useParams();
  const puppyID = String(urlParams?.id || '');
  const form = useForm<PuppyFormCreateType>({
    reValidateMode: 'onSubmit',
    defaultValues: { ...INITIAL_FORM },
  });
  const { setValue, handleSubmit } = form;

  const getPuppy = useCallback(async () => {
    const puppy = await PuppyAPI().findOne(puppyID);

    setValue('name', puppy?.name || null);
    setValue('age', puppy?.age || null);
    setValue('gender', puppy?.gender || PUPPY_GENDER.MALE);
    setValue('size', puppy?.size || PUPPY_SIZE.SMALL);
    setValue('photo_url', puppy?.photo_url || null);
    setValue('breed', puppy?.breed || null);

    if (!!puppy?.traits === true && Array.isArray(puppy?.traits) === true) {
      const traits = puppy!.traits.join(',');

      setValue('traits', traits || null);
    }
  }, [puppyID, setValue]);

  const submitForm = handleSubmit(async (formData: PuppyFormCreateType) => {
    try {
      console.log('FORM', formData);

      const response = await PuppyAPI().update(puppyID, formData);

      console.log(response);
    } catch (error: any) {
      console.log(error?.message || error);
      console.error('Show error here');
    }
  });

  useEffect(() => {
    getPuppy();
  }, [getPuppy]);

  return {
    form: { ...form, submitForm },
  };
};

export default useAdminDatabasePuppiesUpdateHook;
