import React, { ReactNode } from 'react';

import { Box } from '@/components/common';

import styles from './admin-box.module.sass';

type AdminBoxPropsType = {
  children: ReactNode;
};

const AdminBox = ({ children }: AdminBoxPropsType) => {
  return <Box className={styles['admin-box']}>{children}</Box>;
};

export default AdminBox;
