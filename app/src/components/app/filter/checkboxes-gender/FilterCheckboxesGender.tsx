import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FormInputCheckboxes } from '@/components/common';
import { PUPPY_GENDER } from '@/consts/puppy.consts';

import styles from './filter-checkboxes-gender.module.sass';

type FilterCheckboxesGenderPropsType = {
  model: UseFormRegisterReturn<any>;
};

const FilterCheckboxesGender = ({ model }: FilterCheckboxesGenderPropsType) => {
  return (
    <FormInputCheckboxes
      label={<FormInputCheckboxes.Label full={false}>Gender</FormInputCheckboxes.Label>}
      className={styles['filter-checkboxes-gender']}
    >
      <FormInputCheckboxes.Checkbox
        model={model}
        value={PUPPY_GENDER.MALE}
      >
        Male
      </FormInputCheckboxes.Checkbox>
      <FormInputCheckboxes.Checkbox
        model={model}
        value={PUPPY_GENDER.FEMALE}
      >
        Female
      </FormInputCheckboxes.Checkbox>
    </FormInputCheckboxes>
  );
};

export default FilterCheckboxesGender;
