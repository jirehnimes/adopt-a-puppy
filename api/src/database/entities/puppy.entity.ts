import { Entity, Property } from '@mikro-orm/core';

import { GENDER } from '@/core/consts/common.const';
import { COLUMN_TYPE } from '@/core/consts/database.const';
import { PUPPY_SIZE } from '@/core/consts/puppy.const';
import { IPuppyEntity, PUPPY_TABLE_NAME } from '@/core/entities/puppy.entity';

import { PuppyRepository } from '../repositories';
import BaseEntity from './base.entity';

@Entity({
  tableName: PUPPY_TABLE_NAME,
  customRepository: () => PuppyRepository,
})
export default class PuppyEntity extends BaseEntity implements IPuppyEntity {
  @Property()
  name: string;

  @Property({ columnType: COLUMN_TYPE.INTEGER })
  age: number;

  @Property()
  gender: GENDER;

  @Property({ columnType: COLUMN_TYPE.INTEGER })
  size: PUPPY_SIZE;

  @Property({ columnType: COLUMN_TYPE.BOOLEAN, nullable: true, default: false })
  is_vaccinated?: boolean;

  @Property({ columnType: COLUMN_TYPE.BOOLEAN, nullable: true, default: false })
  is_neutered?: boolean;

  @Property()
  photo_url: string;

  @Property()
  breed: string;

  @Property({ type: COLUMN_TYPE.ARRAY, nullable: true, default: [] })
  traits: string[];
}
