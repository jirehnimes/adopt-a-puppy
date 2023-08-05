'use client';

import Image from 'next/image';
import { Suspense } from 'react';

import { PageContainer } from '@/components/app';
import { Button, Columns, Container, Title } from '@/components/common';
import { FrontAdoptionForm, FrontAdoptionPuppyProfile } from '@/components/pages';

import usePageAdoptionHook from './page-adoption.hook';
import styles from './page-adoption.module.sass';

type PageAdoptionPropsType = {
  params: { id: string };
};

const PageAdoption = ({ params }: PageAdoptionPropsType) => {
  const puppyID = params?.id;
  const { puppy } = usePageAdoptionHook(puppyID);

  return (
    <div id='page-adoption'>
      <PageContainer>
        <Container className={styles.container}>
          <Columns>
            <Columns.Column
              size={4}
              className={styles.profile}
            >
              <FrontAdoptionPuppyProfile puppy={puppy} />
            </Columns.Column>

            <Columns.Column
              size={8}
              className={styles['adoption-form']}
            >
              <Suspense fallback={<div></div>}>
                <FrontAdoptionForm puppy={puppy} />
              </Suspense>
            </Columns.Column>
          </Columns>
        </Container>
      </PageContainer>
    </div>
  );
};

export default PageAdoption;
