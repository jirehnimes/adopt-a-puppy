import { Property, PropertyOptions } from '@mikro-orm/core';

import { COLUMN_TYPE } from '@/core/consts/database.const';
import { dateFormat } from '@/core/helpers/date.helper';
import { DatePropertyType } from '@/database/property-types/date.property-type';

const CreatedTimestampProperty = function (properties?: PropertyOptions<any>) {
  return Property({
    type: DatePropertyType,
    columnType: COLUMN_TYPE.TIMESTAMP,
    onCreate: () => dateFormat(new Date()),
    ...properties,
  });
};

export default CreatedTimestampProperty;
