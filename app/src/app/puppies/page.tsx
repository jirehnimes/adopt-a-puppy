import PuppyAPI from '@/api/puppy.api';
import { PageContainer } from '@/components/app';
import { FrontPuppiesFilterForm } from '@/components/pages';

import styles from './page-puppies.module.sass';

const PageHouse = async () => {
  const puppies = await PuppyAPI().findAll();

  return (
    <div id='page-puppies'>
      <PageContainer>
        <div className={`container ${styles.container}`}>
          <FrontPuppiesFilterForm />
        </div>
      </PageContainer>
    </div>
  );
};

export default PageHouse;
