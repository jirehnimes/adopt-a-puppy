import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  model?: UseFormRegisterReturn<any>;
  status?: 'info' | 'success' | 'danger';
};

const Input = ({ model, status, ...props }: InputPropsType) => {
  const classes = formatDynamicClasses(['input', isClassExist(status, `is-${status}`)]);

  return (
    <input
      className={classes}
      type='text'
      {...model}
      {...props}
    />
  );
};

export default Input;
