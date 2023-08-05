'use client';

import { Suspense } from 'react';

import { PageContainer } from '@/components/app';
import { Container, Loader } from '@/components/common';
import { FrontPuppiesFilterForm, FrontPuppiesList } from '@/components/pages';

import usePagePuppiesHook from './page-puppies.hook';
import styles from './page-puppies.module.sass';

const PagePuppies = () => {
  const { formFilters, puppies } = usePagePuppiesHook();

  return (
    <div id='page-puppies'>
      <PageContainer>
        <Container className={styles.container}>
          <FrontPuppiesFilterForm form={formFilters} />
          <Suspense fallback={<Loader />}>
            <FrontPuppiesList puppies={puppies} />
          </Suspense>
        </Container>
      </PageContainer>
    </div>
  );
};

export default PagePuppies;
