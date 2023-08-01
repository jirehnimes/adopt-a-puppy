import React, { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './checkbox.module.sass';

type CheckboxPropsType = {
  value: any;
  children: ReactNode;
  model?: UseFormRegisterReturn<any>;
  disabled?: boolean;
};

export type CheckboxType = FC<CheckboxPropsType>;

const Checkbox: CheckboxType = ({
  value,
  children,
  model,
  disabled = false,
}: CheckboxPropsType) => {
  return (
    <label
      className={`checkbox ${styles.checkbox}`}
      {...(disabled === true && { disabled })}
    >
      <input
        type='checkbox'
        {...(disabled === true && { disabled })}
        value={value}
        {...model}
      />
      {children}
    </label>
  );
};

export default Checkbox;
