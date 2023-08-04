'use client';

import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Field, Select } from '@/components/common';
import { SelectOptionType } from '@/components/common/select/Select';

type FormInputPropsType = {
  options: SelectOptionType[];
  model: UseFormRegisterReturn<any>;
  label?: string;
  message?: ReactNode;
  status?: 'info' | 'success' | 'danger';
};

const FormInputSelect = ({ options, model, label, message, status }: FormInputPropsType) => {
  return (
    <Field advance={false}>
      {!!label === true && <Field.Label full={false}>{label}</Field.Label>}

      <Field.Control fullWidth>
        <Select
          options={options}
          model={model}
          status={status}
          fullWidth
        />
      </Field.Control>

      {!!message === true && <Field.Message status={status}>{message}</Field.Message>}
    </Field>
  );
};

export default FormInputSelect;
