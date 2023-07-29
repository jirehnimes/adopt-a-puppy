import React, { FC, ReactNode } from 'react';

type FieldLabelPropsType = {
  children: ReactNode;
};

export type FieldLabelType = FC<FieldLabelPropsType>;

const FieldLabel = ({ children }: FieldLabelPropsType) => {
  return <label className='label'>{children}</label>;
};

export default FieldLabel;
