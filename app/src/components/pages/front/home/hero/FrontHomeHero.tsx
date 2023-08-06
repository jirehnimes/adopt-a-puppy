import Image from 'next/image';
import React from 'react';

import HeroSVG from '@/assets/images/home-hero.svg';
import { ImageLogo } from '@/components/app';
import { Container, Hero, Title } from '@/components/common';

import styles from './front-home-hero.module.sass';

const FrontHomeHero = () => {
  return (
    <Hero className='is-medium'>
      <Container className={`is-max-desktop ${styles.container}`}>
        <div className={styles['content-container']}>
          <ImageLogo className={styles.logo} />
          <Title
            size={5}
            align='left'
          >
            Every puppy deserves a family
          </Title>
        </div>

        <div className={styles['image-container']}>
          <Image
            priority
            src={HeroSVG}
            alt='Hero image'
            className={styles.image}
          />
        </div>
      </Container>
    </Hero>
  );
};

export default FrontHomeHero;
