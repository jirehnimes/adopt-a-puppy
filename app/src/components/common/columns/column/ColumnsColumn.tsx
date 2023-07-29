import React, { FC, ReactNode } from 'react';

type ColumnsColumnPropsType = {
  size?: number;
  children: ReactNode;
};

export type ColumnsColumnType = FC<ColumnsColumnPropsType>;

const ColumnsColumn = ({ size = 12, children }: ColumnsColumnPropsType) => {
  return <div className={`column is-${size}`}>{children}</div>;
};

export default ColumnsColumn;
