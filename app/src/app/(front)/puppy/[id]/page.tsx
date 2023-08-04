'use client';

import Image from 'next/image';

import defaultImage from '@/assets/images/logo-color.png';
import { PageContainer } from '@/components/app';
import { Button, Columns } from '@/components/common';
import { FrontPuppyHero } from '@/components/pages';

import usePagePuppyHook from './page-puppy.hook';
import styles from './page-puppy.module.sass';

type PagePuppyPropsType = {
  params: { id: string };
};

const PagePuppy = ({ params }: PagePuppyPropsType) => {
  const { puppy } = usePagePuppyHook(params.id);

  return (
    <div id='page-puppy'>
      <PageContainer>
        <div className={`container ${styles.container}`}>
          <Columns>
            <Columns.Column size={4}>
              <Image
                src={puppy?.photo_url || defaultImage}
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                alt='Puppy profile picture'
              />
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
                className='is-primary'
                variants={['rounded']}
                fullWidth
              >
                Adopt Me
              </Button>
            </Columns.Column>

            <Columns.Column size={8}>
              <div className='content'>
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
                className='is-primary'
                variants={['rounded']}
                fullWidth
              >
                Adopt Me
              </Button>
            </Columns.Column>
          </Columns>
        </div>
      </PageContainer>
    </div>
  );
};

export default PagePuppy;
