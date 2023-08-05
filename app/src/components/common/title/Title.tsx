'use client';

import { ReactNode } from 'react';

import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

import styles from './title.module.sass';

type TitlePropsType = {
  children: ReactNode;
  size?: number;
  subtitle?: boolean;
  align?: 'left' | 'right' | 'center';
  color?: APP_COLOR_STYLE;
} & BasePropsType;

const Title = ({
  // prettier-ignore
  children,
  size,
  subtitle,
  align,
  color,
  className,
}: TitlePropsType) => {
  const _size = !!size === true ? size : !!subtitle === true ? 5 : 3;

  const classes = formatDynamicClasses([
    isClassExist(subtitle, 'subtitle', 'title'),
    isClassExist(className, className!),
    isClassExist(color, `is-${color}`),
  ]);

  let component = <h1 className={`${classes} is-1`}>{children}</h1>;
  if (_size === 6) component = <h6 className={`${classes} is-6`}>{children}</h6>;
  if (_size === 5) component = <h5 className={`${classes} is-5`}>{children}</h5>;
  if (_size === 4) component = <h4 className={`${classes} is-4`}>{children}</h4>;
  if (_size === 3) component = <h3 className={`${classes} is-3`}>{children}</h3>;
  if (_size === 2) component = <h2 className={`${classes} is-2`}>{children}</h2>;

  const containerClasses = formatDynamicClasses([
    `title-container ${styles['title-container']}`,
    isClassExist(align, `is-flex is-justify-content-${align}`),
  ]);

  return <div className={containerClasses}>{component}</div>;
};

export default Title;
