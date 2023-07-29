import React, { ReactNode } from 'react';

type FormPropsType = {
  children: ReactNode;
};

const Form = ({ children }: FormPropsType) => {
  return <form className='form'>{children}</form>;
};

export default Form;
