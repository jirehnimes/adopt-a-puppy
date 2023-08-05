import React, { ReactNode } from 'react';

import styles from './image-container.module.sass';

type ImageContainerPropsType = {
  children: ReactNode;
};

const ImageContainer = ({ children }: ImageContainerPropsType) => {
  return <div className={styles['image-container']}>{children}</div>;
};

export default ImageContainer;
