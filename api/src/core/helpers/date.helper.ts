import { formatInTimeZone } from 'date-fns-tz';

import { DATE_TIMEZONE } from '../consts/common.const';

export const dateFormat = (
  date: Date | string | number,
  formatString = 'yyyy-MM-dd HH:mm:ss',
  timezone = DATE_TIMEZONE.UTC,
) => {
  return formatInTimeZone(new Date(date), timezone, formatString);
};
