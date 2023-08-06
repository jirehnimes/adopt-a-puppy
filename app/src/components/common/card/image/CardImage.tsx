import Image from 'next/image';
import React, { FC } from 'react';

import defaultImage from '@/assets/images/logo-color.webp';

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
          src={path || defaultImage}
          width={0}
          height={0}
          alt={alt}
          unoptimized
          fill
          style={{ objectFit: 'cover' }}
        />
      </figure>
    </div>
  );
};

export default CardImage;
