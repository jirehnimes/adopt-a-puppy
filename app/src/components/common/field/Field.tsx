import React, { FC, ReactNode } from 'react';

import FieldBody, { FieldBodyType } from './body/FieldBody';
import FieldControl, { FieldControlType } from './control/FieldControl';
import FieldIcon, { FieldIconType } from './icon/FieldIcon';
import FieldLabel, { FieldLabelType } from './label/FieldLabel';

type FieldChildrenType = {
  Label: FieldLabelType;
  Control: FieldControlType;
  Icon: FieldIconType;
  Body: FieldBodyType;
};

type FieldPropsType = {
  advance?: boolean;
  grouped?: boolean;
  groupAlign?: 'left' | 'centered' | 'right';
  children: ReactNode;
};

type FieldType = FC<FieldPropsType> & FieldChildrenType;

const Field: FieldType = ({
  advance = true,
  grouped = false,
  groupAlign = 'left',
  children,
}: FieldPropsType) => {
  return (
    <div
      className={`
        field
        ${advance === true && 'has-addons'}
        ${grouped === true && 'is-grouped'}
        ${
          grouped === true &&
          !!groupAlign === true &&
          `is-grouped-${groupAlign}`
        }
      `}
    >
      {children}
    </div>
  );
};

Field.Label = FieldLabel;
Field.Control = FieldControl;
Field.Icon = FieldIcon;
Field.Body = FieldBody;

export default Field;
