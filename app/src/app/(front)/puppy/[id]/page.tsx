'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import defaultImage from '@/assets/images/logo-color.png';
import { PageContainer } from '@/components/app';
import { Button, Columns, Container, Tags } from '@/components/common';
import { FrontPuppyHero } from '@/components/pages';
import { APP_COLOR_STYLE } from '@/consts/common.consts';
import { APP_ROUTES } from '@/consts/routes.consts';
import { titleCase } from '@/helpers/string.helpers';

import usePagePuppyHook from './page-puppy.hook';
import styles from './page-puppy.module.sass';

type PagePuppyPropsType = {
  params: { id: string };
};

const PagePuppy = ({ params }: PagePuppyPropsType) => {
  const puppyID = params?.id;
  const router = useRouter();
  const { puppy } = usePagePuppyHook(params.id);

  const goToAdoption = () => router.push(APP_ROUTES.ADOPTION_FORM(puppyID));
  const goBackToList = () => router.push(APP_ROUTES.PUPPY_LIST);

  return (
    <div id='page-puppy'>
      <PageContainer>
        <Container className={styles.container}>
          <Columns className={styles.header}>
            <Columns.Column size={4}>
              <div className={styles['image-container']}>
                <Image
                  src={puppy?.photo_url || defaultImage}
                  width={0}
                  height={0}
                  alt='Puppy profile picture'
                  unoptimized
                  fill
                />
              </div>
            </Columns.Column>

            <Columns.Column size={8}>
              <FrontPuppyHero
                name={puppy?.name}
                breed={puppy?.breed}
              />
            </Columns.Column>
          </Columns>

          <Columns>
            <Columns.Column size={4}>
              <Button
                className='is-primary mt-2 mb-4'
                variants={['rounded']}
                fullWidth
                onClick={goToAdoption}
              >
                Adopt Me
              </Button>

              <Button
                className='is-primary'
                variants={['outlined', 'rounded']}
                fullWidth
                onClick={goBackToList}
              >
                Go Back
              </Button>
            </Columns.Column>

            <Columns.Column size={8}>
              <Tags className='mt-2'>
                {!!puppy?.is_vaccinated === true && (
                  <Tags.Tag color={APP_COLOR_STYLE.PRIMARY}>Vaccinated</Tags.Tag>
                )}
                {!!puppy?.is_neutered === true && (
                  <Tags.Tag color={APP_COLOR_STYLE.PRIMARY}>Neutered</Tags.Tag>
                )}
              </Tags>

              <div className='content'>
                <h2>Other Details</h2>
                <p className='mb-1'>
                  <b>Age:</b> {puppy?.age || 0} year/s old.
                </p>
                <p className='mb-1'>
                  <b>Gender:</b> {titleCase(puppy?.gender) || 'N/A'}
                </p>

                <hr />

                <h1>Hello World</h1>
                <p>
                  Lorem ipsum
                  <sup>
                    <a>[1]</a>
                  </sup>{' '}
                  dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                  eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut
                  vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis
                  neque. Sub<sub>script</sub> works as well!
                </p>
                <h2>Second level</h2>
                <p>
                  Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
                  Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium
                  urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus
                  dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
                </p>
                <ul>
                  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                  <li>Ut non enim metus.</li>
                </ul>
              </div>

              <Button
                className='is-primary my-4'
                variants={['rounded']}
                fullWidth
                onClick={goToAdoption}
              >
                Adopt Me
              </Button>

              <Button
                className='is-primary'
                variants={['outlined', 'rounded']}
                fullWidth
                onClick={goBackToList}
              >
                Go Back
              </Button>
            </Columns.Column>
          </Columns>
        </Container>
      </PageContainer>
    </div>
  );
};

export default PagePuppy;
