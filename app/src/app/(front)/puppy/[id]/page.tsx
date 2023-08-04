'use client';

import { PageContainer } from '@/components/app';
import { Columns } from '@/components/common';

import styles from './page-puppy.module.sass';

type PagePuppyPropsType = {
  params: { id: string };
};

const PagePuppy = ({ params }: PagePuppyPropsType) => {
  console.log('PAGE PUPPY', params.id);

  return (
    <div id='page-puppy'>
      <PageContainer>
        <div className={`container ${styles.container}`}>
          <Columns flex>
            <Columns.Column size={4}>PROFILE</Columns.Column>

            <Columns.Column size={8}>PROFILE</Columns.Column>
          </Columns>
        </div>
      </PageContainer>
    </div>
  );
};

export default PagePuppy;
