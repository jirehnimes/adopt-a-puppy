import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ ...props }: InputPropsType) => {
  return (
    <input
      className='input'
      type='text'
      {...props}
    />
  );
};

export default Input;
