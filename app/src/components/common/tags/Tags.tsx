import React, { FC, ReactNode } from 'react';

import { formatDynamicClasses } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

import Tag, { TagType } from '../tag/Tag';

type TagsChildrenType = {
  Tag: TagType;
};

type TagsPropsType = {
  children: ReactNode;
  advance?: boolean;
} & BasePropsType;

type TagsType = FC<TagsPropsType> & TagsChildrenType;

const Tags: TagsType = ({ children, className, advance = false }: TagsPropsType) => {
  const classes = formatDynamicClasses([
    'tags',
    !!className === true ? className! : '',
    advance === true ? 'has-addons' : '',
  ]);

  return <div className={classes}>{children}</div>;
};

Tags.Tag = Tag;

export default Tags;
