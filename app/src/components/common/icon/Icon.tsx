import {
  IconDefinition,
  Icon as IconType,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type IconPropsType = {
  icon: IconDefinition | IconType;
};

const Icon = ({ icon }: IconPropsType) => {
  return (
    <span className='icon'>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default Icon;
