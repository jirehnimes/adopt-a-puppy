import React, { ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

type FooterPropsType = {
  children: ReactNode;
} & BasePropsType;

const Footer = ({ children, className }: FooterPropsType) => {
  const classes = formatDynamicClasses(['footer', isClassExist(className, className!)]);

  return (
    <footer className={classes}>
      <div className='container'>{children}</div>
    </footer>
  );
};

export default Footer;
