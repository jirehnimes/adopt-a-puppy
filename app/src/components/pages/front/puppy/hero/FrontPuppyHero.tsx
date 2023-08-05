import React from 'react';

import { Hero } from '@/components/common';
import { APP_COLOR_STYLE } from '@/consts/common.consts';

type FrontPuppyHeroType = {
  name?: string;
  breed?: string;
};

const FrontPuppyHero = ({ name, breed }: FrontPuppyHeroType) => {
  return (
    <Hero color={APP_COLOR_STYLE.PRIMARY}>
      <Hero.Subtitle>Hi I&apos;m</Hero.Subtitle>
      <Hero.Title>{name || 'Puppy'}</Hero.Title>
      <Hero.Subtitle>{breed || 'Breed'}</Hero.Subtitle>
    </Hero>
  );
};

export default FrontPuppyHero;
