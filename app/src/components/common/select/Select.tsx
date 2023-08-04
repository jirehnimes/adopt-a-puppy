'use client';

import React, { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export type SelectOptionType = {
  value: any;
  label: ReactNode;
};

type SelectPropsType = {
  options: SelectOptionType[];
  model: UseFormRegisterReturn<any>;
  status?: 'info' | 'success' | 'danger';
  fullWidth?: boolean;
};

const Select = ({ options, model, status, fullWidth = false }: SelectPropsType) => {
  const classes = [
    'select',
    !!status === true ? `is-${status}` : '',
    fullWidth === true ? 'is-fullwidth' : '',
  ]
    .join(' ')
    .trim();

  return (
    <div className={classes}>
      <select {...model}>
        {options.map((option: SelectOptionType) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
