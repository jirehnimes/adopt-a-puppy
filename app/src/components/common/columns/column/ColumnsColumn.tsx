import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

type ColumnsColumnPropsType = {
  size?: number;
  children: ReactNode;
} & BasePropsType;

export type ColumnsColumnType = FC<ColumnsColumnPropsType>;

const ColumnsColumn = ({ children, size = 12, className }: ColumnsColumnPropsType) => {
  const classes = formatDynamicClasses([
    'column',
    `is-${size}`,
    isClassExist(className, className!),
  ]);

  return <div className={classes}>{children}</div>;
};

export default ColumnsColumn;
