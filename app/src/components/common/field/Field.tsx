import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';

import FieldBody, { FieldBodyType } from './body/FieldBody';
import FieldControl, { FieldControlType } from './control/FieldControl';
import FieldIcon, { FieldIconType } from './icon/FieldIcon';
import FieldLabel, { FieldLabelType } from './label/FieldLabel';
import FieldMessage, { FieldMessageType } from './message/FieldMessage';

type FieldChildrenType = {
  Label: FieldLabelType;
  Control: FieldControlType;
  Icon: FieldIconType;
  Body: FieldBodyType;
  Message: FieldMessageType;
};

type FieldPropsType = {
  horizontal?: boolean;
  advance?: boolean;
  grouped?: boolean;
  groupAlign?: 'left' | 'centered' | 'right';
  className?: string;
  children: ReactNode;
};

type FieldType = FC<FieldPropsType> & FieldChildrenType;

const Field: FieldType = ({
  horizontal = false,
  advance = true,
  grouped = false,
  groupAlign = 'left',
  className,
  children,
}: FieldPropsType) => {
  const classes = formatDynamicClasses([
    'field',
    isClassExist(advance, 'has-addons'),
    isClassExist(grouped, 'is-grouped'),
    isClassExist(grouped === true && !!groupAlign === true, `is-grouped-${groupAlign}`),
    isClassExist(horizontal, 'is-horizontal'),
    className,
  ]);

  return <div className={classes}>{children}</div>;
};

Field.Label = FieldLabel;
Field.Control = FieldControl;
Field.Icon = FieldIcon;
Field.Body = FieldBody;
Field.Message = FieldMessage;

export default Field;
