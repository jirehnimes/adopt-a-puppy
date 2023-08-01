import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  model?: UseFormRegisterReturn<any>;
};

const Input = ({ model, ...props }: InputPropsType) => {
  return (
    <input
      className='input'
      type='text'
      {...model}
      {...props}
    />
  );
};

export default Input;
