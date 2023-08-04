'use client';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { Button, Columns, Field, Form, Icon } from '@/components/common';

type ButtonDeletePropsType = {
  onSubmit: (id: any) => void;
  id?: any;
};

const ButtonDelete = ({ onSubmit, id = '' }: ButtonDeletePropsType) => {
  const dropdownID = `dropdown-menu-${id}`;

  const submitDelete = (e: any) => {
    e.preventDefault();
    onSubmit(id);
  };

  const closeDropdown = (e: any) => {
    e.preventDefault();
    const element = document.getElementById(dropdownID);
    if (!!element === true) element!.style.display = 'none';
  };

  const resetDropdown = (e: any) => {
    e.preventDefault();
    const element = document.getElementById(dropdownID);
    if (!!element === true) element!.style.display = '';
  };

  return (
    <div className='dropdown is-hoverable is-right'>
      <div className='dropdown-trigger'>
        <Button
          className='is-danger'
          aria-haspopup
          aria-controls={dropdownID}
        >
          <Icon icon={faTrash} />
        </Button>
      </div>
      <div
        id={dropdownID}
        className='dropdown-menu'
        role='menu'
      >
        <div className='dropdown-content'>
          <div className='dropdown-item'>Are you sure to delete?</div>
          <div className='dropdown-item'>
            <Form onSubmit={submitDelete}>
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
                        className='is-info'
                        fullWidth
                        size='small'
                      >
                        Yes
                      </Button>
                    </Field.Control>
                  </Columns.Column>

                  <Columns.Column size={6}>
                    <Field.Control>
                      <Button
                        fullWidth
                        size='small'
                        onClick={closeDropdown}
                        onBlur={resetDropdown}
                      >
                        Cancel
                      </Button>
                    </Field.Control>
                  </Columns.Column>
                </Columns>
              </Field>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonDelete;
