import React, { FC, ReactNode } from 'react';

import ColumnsColumn, { ColumnsColumnType } from './column/ColumnsColumn';

type ColumnsChildrenType = {
  Column: ColumnsColumnType;
};

type ColumnsPropsType = { children: ReactNode };

type ColumnsType = FC<ColumnsPropsType> & ColumnsChildrenType;

const Columns: ColumnsType = ({ children }: ColumnsPropsType) => {
  return <div className='columns'>{children}</div>;
};

Columns.Column = ColumnsColumn;

export default Columns;
