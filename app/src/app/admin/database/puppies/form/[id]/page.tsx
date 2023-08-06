'use client';

import { useRouter } from 'next/navigation';

import { Button, Columns, Field, Form, FormInput, FormInputSelect } from '@/components/common';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';

import useAdminDatabasePuppiesUpdateHook from './admin-database-puppies-update.hook';

const PageAdminDatabasePuppiesFormUpdate = () => {
  const router = useRouter();
  const { form } = useAdminDatabasePuppiesUpdateHook();
  const { register, reset, submitForm } = form;

  const formatGenderOptions = () => [
    { label: 'Select a gender', value: 'null' },
    ...Object.values(PUPPY_GENDER).map((gender: PUPPY_GENDER) => ({
      label: gender,
      value: gender,
    })),
  ];

  const formatSizeOptions = () => [
    { label: 'Select a size', value: 'null' },
    ...Object.values(PUPPY_SIZE).map((size: PUPPY_SIZE) => ({
      label: size,
      value: size,
    })),
  ];

  const formatBooleanOptions = () => [
    ...Object.values(BOOLEAN_STRING).map((value: BOOLEAN_STRING) => ({
      label: value,
      value: value === BOOLEAN_STRING.TRUE,
    })),
  ];

  return (
    <div className='mt-6'>
      <Columns flex>
        <Columns.Column size={8}>
          <Form onSubmit={submitForm}>
            <Columns flex>
              <Columns.Column size={6}>
                <FormInput
                  label='Name'
                  model={register('name', { required: true })}
                  input={{
                    placeholder: "What's the name of the cute puppy?",
                  }}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInput
                  label='Age (in years)'
                  model={register('age', { required: true })}
                  input={{ type: 'number', placeholder: 'How old is the puppy?' }}
                />
              </Columns.Column>
            </Columns>

            <Columns flex>
              <Columns.Column size={6}>
                <FormInputSelect
                  label='Gender'
                  options={formatGenderOptions()}
                  model={register('gender', { required: true })}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInputSelect
                  label='Size'
                  options={formatSizeOptions()}
                  model={register('size', { required: true })}
                />
              </Columns.Column>
            </Columns>

            <Columns flex>
              <Columns.Column size={6}>
                <FormInputSelect
                  label='Is Vaccinated?'
                  options={formatBooleanOptions()}
                  model={register('is_vaccinated', { required: true })}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInputSelect
                  label='Is Neutered?'
                  options={formatBooleanOptions()}
                  model={register('is_neutered', { required: true })}
                />
              </Columns.Column>
            </Columns>

            <FormInput
              label='Photo URL'
              model={register('photo_url', { required: true })}
              input={{
                placeholder: 'Enter an image URL of the puppy',
              }}
            />

            <FormInput
              label='Breed'
              model={register('breed', { required: true })}
              input={{
                placeholder: 'What is the breed?',
              }}
            />

            <FormInput
              label='Traits'
              model={register('traits', { required: true })}
              input={{
                placeholder: "Enter puppy's traits separated by a comma (,)",
              }}
            />

            <Form.Actions>
              <Columns flex>
                <Columns.Column size={4}>
                  <Field.Control>
                    <Button
                      variants={['outlined']}
                      fullWidth
                      onClick={() => router.back()}
                    >
                      Go Back
                    </Button>
                  </Field.Control>
                </Columns.Column>

                <Columns.Column size={4}>
                  <Field.Control>
                    <Button
                      variants={['outlined']}
                      fullWidth
                      onClick={() => reset()}
                    >
                      Clear
                    </Button>
                  </Field.Control>
                </Columns.Column>

                <Columns.Column size={4}>
                  <Field.Control>
                    <Button
                      type='submit'
                      className='is-primary'
                      fullWidth
                    >
                      Update Puppy
                    </Button>
                  </Field.Control>
                </Columns.Column>
              </Columns>
            </Form.Actions>
          </Form>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default PageAdminDatabasePuppiesFormUpdate;
