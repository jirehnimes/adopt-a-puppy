import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

type FieldLabelPropsType = {
  full?: boolean;
  children: ReactNode;
} & BasePropsType;

export type FieldLabelType = FC<FieldLabelPropsType>;

const FieldLabel = ({ full = true, children, className }: FieldLabelPropsType) => {
  const classes = formatDynamicClasses(['label', isClassExist(className, className!)]);

  const baseLabel = <label className={classes}>{children}</label>;

  if (full === true) {
    return <div className='field-label'>{baseLabel}</div>;
  }

  return baseLabel;
};

export default FieldLabel;
