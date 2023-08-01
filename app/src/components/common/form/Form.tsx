import React, { HTMLAttributes, ReactNode } from 'react';

type FormPropsType = {
  children: ReactNode;
} & HTMLAttributes<HTMLFormElement>;

const Form = ({ children, ...props }: FormPropsType) => {
  return (
    <form
      className='form'
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
