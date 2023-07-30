import React from 'react';

import { Button, Checkbox, Field, Form, FormInputSearch } from '@/components/common';

const FrontPuppiesFilterForm = () => {
  return (
    <Form>
      <FormInputSearch showButton={false} />
      <Checkbox>TEST</Checkbox>

      <div className='form-action'>
        <Field
          advance={false}
          grouped
          groupAlign='centered'
        >
          <Field.Control>
            <Button
              type='submit'
              className='is-primary'
              variants={['rounded']}
            >
              Find My Puppy
            </Button>
          </Field.Control>
          <Field.Control>
            <Button variants={['outlined', 'rounded']}>Clear</Button>
          </Field.Control>
        </Field>
      </div>
    </Form>
  );
};

export default FrontPuppiesFilterForm;
