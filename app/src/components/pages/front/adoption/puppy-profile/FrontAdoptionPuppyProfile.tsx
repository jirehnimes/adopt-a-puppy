import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import defaultImage from '@/assets/images/logo-color.png';
import { Button, ImageContainer, Title } from '@/components/common';
import { APP_ROUTES } from '@/consts/routes.consts';
import { PuppyProfileType } from '@/types/puppy.types';

import styles from './front-adoption-puppy-profile.module.sass';

type FrontAdoptionPuppyProfilePropsType = {
  puppy: PuppyProfileType;
};

const FrontAdoptionPuppyProfile = ({ puppy }: FrontAdoptionPuppyProfilePropsType) => {
  const router = useRouter();
  const goBackToProfile = () => router.push(APP_ROUTES.PUPPY_PROFILE(puppy.id!));

  return (
    <div className={styles['front-adoption-puppy-profile']}>
      <ImageContainer>
        <Image
          src={puppy?.photo_url || defaultImage}
          width={0}
          height={0}
          alt='Puppy profile picture'
          unoptimized
        />
      </ImageContainer>

      <Title
        align='left'
        className='title-name'
      >
        {puppy?.name}
      </Title>
      <Title
        size={6}
        subtitle
        align='left'
        className='title-breed'
      >
        {puppy?.breed}
      </Title>

      <Button
        className='mt-5 mb-4'
        variants={['outlined', 'rounded']}
        fullWidth
        onClick={goBackToProfile}
      >
        Go Back To Profile
      </Button>
    </div>
  );
};

export default FrontAdoptionPuppyProfile;
