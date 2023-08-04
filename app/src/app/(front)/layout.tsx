import { ReactNode } from 'react';

import { FrontFooter, FrontNavbar } from '@/components/app';

import styles from './front-layout.module.sass';

type FrontLayoutPropsType = {
  children: ReactNode;
};

const FrontLayout = ({ children }: FrontLayoutPropsType) => {
  return (
    <div className={styles['front-layout']}>
      <FrontNavbar />
      {children}
      <FrontFooter />
    </div>
  );
};

export default FrontLayout;
