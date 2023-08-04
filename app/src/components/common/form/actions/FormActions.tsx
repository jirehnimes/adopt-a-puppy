import React, { FC, ReactNode } from 'react';

import styles from './form-actions.module.sass';

type FromActionsPropsType = {
  children: ReactNode;
};

export type FormActionsType = FC<FromActionsPropsType>;

const FormActions = ({ children }: FromActionsPropsType) => {
  return <div className={`form-actions ${styles['form-actions'] || ''}`}>{children}</div>;
};

export default FormActions;
