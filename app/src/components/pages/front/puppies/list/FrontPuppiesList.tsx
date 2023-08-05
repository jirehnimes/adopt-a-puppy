import { useRouter } from 'next/navigation';
import React from 'react';

import { Button, Card, Columns, Media } from '@/components/common';
import { ageSentence } from '@/helpers/string.helpers';

import styles from './front-puppies-list.module.sass';

type FrontPuppiesListType = {
  puppies: any[];
};

const FrontPuppiesList = ({ puppies }: FrontPuppiesListType) => {
  const router = useRouter();

  return (
    <Columns className={styles['front-puppies-list']}>
      {puppies.map((puppy: any) => (
        <Columns.Column
          key={puppy?.id}
          size={6}
        >
          <Card
            className={styles.card}
            onClick={() => router.push(`/puppy/${puppy?.id}`)}
          >
            <Card.Image
              path={puppy?.photo_url}
              className={styles.image}
            />
            <Card.Content>
              <Media>
                <Media.Content>
                  <p
                    className='subtitle is-6'
                    style={{ margin: 0 }}
                  >
                    Hi I&apos;m
                  </p>
                  <div>
                    <span className='title is-4'>{puppy?.name},</span>
                    <span className='subtitle is-5'>&nbsp;{ageSentence(puppy?.age)}</span>
                  </div>
                  <p className='subtitle is-6'>{puppy?.breed}</p>
                </Media.Content>
              </Media>
              <Button
                variants={['rounded']}
                className='is-primary'
              >
                Adopt Me
              </Button>
            </Card.Content>
          </Card>
        </Columns.Column>
      ))}
    </Columns>
  );
};

export default FrontPuppiesList;
