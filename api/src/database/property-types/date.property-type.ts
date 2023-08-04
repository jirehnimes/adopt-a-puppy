import { Type } from '@mikro-orm/core';

import { DEFAULT_TIMESTAMP } from '@/core/consts/database.const';
import { dateFormat } from '@/core/helpers/date.helper';

export class DatePropertyType extends Type {
  convertToJSValue(value: string): string {
    if (value === DEFAULT_TIMESTAMP) return '';

    return !!value === true ? dateFormat(value, 'yyyy-MM-dd HH:mm:ss') : '';
  }
}
