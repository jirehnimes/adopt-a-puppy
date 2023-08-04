import { FrontHomeHero, PageContainer } from '@/components/app';

import styles from './page-home.module.sass';

const PageHome = () => {
  return (
    <div
      id='page-home'
      className={styles['page-home']}
    >
      <PageContainer>
        <FrontHomeHero />
      </PageContainer>
    </div>
  );
};

export default PageHome;
