import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { APP_ROUTES } from '@/consts/routes.consts';
import { AdoptionFormType } from '@/types/adoption.types';
import { PuppyProfileType } from '@/types/puppy.types';

const INITIAL_FORM: AdoptionFormType = {
  full_name: null,
  email: null,
  mobile: null,
  remarks: null,
};

const useFrontAdoptionFormHook = (puppy: PuppyProfileType) => {
  const router = useRouter();

  const FULL_NAME_FIELD = 'Full name';
  const EMAIL_FIELD = 'Email';
  const MOBILE_FIELD = 'Mobile number';
  const REMARKS_FIELD = 'Remarks (Optional)';

  const form = useForm<AdoptionFormType>({
    reValidateMode: 'onSubmit',
    defaultValues: { ...INITIAL_FORM },
  });
  const { getValues, handleSubmit } = form;

  const submitForm = handleSubmit(async (formData: AdoptionFormType) => {
    console.log('FORM', formData);

    router.push(!!puppy?.id ? APP_ROUTES.ADOPTION_SUCCESS(puppy?.id) : APP_ROUTES.PUPPY_LIST);
  });

  return {
    FULL_NAME_FIELD,
    EMAIL_FIELD,
    MOBILE_FIELD,
    REMARKS_FIELD,
    form: { ...form, submitForm },
  };
};

export default useFrontAdoptionFormHook;
