import { Entity, PrimaryKey, SerializedPrimaryKey } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';

import CreatedTimestampProperty from '../properties/created-timestamp.property';
import DeletedTimestampProperty from '../properties/deleted-timestamp.property';
import UpdatedTimestampProperty from '../properties/updated-timestamp.property';

@Entity({ abstract: true })
export default abstract class BaseEntity {
  @PrimaryKey()
  _id?: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @CreatedTimestampProperty()
  created_timestamp?: string;

  @UpdatedTimestampProperty()
  updated_timestamp?: string;

  @DeletedTimestampProperty()
  deleted_timestamp?: string;
}
