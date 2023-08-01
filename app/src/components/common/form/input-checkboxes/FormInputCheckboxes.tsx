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
  children: ReactNode;
  horizontal?: boolean;
  className?: string;
};

type FormInputCheckboxesType = FC<FormInputCheckboxesPropsType> & FormInputCheckboxesChildrenType;

const FormInputCheckboxes: FormInputCheckboxesType = ({
  children,
  horizontal = true,
  className,
}: FormInputCheckboxesPropsType) => {
  const labels = Children.toArray(children).filter(
    (child: any) => child?.type?.name === FieldLabel.name,
  );
  const others = Children.toArray(children).filter(
    (child: any) => child?.type?.name !== FieldLabel.name,
  );

  return (
    <Field
      advance={false}
      horizontal={horizontal}
      className={className}
    >
      {labels}
      <Field.Body horizontal={horizontal}>{others}</Field.Body>
    </Field>
  );
};

FormInputCheckboxes.Label = FieldLabel;
FormInputCheckboxes.Checkbox = FormInputCheckboxesCheckbox;

export default FormInputCheckboxes;
