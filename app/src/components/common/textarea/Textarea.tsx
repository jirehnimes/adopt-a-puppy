import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';

type TextareaPropsType = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  model?: UseFormRegisterReturn<any>;
  status?: 'info' | 'success' | 'danger';
};

const Textarea = ({ model, status, ...props }: TextareaPropsType) => {
  const classes = formatDynamicClasses(['textarea', isClassExist(status, `is-${status}`)]);
  return (
    <textarea
      className={classes}
      {...model}
      {...props}
    />
  );
};

export default Textarea;
