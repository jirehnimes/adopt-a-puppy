import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button, Columns, Field, Form, FormInputTextarea, Icon, Title } from '@/components/common';
import FormInput from '@/components/common/form/input';
import { APP_COLOR_STYLE } from '@/consts/common.consts';
import {
  getFormErrorMessages,
  getMaxLengthErrorMessage,
  getMinLengthErrorMessage,
  getPatternErrorMessage,
  getRequiredErrorMessage,
} from '@/helpers/form.helpers';
import { PuppyProfileType } from '@/types/puppy.types';

import useFrontAdoptionFormHook from './front-adoption-form.hook';

type FrontAdoptionFormPropsType = {
  puppy: PuppyProfileType;
};

const FrontAdoptionForm = ({ puppy }: FrontAdoptionFormPropsType) => {
  const router = useRouter();
  const { FULL_NAME_FIELD, EMAIL_FIELD, MOBILE_FIELD, REMARKS_FIELD, form } =
    useFrontAdoptionFormHook(puppy);
  const {
    formState: { errors },
    register,
    reset,
    submitForm,
  } = form;

  return (
    <Form onSubmit={submitForm}>
      <Title
        align='left'
        color={APP_COLOR_STYLE.PRIMARY}
      >
        ADOPTION FORM
      </Title>

      <hr />

      <Columns>
        <Columns.Column>
          <FormInput
            label={FULL_NAME_FIELD}
            model={register('full_name', {
              required: getRequiredErrorMessage(FULL_NAME_FIELD),
              minLength: { value: 2, message: getMinLengthErrorMessage(FULL_NAME_FIELD, 2) },
              maxLength: { value: 200, message: getMaxLengthErrorMessage(FULL_NAME_FIELD, 200) },
              pattern: {
                value: /^[A-z, ]*$/,
                message: getPatternErrorMessage(FULL_NAME_FIELD),
              },
            })}
            input={{
              placeholder: 'Enter your full name here',
            }}
            message={getFormErrorMessages(errors?.full_name?.message)}
            status={!!errors?.full_name === true ? 'danger' : undefined}
          />

          <FormInput
            label={EMAIL_FIELD}
            model={register('email', {
              required: getRequiredErrorMessage(EMAIL_FIELD),
            })}
            input={{
              type: 'email',
              placeholder: 'Enter your email address here',
            }}
            message={getFormErrorMessages(errors?.email?.message)}
            status={!!errors?.email === true ? 'danger' : undefined}
          />

          <FormInput
            label={MOBILE_FIELD}
            model={register('mobile', {
              required: getRequiredErrorMessage(MOBILE_FIELD),
            })}
            input={{
              placeholder: 'Enter your mobile number here',
            }}
            message={getFormErrorMessages(errors?.mobile?.message)}
            status={!!errors?.mobile === true ? 'danger' : undefined}
          />

          <FormInputTextarea
            label={REMARKS_FIELD}
            model={register('remarks')}
            input={{
              placeholder: 'Enter some remarks if any.',
            }}
            message={getFormErrorMessages(errors?.remarks?.message)}
            status={!!errors?.remarks === true ? 'danger' : undefined}
          />

          <Form.Actions>
            <Field.Control>
              <Button
                type='submit'
                className='is-primary'
                fullWidth
              >
                <Icon icon={faHeart} />
                <span>Adopt {puppy?.name || 'Puppy'}</span>
              </Button>
            </Field.Control>

            <Field.Control>
              <Button
                variants={['outlined']}
                fullWidth
                onClick={() => reset()}
              >
                Clear
              </Button>
            </Field.Control>

            <Field.Control>
              <Button
                variants={['outlined']}
                fullWidth
                onClick={() => router.back()}
              >
                Go Back
              </Button>
            </Field.Control>
          </Form.Actions>
        </Columns.Column>
      </Columns>
    </Form>
  );
};

export default FrontAdoptionForm;
