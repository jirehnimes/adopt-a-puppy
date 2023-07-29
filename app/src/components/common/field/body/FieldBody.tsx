import React, { FC, ReactNode } from 'react';

type FieldBodyPropsType = {
  children: ReactNode;
};

export type FieldBodyType = FC<FieldBodyPropsType>;

const FieldBody = ({ children }: FieldBodyPropsType) => {
  return <div className='field-body'>{children}</div>;
};

export default FieldBody;
