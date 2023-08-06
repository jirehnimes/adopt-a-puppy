import React, { ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

import styles from './image-container.module.sass';

type ImageContainerPropsType = {
  children: ReactNode;
} & BasePropsType;

const ImageContainer = ({ children, className }: ImageContainerPropsType) => {
  const classes = formatDynamicClasses([
    styles['image-container'],
    isClassExist(className, className!),
  ]);

  return <div className={classes}>{children}</div>;
};

export default ImageContainer;
