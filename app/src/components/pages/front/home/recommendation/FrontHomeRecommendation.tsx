'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';

import { PageContainer } from '@/components/app';
import { Button, Container, Form, Loader, Title } from '@/components/common';
import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { APP_ROUTES } from '@/consts/routes.consts';

import styles from './front-home-recommendation.module.sass';
import FrontHomeRecommendationList from './list';

const FrontHomeRecommendation = () => {
  const router = useRouter();

  return (
    <div
      id='home-recommendation'
      className={styles['front-home-recommendation']}
    >
      <Container className={`is-max-desktop ${styles.container}`}>
        <Title
          color={APP_COLOR_STYLE.PRIMARY}
          size={1}
          className={styles.title}
        >
          MEET SOME OF YOUR FUTURE BUDDIES
        </Title>

        <div className={styles.list}>
          <FrontHomeRecommendationList />
        </div>

        <Link href={APP_ROUTES.PUPPY_LIST}>
          <Button
            variants={['rounded']}
            className='button-list is-primary'
            size='large'
            responsive
          >
            GET TO KNOW ALL PUPPIES
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default FrontHomeRecommendation;
