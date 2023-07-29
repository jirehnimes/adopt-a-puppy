'use client';

import Button from '@/components/common/button';
import Field from '@/components/common/field';
import Input from '@/components/common/input';

type FormInputSearchPropsType = {
  showButton?: boolean;
};

const FormInputSearch = ({ showButton = true }: FormInputSearchPropsType) => {
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
        <Input placeholder='Search here' />
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
