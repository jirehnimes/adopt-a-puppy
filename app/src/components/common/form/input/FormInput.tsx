'use client';

import React, { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Field from '../../field';
import Input from '../../input';

type FormInputPropsType = {
  model: UseFormRegisterReturn<any>;
  label?: string;
  input?: InputHTMLAttributes<HTMLInputElement>;
  message?: ReactNode;
  status?: 'info' | 'success' | 'danger';
};

const FormInput = ({ model, label, input, message, status }: FormInputPropsType) => {
  return (
    <Field advance={false}>
      {!!label === true && <Field.Label full={false}>{label}</Field.Label>}

      <Field.Control fullWidth>
        <Input
          {...input}
          model={model}
          status={status}
        />
      </Field.Control>

      {!!message === true && <Field.Message status={status}>{message}</Field.Message>}
    </Field>
  );
};

export default FormInput;
