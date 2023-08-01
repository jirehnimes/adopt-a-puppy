import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FormInputCheckboxes } from '@/components/common';

import styles from './filter-checkboxes-neutered.module.sass';

type FilterCheckboxesNeuteredPropsType = {
  model: UseFormRegisterReturn<any>;
};

const FilterCheckboxesNeutered = ({ model }: FilterCheckboxesNeuteredPropsType) => {
  return (
    <FormInputCheckboxes className={styles['filter-checkboxes-neutered']}>
      <FormInputCheckboxes.Label full={false}>Is Neutered?</FormInputCheckboxes.Label>
      <FormInputCheckboxes.Checkbox
        model={model}
        value={true}
      >
        Yes
      </FormInputCheckboxes.Checkbox>
      <FormInputCheckboxes.Checkbox
        model={model}
        value={false}
      >
        No
      </FormInputCheckboxes.Checkbox>
    </FormInputCheckboxes>
  );
};

export default FilterCheckboxesNeutered;
