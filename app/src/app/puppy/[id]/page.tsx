'use client';

import { PageContainer } from '@/components/app';

type PagePuppyPropsType = {
  params: { id: string };
};

const PagePuppy = ({ params }: PagePuppyPropsType) => {
  console.log('PAGE PUPPY', params.id);

  return (
    <div id='page-puppy'>
      <PageContainer>
        <div className={`container`}>PUPPY</div>
      </PageContainer>
    </div>
  );
};

export default PagePuppy;
