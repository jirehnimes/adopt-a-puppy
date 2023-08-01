import { ObjectId } from '@mikro-orm/mongodb';

export enum BASE_ENTITY_FIELD {
  _ID = '_id',
  ID = 'id',
  CREATED_TIMESTAMP = 'created_timestamp',
  UPDATED_TIMESTAMP = 'updated_timestamp',
  DELETED_TIMESTAMP = 'deleted_timestamp',
}

export interface IBaseEntity {
  [BASE_ENTITY_FIELD._ID]: ObjectId;
  [BASE_ENTITY_FIELD.ID]: string;
  [BASE_ENTITY_FIELD.CREATED_TIMESTAMP]?: string;
  [BASE_ENTITY_FIELD.UPDATED_TIMESTAMP]?: string;
  [BASE_ENTITY_FIELD.DELETED_TIMESTAMP]?: string;
}
