import {
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

@Entity({ abstract: true })
export default abstract class BaseEntity {
  @PrimaryKey()
  _id?: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property({ type: 'datetime', nullable: true })
  created_timestamp?: string;

  @Property({ type: 'datetime', nullable: true })
  updated_timestamp?: string;

  @Property({ type: 'datetime', nullable: true })
  deleted_timestamp?: string;
}
