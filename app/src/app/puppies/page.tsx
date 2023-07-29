import { PageContainer } from '@/components/app';
import { Button, Checkbox, Field, Form, FormInputSearch } from '@/components/common';

import styles from './page-puppies.module.sass';

const PageHouse = () => {
  return (
    <div id='page-puppies'>
      <PageContainer>
        <div className={`container ${styles.container}`}>
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
        </div>
      </PageContainer>
    </div>
  );
};

export default PageHouse;
