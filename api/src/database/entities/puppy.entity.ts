import { GENDER } from '@/core/consts/common.const';
import { PUPPY_SIZE } from '@/core/consts/puppy.const';
import { IPuppyEntity, PUPPY_ENTITY_FIELD } from '@/core/entities/puppy.entity';

export default class PuppyEntity implements IPuppyEntity {
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