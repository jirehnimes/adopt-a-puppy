'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

import FormSuccessSVG from '@/assets/images/form-success.svg';
import { PageContainer } from '@/components/app';
import { Button, Columns, Container, FormActions, Title } from '@/components/common';
import { FrontAdoptionForm, FrontAdoptionPuppyProfile } from '@/components/pages';
import { APP_COLOR_STYLE } from '@/consts/common.consts';

import { APP_ROUTES } from '../../../../../consts/routes.consts';
import usePageAdoptionSuccessHook from './page-adoption-success.hook';
import styles from './page-adoption-success.module.sass';

type PageAdoptionPropsType = {
  params: { id: string };
};

const PageAdoptionSuccess = ({ params }: PageAdoptionPropsType) => {
  const puppyID = params?.id;
  const { puppy } = usePageAdoptionSuccessHook(puppyID);

  return (
    <div id='page-adoption-success'>
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
              className={styles.success}
            >
              <div>
                <Image
                  priority
                  src={FormSuccessSVG}
                  alt='Success image'
                />
                <Title color={APP_COLOR_STYLE.PRIMARY}>CONGRATULATIONS!</Title>
                <Title subtitle>Thank you for adopting {puppy?.name || 'Puppy'}!</Title>
                <hr />
                <Title
                  subtitle
                  size={6}
                >
                  Someone will contact you for verification using the information you sent to us in
                  order to finalize the adoption process.
                </Title>

                <FormActions>
                  <Link href={APP_ROUTES.PUPPY_LIST}>
                    <Button
                      variants={['rounded']}
                      className='is-primary'
                      fullWidth
                    >
                      Go Back To List
                    </Button>
                  </Link>

                  <Link href={APP_ROUTES.HOME}>
                    <Button
                      variants={['rounded', 'outlined']}
                      className='is-primary'
                      fullWidth
                    >
                      Go To Homepage
                    </Button>
                  </Link>
                </FormActions>
              </div>
            </Columns.Column>
          </Columns>
        </Container>
      </PageContainer>
    </div>
  );
};

export default PageAdoptionSuccess;
