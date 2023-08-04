import React, { FC, HTMLAttributes, ReactNode } from 'react';

import FormActions, { FormActionsType } from './actions/FormActions';

type FormChildrenType = {
  Actions: FormActionsType;
};

type FormPropsType = {
  children: ReactNode;
} & HTMLAttributes<HTMLFormElement>;

type FormType = FC<FormPropsType> & FormChildrenType;

const Form: FormType = ({ children, ...props }: FormPropsType) => {
  return (
    <form
      className='form'
      {...props}
    >
      {children}
    </form>
  );
};

Form.Actions = FormActions;

export default Form;
