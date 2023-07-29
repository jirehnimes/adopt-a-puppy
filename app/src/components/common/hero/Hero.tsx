import React, { FC, ReactNode } from 'react';

import HeroSubtitle, { HeroSubtitleType } from './subtitle/HeroSubtitle';
import HeroTitle, { HeroTitleType } from './title/HeroTitle';

type HeroChildrenType = {
  Title: HeroTitleType;
  Subtitle: HeroSubtitleType;
};

type HeroPropsType = { children: ReactNode };

type HeroType = FC<HeroPropsType> & HeroChildrenType;

const Hero: HeroType = ({ children }: HeroPropsType) => {
  return (
    <section className='hero'>
      <div className='hero-body'>{children}</div>
    </section>
  );
};

Hero.Title = HeroTitle;
Hero.Subtitle = HeroSubtitle;

export default Hero;
