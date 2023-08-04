import React, { FC, ReactNode } from 'react';

type FieldMessagePropsType = {
  children: ReactNode;
  status?: 'info' | 'success' | 'danger';
};

export type FieldMessageType = FC<FieldMessagePropsType>;

const FieldMessage = ({ children, status = 'info' }: FieldMessagePropsType) => {
  return <p className={`help is-${status}`}>{children}</p>;
};

export default FieldMessage;
