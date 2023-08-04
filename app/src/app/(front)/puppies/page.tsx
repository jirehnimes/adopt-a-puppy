'use client';

import { PageContainer } from '@/components/app';
import { FrontPuppiesFilterForm, FrontPuppiesList } from '@/components/pages';

import usePagePuppiesHook from './page-puppies.hook';
import styles from './page-puppies.module.sass';

const PagePuppies = () => {
  const { formFilters, puppies } = usePagePuppiesHook();

  return (
    <div id='page-puppies'>
      <PageContainer>
        <div className={`container ${styles.container}`}>
          <FrontPuppiesFilterForm form={formFilters} />
          <FrontPuppiesList puppies={puppies} />
        </div>
      </PageContainer>
    </div>
  );
};

export default PagePuppies;
