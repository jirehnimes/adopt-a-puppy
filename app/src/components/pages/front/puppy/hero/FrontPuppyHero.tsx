import React from 'react';

import { Hero } from '@/components/common';

type FrontPuppyHeroType = {
  name?: string;
  breed?: string;
};

const FrontPuppyHero = ({ name, breed }: FrontPuppyHeroType) => {
  return (
    <Hero>
      <Hero.Subtitle>Hi I&apos;m</Hero.Subtitle>
      <Hero.Title>{name || 'Puppy'}</Hero.Title>
      <Hero.Subtitle>{breed || 'Breed'}</Hero.Subtitle>
    </Hero>
  );
};

export default FrontPuppyHero;
