import Link from 'next/link';
import React from 'react';

import PuppyAPI from '@/api/puppy.api';
import { Button, Card, Columns, Media } from '@/components/common';
import { APP_ROUTES } from '@/consts/routes.consts';
import { ageSentence } from '@/helpers/string.helpers';

import styles from './front-home-recommendation-list.module.sass';

const FrontHomeRecommendationList = async () => {
  const puppies = await PuppyAPI().findAll({});
  const listPuppies = puppies.splice(0, 3);

  return (
    <Columns>
      {listPuppies.map((puppy: any) => (
        <Columns.Column
          key={puppy?.id}
          size={4}
        >
          <Link href={APP_ROUTES.PUPPY_PROFILE(puppy?.id)}>
            <Card className={styles.card}>
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
          </Link>
        </Columns.Column>
      ))}
    </Columns>
  );
};

export default FrontHomeRecommendationList;
