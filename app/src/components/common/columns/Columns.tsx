import React, { FC, ReactNode } from 'react';

import ColumnsColumn, { ColumnsColumnType } from './column/ColumnsColumn';

type ColumnsChildrenType = {
  Column: ColumnsColumnType;
};

type ColumnsPropsType = { children: ReactNode; flex?: boolean; className?: string };

type ColumnsType = FC<ColumnsPropsType> & ColumnsChildrenType;

const Columns: ColumnsType = ({ children, flex = false, className }: ColumnsPropsType) => {
  const classes = [
    'columns is-flex-wrap-wrap',
    !!flex === true ? 'is-flex' : '',
    !!className === true ? className : '',
  ]
    .join(' ')
    .trim();

  return <div className={classes}>{children}</div>;
};

Columns.Column = ColumnsColumn;

export default Columns;
