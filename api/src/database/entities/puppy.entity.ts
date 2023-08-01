import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

import { GENDER } from '@/core/consts/common.const';
import { PUPPY_SIZE } from '@/core/consts/puppy.const';
import { IPuppyEntity, PUPPY_ENTITY_FIELD } from '@/core/entities/puppy.entity';

import { PuppyRepository } from '../repositories';

@Entity({ tableName: 'puppy', customRepository: () => PuppyRepository })
export default class PuppyEntity implements IPuppyEntity {
  @PrimaryKey()
  _id?: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  name: string;

  @Property({ type: 'integer' })
  age: number;

  @Property()
  gender: GENDER;

  @Property({ type: 'integer' })
  size: PUPPY_SIZE;

  @Property({ type: 'boolean', nullable: true, default: false })
  is_vaccinated?: boolean;

  @Property({ type: 'boolean', nullable: true, default: false })
  is_neutered?: boolean;

  @Property()
  photo_url: string;

  @Property()
  breed: string;

  @Property({ type: 'array', nullable: true, default: [] })
  traits: string[];
}
