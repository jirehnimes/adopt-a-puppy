import React, { FC, ReactNode } from 'react';

type FieldControlPropsType = {
  fullWidth?: boolean;
  hasIconsLeft?: boolean;
  hasIconsRight?: boolean;
  children: ReactNode;
};

export type FieldControlType = FC<FieldControlPropsType>;

const FieldControl = ({
  fullWidth = false,
  hasIconsLeft = false,
  hasIconsRight = false,
  children,
}: FieldControlPropsType) => {
  const classes = [
    'control',
    hasIconsLeft === true ? 'has-icons-left' : '',
    hasIconsRight === true ? 'has-icons-right' : '',
    fullWidth === true ? 'is-expanded' : '',
  ]
    .join(' ')
    .trim();

  return <div className={classes}>{children}</div>;
};

export default FieldControl;
