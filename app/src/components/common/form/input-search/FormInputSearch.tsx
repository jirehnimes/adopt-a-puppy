'use client';

import { UseFormRegisterReturn } from 'react-hook-form';

import Button from '@/components/common/button';
import Field from '@/components/common/field';
import Input from '@/components/common/input';

type FormInputSearchPropsType = {
  model: UseFormRegisterReturn<any>;
  showButton?: boolean;
};

const FormInputSearch = ({ model, showButton = true }: FormInputSearchPropsType) => {
  const search = (e: any) => {
    e.preventDefault();
    console.log('Searching');
  };

  return (
    <Field>
      <Field.Control
        fullWidth
        hasIconsLeft
      >
        <Input
          placeholder='Search here'
          model={model}
        />
        <Field.Icon icon='user' />
      </Field.Control>

      {showButton && (
        <Field.Control>
          <Button
            className='is-primary'
            onClick={search}
          >
            Search
          </Button>
        </Field.Control>
      )}
    </Field>
  );
};

export default FormInputSearch;
