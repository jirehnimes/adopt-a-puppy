import React, { ReactNode } from 'react';

import styles from './checkbox.module.sass';

type CheckboxPropsType = {
  disabled?: boolean;
  children: ReactNode;
};

const Checkbox = ({ disabled = false, children }: CheckboxPropsType) => {
  return (
    <label
      className={`checkbox ${styles.checkbox}`}
      {...(disabled === true && { disabled })}
    >
      <input
        type='checkbox'
        {...(disabled === true && { disabled })}
      />
      {children}
    </label>
  );
};

export default Checkbox;
