import { GENDER } from '../consts/common.const';
import { PUPPY_SIZE } from '../consts/puppy.const';

export enum PUPPY_ENTITY_FIELD {
  ID = 'id',
  NAME = 'name',
  AGE = 'age',
  GENDER = 'gender',
  SIZE = 'size',
  IS_VACCINATED = 'is_vaccinated',
  IS_NEUTERED = 'is_neutered',
  PHOTO_URL = 'photo_url',
  BREED = 'breed',
  TRAITS = 'traits',
}

export interface IPuppyEntity {
  [PUPPY_ENTITY_FIELD.ID]: number;
  [PUPPY_ENTITY_FIELD.NAME]: string;
  [PUPPY_ENTITY_FIELD.AGE]: number;
  [PUPPY_ENTITY_FIELD.GENDER]: GENDER;
  [PUPPY_ENTITY_FIELD.SIZE]: PUPPY_SIZE;
  [PUPPY_ENTITY_FIELD.IS_VACCINATED]?: boolean;
  [PUPPY_ENTITY_FIELD.IS_NEUTERED]?: boolean;
  [PUPPY_ENTITY_FIELD.PHOTO_URL]: string;
  [PUPPY_ENTITY_FIELD.BREED]: string;
  [PUPPY_ENTITY_FIELD.TRAITS]: string[];
}
