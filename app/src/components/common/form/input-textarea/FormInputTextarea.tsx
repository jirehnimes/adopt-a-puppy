'use client';

import React, { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import Field from '../../field';
import Textarea from '../../textarea';

type FormInputTextareaPropsType = {
  model: UseFormRegisterReturn<any>;
  label?: string;
  input?: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
  message?: ReactNode;
  status?: 'info' | 'success' | 'danger';
};

const FormInputTextarea = ({
  model,
  label,
  input,
  message,
  status,
}: FormInputTextareaPropsType) => {
  return (
    <Field advance={false}>
      {!!label === true && <Field.Label full={false}>{label}</Field.Label>}

      <Field.Control fullWidth>
        <Textarea
          {...input}
          model={model}
        />
      </Field.Control>

      {!!message === true && <Field.Message status={status}>{message}</Field.Message>}
    </Field>
  );
};

export default FormInputTextarea;
