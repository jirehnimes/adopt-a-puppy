import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType, ColorPropsType } from '@/types/component.types';

const TagVariantClass = {
  normal: '',
  outlined: 'is-rounded',
};

type TagPropsType = {
  children: ReactNode;
  variant?: keyof typeof TagVariantClass;
} & BasePropsType &
  ColorPropsType;

export type TagType = FC<TagPropsType>;

const Tag: TagType = ({ children, className, color, variant }: TagPropsType) => {
  const classes = formatDynamicClasses([
    'tag',
    isClassExist(className, className!),
    isClassExist(color, `is-${color}`),
    isClassExist(variant, TagVariantClass[variant!]),
  ]);

  return <span className={classes}>{children}</span>;
};

export default Tag;
