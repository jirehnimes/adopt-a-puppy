import React, { Children, FC, ReactNode } from 'react';

import { Field } from '@/components/common';
import FieldLabel, { FieldLabelType } from '@/components/common/field/label/FieldLabel';

import FormInputCheckboxesCheckbox, {
  FormInputCheckboxesCheckboxType,
} from './checkbox/FormInputCheckboxesCheckbox';

type FormInputCheckboxesChildrenType = {
  Label: FieldLabelType;
  Checkbox: FormInputCheckboxesCheckboxType;
};

type FormInputCheckboxesPropsType = {
  label: ReactNode;
  children: ReactNode;
  horizontal?: boolean;
  className?: string;
};

type FormInputCheckboxesType = FC<FormInputCheckboxesPropsType> & FormInputCheckboxesChildrenType;

const FormInputCheckboxes: FormInputCheckboxesType = ({
  label,
  children,
  horizontal = true,
  className,
}: FormInputCheckboxesPropsType) => {
  return (
    <Field
      advance={false}
      horizontal={horizontal}
      className={className}
    >
      {label}
      <Field.Body horizontal={horizontal}>{children}</Field.Body>
    </Field>
  );
};

FormInputCheckboxes.Label = FieldLabel;
FormInputCheckboxes.Checkbox = FormInputCheckboxesCheckbox;

export default FormInputCheckboxes;
