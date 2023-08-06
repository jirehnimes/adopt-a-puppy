import Image from 'next/image';
import React from 'react';

import logo from '@/assets/images/logo.webp';
import { BasePropsType } from '@/types/component.types';

type ImageLogoPropsType = BasePropsType;

const ImageLogo = ({ className }: ImageLogoPropsType) => {
  return (
    <Image
      src={logo}
      unoptimized
      alt='Adopt A Puppy Logo'
      className={className}
    />
  );
};

export default ImageLogo;
