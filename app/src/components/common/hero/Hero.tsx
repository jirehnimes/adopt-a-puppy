import React, { FC, ReactNode } from 'react';

import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { formatDynamicClasses } from '@/helpers/common.helpers';

import HeroSubtitle, { HeroSubtitleType } from './subtitle/HeroSubtitle';
import HeroTitle, { HeroTitleType } from './title/HeroTitle';

type HeroChildrenType = {
  Title: HeroTitleType;
  Subtitle: HeroSubtitleType;
};

type HeroPropsType = { children: ReactNode; color?: APP_COLOR_STYLE };

type HeroType = FC<HeroPropsType> & HeroChildrenType;

const Hero: HeroType = ({ children, color }: HeroPropsType) => {
  const classes = formatDynamicClasses(['hero', !!color === true ? `is-${color}` : '']);

  return (
    <section className={classes}>
      <div className='hero-body'>{children}</div>
    </section>
  );
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;

export default Hero;
