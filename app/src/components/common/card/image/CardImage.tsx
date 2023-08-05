import Image from 'next/image';
import React, { FC } from 'react';

import DEFAULT_IMAGE from '@/assets/images/logo-color.webp';

type CardImagePropsType = {
  path?: string;
  alt?: string;
  className?: string;
};

export type CardImageType = FC<CardImagePropsType>;

const CardImage = ({ path, alt = 'Image', className = '' }: CardImagePropsType) => {
  const cardImageClass = `card-image ${className}`;

  return (
    <div className={cardImageClass}>
      <figure className='image'>
        <Image
          src={path || DEFAULT_IMAGE}
          width={0}
          height={0}
          alt={alt}
          unoptimized
        />
      </figure>
    </div>
  );
};

export default CardImage;
