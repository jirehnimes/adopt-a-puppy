import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

import ColumnsColumn, { ColumnsColumnType } from './column/ColumnsColumn';

type ColumnsChildrenType = {
  Column: ColumnsColumnType;
};

type ColumnsPropsType = { children: ReactNode; flex?: boolean } & BasePropsType;

type ColumnsType = FC<ColumnsPropsType> & ColumnsChildrenType;

const Columns: ColumnsType = ({ children, flex = false, className }: ColumnsPropsType) => {
  const classes = formatDynamicClasses([
    'columns is-flex-wrap-wrap',
    isClassExist(flex, 'is-flex'),
    isClassExist(className, className!),
  ]);

  return <div className={classes}>{children}</div>;
};

Columns.Column = ColumnsColumn;

export default Columns;
