import Image from 'next/image';
import React from 'react';

import HeroSVG from '@/assets/images/home-hero.svg';
import { Container, Hero } from '@/components/common';

const FrontHomeHero = () => {
  return (
    <Hero>
      <Container className={`is-max-desktop`}>
        <Hero.Title>Adopt A Puppy</Hero.Title>
        <Hero.Subtitle>Every puppy deserves a family</Hero.Subtitle>
        <Image
          priority
          src={HeroSVG}
          alt='Hero image'
        />
      </Container>
    </Hero>
  );
};

export default FrontHomeHero;
