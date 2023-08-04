import React, { ReactNode } from 'react';

import styles from './admin-header-actions.module.sass';

type AdminHeaderActionsPropsType = {
  children: ReactNode;
};

const AdminHeaderActions = ({ children }: AdminHeaderActionsPropsType) => {
  return (
    <div className={`admin__header-actions ${styles['admin__header-actions']}`}>{children}</div>
  );
};

export default AdminHeaderActions;
