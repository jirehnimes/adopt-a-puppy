import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  model?: UseFormRegisterReturn<any>;
  status?: 'info' | 'success' | 'danger';
};

const Input = ({ model, status, ...props }: InputPropsType) => {
  const classes = ['input', !!status === true ? `is-${status}` : ''].join(' ').trim();

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
