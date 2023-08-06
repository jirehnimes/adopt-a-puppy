import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FormInputCheckboxes } from '@/components/common';

import styles from './filter-checkboxes-vaccinated.module.sass';

type FilterCheckboxesVaccinatedPropsType = {
  model: UseFormRegisterReturn<any>;
};

const FilterCheckboxesVaccinated = ({ model }: FilterCheckboxesVaccinatedPropsType) => {
  return (
    <FormInputCheckboxes
      label={<FormInputCheckboxes.Label full={false}>Is Vaccinated?</FormInputCheckboxes.Label>}
      className={styles['filter-checkboxes-vaccinated']}
    >
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

export default FilterCheckboxesVaccinated;
