import React, { FC, ReactNode } from 'react';

import styles from './field-body.module.sass';

type FieldBodyPropsType = {
  children: ReactNode;
  horizontal?: boolean;
};

export type FieldBodyType = FC<FieldBodyPropsType>;

const FieldBody = ({ children, horizontal = false }: FieldBodyPropsType) => {
  const classes = ['field-body', styles['field-body'], horizontal === true ? 'is-horizontal' : '']
    .join(' ')
    .trim();

  return <div className={classes}>{children}</div>;
};

export default FieldBody;
