import React, { FC, ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Checkbox, Field } from '@/components/common';

type FormInputCheckboxesCheckboxPropsType = {
  model: UseFormRegisterReturn<any>;
  value: any;
  children: ReactNode;
};

export type FormInputCheckboxesCheckboxType = FC<FormInputCheckboxesCheckboxPropsType>;

const FormInputCheckboxesCheckbox = ({
  model,
  value,
  children,
}: FormInputCheckboxesCheckboxPropsType) => {
  return (
    <Field advance={false}>
      <Checkbox
        model={model}
        value={value}
      >
        {children}
      </Checkbox>
    </Field>
  );
};

export default FormInputCheckboxesCheckbox;
