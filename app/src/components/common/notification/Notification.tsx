'use client';

import React, { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';

import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { formatDynamicClasses } from '@/helpers/common.helpers';

type NotificationPropsType = {
  children: ReactNode;
  status?: APP_COLOR_STYLE;
};

const Notification = forwardRef(({ children, status }: NotificationPropsType, ref) => {
  const classes = formatDynamicClasses(['notification', !!status === true ? `is-${status}` : '']);

  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const toggle = () => setIsDisplay(!isDisplay);

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  return (
    <div className={classes}>
      <button
        className='delete'
        onClick={toggle}
        style={{
          display: isDisplay === true ? 'block' : 'none',
        }}
      />
      {children}
    </div>
  );
});

Notification.displayName = 'Notification';

export default Notification;
