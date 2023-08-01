import React, { FC, ReactNode } from 'react';

type FieldLabelPropsType = {
  full?: boolean;
  children: ReactNode;
};

export type FieldLabelType = FC<FieldLabelPropsType>;

const FieldLabel = ({ full = true, children }: FieldLabelPropsType) => {
  const baseLabel = <label className='label'>{children}</label>;

  if (full === true) {
    return <div className='field-label'>{baseLabel}</div>;
  }

  return baseLabel;
};

export default FieldLabel;
