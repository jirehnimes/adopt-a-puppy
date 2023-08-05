'use client';

import { PageContainer } from '@/components/app';
import { FrontHomeHero, FrontHomeRecommendation } from '@/components/pages';

import styles from './page-home.module.sass';

const PageHome = () => {
  return (
    <div
      id='page-home'
      className={styles['page-home']}
    >
      <PageContainer>
        <FrontHomeHero />
        <FrontHomeRecommendation />
      </PageContainer>
    </div>
  );
};

export default PageHome;
