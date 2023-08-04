export const COLUMN_TYPE = {
  INTEGER: 'integer',
  BIG_INTEGER: 'bigint',
  TINY_INTEGER: 'tinyint',
  SMALL_INTEGER: 'smallint',
  MEDIUM_INTEGER: 'mediumint',
  DECIMAL: (length = 11, decimals = 2) => `decimal(${length}, ${decimals})`,
  DATE: 'date',
  DATETIME: 'datetime',
  TIMESTAMP: 'timestamp',
  VARCHAR: (length = 512) => `varchar(${length})`,
  CHAR: (length = 20) => `char(${length})`,
  TEXT: 'text',
  LONGTEXT: 'longtext',
  BOOLEAN: 'boolean',
  ARRAY: 'array',
};

export const DEFAULT_TIMESTAMP = '0000-00-00 00:00:00';
