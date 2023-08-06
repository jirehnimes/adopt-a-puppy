import React, { FC, ReactNode } from 'react';

import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { formatDynamicClasses, isClassExist } from '@/helpers/common.helpers';
import { BasePropsType } from '@/types/component.types';

import HeroSubtitle, { HeroSubtitleType } from './subtitle/HeroSubtitle';
import HeroTitle, { HeroTitleType } from './title/HeroTitle';

type HeroChildrenType = {
  Title: HeroTitleType;
  Subtitle: HeroSubtitleType;
};

type HeroPropsType = { children: ReactNode; color?: APP_COLOR_STYLE } & BasePropsType;

type HeroType = FC<HeroPropsType> & HeroChildrenType;

const Hero: HeroType = ({ children, color, className }: HeroPropsType) => {
  const classes = formatDynamicClasses([
    'hero',
    isClassExist(color, `is-${color}`),
    isClassExist(className, className!),
  ]);

  return (
    <section className={classes}>
      <div className='hero-body'>{children}</div>
    </section>
  );
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;

export default Hero;
