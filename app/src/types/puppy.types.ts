import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';

export type PuppyFilterType = {
  search: string;
  gender: PUPPY_GENDER[];
  is_vaccinated: BOOLEAN_STRING[];
  is_neutered: BOOLEAN_STRING[];
};

export type PuppyFormCreateType = {
  name: string | null;
  age: number | null;
  gender: PUPPY_GENDER | 'null' | null;
  size: PUPPY_SIZE | 'null' | null;
  is_vaccinated?: string;
  is_neutered?: string;
  photo_url: string | null;
  breed: string | null;
  traits: string | null;
};

export type PuppyFormUpdateType = Partial<PuppyFormCreateType>;

export type PuppyFormCreateAPIType = {
  name: string | null;
  age: number | null;
  gender: PUPPY_GENDER | null;
  size: PUPPY_SIZE | null;
  is_vaccinated?: boolean;
  is_neutered?: boolean;
  photo_url: string | null;
  breed: string | null;
  traits: string[] | null;
};

export type PuppyFormUpdateAPIType = Partial<PuppyFormCreateAPIType>;
