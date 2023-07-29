import React, { ReactNode } from 'react';

import styles from './page-container.module.sass';

type PageContainerPropsType = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerPropsType) => {
  return (
    <div className={`page-container ${styles['page-container']}`}>
      {children}
    </div>
  );
};

export default PageContainer;
