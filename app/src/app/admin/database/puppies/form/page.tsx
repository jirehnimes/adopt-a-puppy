'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

import { Button, Columns, Field, Form, FormInput, FormInputSelect } from '@/components/common';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER, PUPPY_SIZE } from '@/consts/puppy.consts';
import {
  getFormErrorMessages,
  getRequiredErrorMessage,
  validateSelectRequired,
} from '@/helpers/form.helpers';

import useAdminDatabasePuppiesCreateHook from './admin-database-puppies-create.hook';

type PageAdminDatabasePuppiesFormPropsType = {
  children: ReactNode;
};

const PageAdminDatabasePuppiesFormCreate = ({
  children,
}: PageAdminDatabasePuppiesFormPropsType) => {
  const router = useRouter();
  const { form } = useAdminDatabasePuppiesCreateHook();
  const {
    formState: { errors },
    register,
    reset,
    submitForm,
  } = form;

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
    <div>
      <Columns flex>
        <Columns.Column size={8}>
          <Form onSubmit={submitForm}>
            <Columns flex>
              <Columns.Column size={6}>
                <FormInput
                  label='Name'
                  model={register('name', {
                    required: getRequiredErrorMessage('Name'),
                    minLength: { value: 2, message: 'Minimum length is 2.' },
                    maxLength: { value: 200, message: 'Maximum length is 200.' },
                    pattern: {
                      value: /^[A-z, ]*$/,
                      message: 'Name field value format is invalid.',
                    },
                  })}
                  input={{
                    placeholder: "What's the name of the cute puppy?",
                  }}
                  message={getFormErrorMessages(errors?.name?.message)}
                  status={!!errors?.name === true ? 'danger' : undefined}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInput
                  label='Age (in years)'
                  model={register('age', { required: getRequiredErrorMessage('Age') })}
                  input={{ type: 'number', placeholder: 'How old is the puppy?' }}
                  message={getFormErrorMessages(errors?.age?.message)}
                  status={!!errors?.age === true ? 'danger' : undefined}
                />
              </Columns.Column>
            </Columns>

            <Columns flex>
              <Columns.Column size={6}>
                <FormInputSelect
                  label='Gender'
                  options={formatGenderOptions()}
                  model={register('gender', {
                    validate: (_value) =>
                      validateSelectRequired(_value) || getRequiredErrorMessage('Gender'),
                  })}
                  message={getFormErrorMessages(errors?.gender?.message)}
                  status={!!errors?.gender === true ? 'danger' : undefined}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInputSelect
                  label='Size'
                  options={formatSizeOptions()}
                  model={register('size', {
                    validate: (_value) =>
                      validateSelectRequired(_value) || getRequiredErrorMessage('Size'),
                  })}
                  message={getFormErrorMessages(errors?.size?.message)}
                  status={!!errors?.size === true ? 'danger' : undefined}
                />
              </Columns.Column>
            </Columns>

            <Columns flex>
              <Columns.Column size={6}>
                <FormInputSelect
                  label='Is Vaccinated?'
                  options={formatBooleanOptions()}
                  model={register('is_vaccinated', {
                    required: getRequiredErrorMessage('Is vaccinated'),
                  })}
                  message={getFormErrorMessages(errors?.is_vaccinated?.message)}
                  status={!!errors?.is_vaccinated === true ? 'danger' : undefined}
                />
              </Columns.Column>

              <Columns.Column size={6}>
                <FormInputSelect
                  label='Is Neutered?'
                  options={formatBooleanOptions()}
                  model={register('is_neutered', {
                    required: getRequiredErrorMessage('Is neutered'),
                  })}
                  message={getFormErrorMessages(errors?.is_neutered?.message)}
                  status={!!errors?.is_neutered === true ? 'danger' : undefined}
                />
              </Columns.Column>
            </Columns>

            <FormInput
              label='Photo URL'
              input={{
                placeholder: 'Enter an image URL of the puppy',
              }}
              model={register('photo_url', {
                required: getRequiredErrorMessage('Photo URL'),
              })}
              message={getFormErrorMessages(errors?.photo_url?.message)}
              status={!!errors?.photo_url === true ? 'danger' : undefined}
            />

            <FormInput
              label='Breed'
              input={{
                placeholder: 'What is the breed?',
              }}
              model={register('breed', {
                required: getRequiredErrorMessage('Breed'),
              })}
              message={getFormErrorMessages(errors?.breed?.message)}
              status={!!errors?.breed === true ? 'danger' : undefined}
            />

            <FormInput
              label='Traits'
              input={{
                placeholder: "Enter puppy's traits separated by a comma (,)",
              }}
              model={register('traits', {
                required: getRequiredErrorMessage('Traits'),
              })}
              message={getFormErrorMessages(errors?.traits?.message)}
              status={!!errors?.traits === true ? 'danger' : undefined}
            />

            <Form.Actions>
              <Columns flex>
                <Columns.Column size={4}>
                  <Field.Control>
                    <Button
                      type='submit'
                      className='is-primary'
                      fullWidth
                    >
                      Register Puppy
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
                      variants={['outlined']}
                      fullWidth
                      onClick={() => router.back()}
                    >
                      Go Back
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

export default PageAdminDatabasePuppiesFormCreate;
