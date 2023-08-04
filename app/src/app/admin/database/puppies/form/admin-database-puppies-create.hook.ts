import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import PuppyAPI from '@/api/puppy.api';
import { BOOLEAN_STRING } from '@/consts/common.consts';
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

const useAdminDatabasePuppiesCreateHook = () => {
  const router = useRouter();

  const form = useForm<PuppyFormCreateType>({
    reValidateMode: 'onSubmit',
    defaultValues: { ...INITIAL_FORM },
  });
  const { getValues, handleSubmit } = form;

  const submitForm = handleSubmit(async (formData: PuppyFormCreateType) => {
    try {
      console.log('FORM', formData);

      const response = await PuppyAPI().create(formData);

      console.log(response);

      router.push('/admin/database/puppies');
    } catch (error: any) {
      console.log(error?.message || error);
      console.error('Show error here');
    }
  });

  return {
    form: { ...form, submitForm },
  };
};

export default useAdminDatabasePuppiesCreateHook;
