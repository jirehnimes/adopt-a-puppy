import React, { ReactNode } from 'react';

type BoxPropsType = {
  children: ReactNode;
  className?: string;
};

const Box = ({ children, className }: BoxPropsType) => {
  const classes = ['box', className].join(' ').trim();

  return <div className={classes}>{children}</div>;
};

export default Box;
