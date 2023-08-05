import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.png';
import { Footer, Title } from '@/components/common';
import { APP_COLOR_STYLE } from '@/consts/common.consts';

import styles from './FrontFooter.module.sass';

const FrontFooter = () => {
  return (
    <Footer className={styles.footer}>
      <Image
        src={logo}
        width={200}
        alt='logo'
        className='mb-4'
      />
      <Title
        size={6}
        align='left'
        color={APP_COLOR_STYLE.LIGHT}
      >
        Developed by Jireh Nimes, 2023
      </Title>
      <Title
        size={6}
        align='left'
        subtitle
        color={APP_COLOR_STYLE.LIGHT}
      >
        This is not a real website.
      </Title>
    </Footer>
  );
};

export default FrontFooter;
