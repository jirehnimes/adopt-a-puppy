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
  return (
    <div
      className={[
        'control',
        hasIconsLeft === true ? 'has-icons-left' : '',
        hasIconsRight === true ? 'has-icons-right' : '',
        fullWidth === true ? 'is-expanded' : '',
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default FieldControl;
