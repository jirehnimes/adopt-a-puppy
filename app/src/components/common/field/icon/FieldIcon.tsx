import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

import styles from './field-icon.module.sass';

type FieldIconPropsType = {
  icon: string;
  position?: 'left' | 'right';
};

export type FieldIconType = FC<FieldIconPropsType>;

const FieldIcon = ({ icon, position = 'left' }: FieldIconPropsType) => {
  return (
    <span className={`icon ${styles['field-icon']} is-${position}`}>
      <FontAwesomeIcon icon={faSearch} />
    </span>
  );
};

export default FieldIcon;
