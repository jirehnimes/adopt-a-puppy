import React, { FormEventHandler } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  FilterCheckboxesGender,
  FilterCheckboxesNeutered,
  FilterCheckboxesVaccinated,
} from '@/components/app';
import { Button, Columns, Field, Form, FormInputSearch } from '@/components/common';
import { PuppyFilterType } from '@/types/puppy.types';

import styles from './front-puppies-filter-form.module.sass';

type FrontPuppiesFilterFormPropsType = {
  form: UseFormReturn<PuppyFilterType, any, undefined> & {
    submitFilters: FormEventHandler<HTMLFormElement>;
  };
};

const FrontPuppiesFilterForm = ({ form }: FrontPuppiesFilterFormPropsType) => {
  const { register, reset, submitFilters } = form;

  return (
    <div className={styles['front-puppies-filter-form']}>
      <Form onSubmit={submitFilters}>
        <Columns>
          <Columns.Column>
            <FormInputSearch
              showButton={false}
              model={register('search', { required: false, maxLength: 200 })}
            />
          </Columns.Column>
        </Columns>

        <Columns>
          <Columns.Column size={6}>
            <FilterCheckboxesGender model={register('gender', { required: false })} />
          </Columns.Column>
          <Columns.Column size={6}>
            <FilterCheckboxesVaccinated model={register('is_vaccinated', { required: false })} />
          </Columns.Column>
          <Columns.Column size={6}>
            <FilterCheckboxesNeutered model={register('is_neutered', { required: false })} />
          </Columns.Column>
        </Columns>

        <div className='form-action'>
          <Field
            advance={false}
            grouped
            groupAlign='centered'
          >
            <Columns flex>
              <Columns.Column size={6}>
                <Field.Control>
                  <Button
                    type='submit'
                    className='is-primary'
                    variants={['rounded']}
                    fullWidth
                  >
                    Find My Puppy
                  </Button>
                </Field.Control>
              </Columns.Column>

              <Columns.Column size={6}>
                <Field.Control>
                  <Button
                    variants={['outlined', 'rounded']}
                    fullWidth
                    onClick={() => reset()}
                  >
                    Reset
                  </Button>
                </Field.Control>
              </Columns.Column>
            </Columns>
          </Field>
        </div>
      </Form>
    </div>
  );
};

export default FrontPuppiesFilterForm;
