import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER } from '@/consts/puppy.consts';

export type PuppyFilterType = {
  search: string | null;
  gender: PUPPY_GENDER[];
  is_vaccinated: BOOLEAN_STRING[];
  is_neutered: BOOLEAN_STRING[];
};
