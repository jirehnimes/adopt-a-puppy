import React, { ReactNode } from 'react';

import { formatDynamicClasses } from '@/helpers/common.helpers';

type ContainerPropsType = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerPropsType) => {
  const classes = formatDynamicClasses(['container', !!className === true ? className! : '']);

  return <div className={classes}>{children}</div>;
};

export default Container;
