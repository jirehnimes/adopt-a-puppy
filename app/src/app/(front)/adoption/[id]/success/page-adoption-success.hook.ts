import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import PuppyAPI from '@/api/puppy.api';
import defaultImage from '@/assets/images/logo-color.png';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';
import { APP_ROUTES } from '@/consts/routes.consts';
import { PuppyProfileType } from '@/types/puppy.types';

const usePageAdoptionSuccessHook = (puppyID?: string) => {
  const router = useRouter();
  const [puppy, setPuppy] = useState<PuppyProfileType>({
    id: '',
    name: '',
    age: 0,
    gender: PUPPY_GENDER.MALE,
    size: PUPPY_SIZE.SMALL,
    is_vaccinated: false,
    is_neutered: false,
    photo_url: defaultImage,
    breed: '',
    traits: [],
  });

  const getPuppyDetails = useCallback(async () => {
    if (puppyID === undefined) return false;

    const puppy = await PuppyAPI().findOne(puppyID);

    setPuppy(puppy);
  }, [puppyID]);

  useEffect(() => {
    getPuppyDetails();
  }, [getPuppyDetails]);

  return {
    puppy,
  };
};

export default usePageAdoptionSuccessHook;
