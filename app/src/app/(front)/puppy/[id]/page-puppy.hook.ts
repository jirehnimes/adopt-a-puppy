import { useCallback, useEffect, useState } from 'react';

import PuppyAPI from '@/api/puppy.api';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';
import { PuppyProfileType } from '@/types/puppy.types';

const usePagePuppyHook = (puppyID?: string) => {
  const [puppy, setPuppy] = useState<PuppyProfileType>({
    name: '',
    age: 0,
    gender: PUPPY_GENDER.MALE,
    size: PUPPY_SIZE.SMALL,
    is_vaccinated: false,
    is_neutered: false,
    photo_url: '',
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

export default usePagePuppyHook;
