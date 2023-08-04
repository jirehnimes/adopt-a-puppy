import { Property, PropertyOptions } from '@mikro-orm/core';

import { COLUMN_TYPE, DEFAULT_TIMESTAMP } from '@/core/consts/database.const';
import { DatePropertyType } from '@/database/property-types/date.property-type';

const DeletedTimestampProperty = function (properties?: PropertyOptions<any>) {
  return Property({
    type: DatePropertyType,
    columnType: COLUMN_TYPE.TIMESTAMP,
    default: DEFAULT_TIMESTAMP,
    onCreate: () => DEFAULT_TIMESTAMP,
    ...properties,
  });
};

export default DeletedTimestampProperty;
