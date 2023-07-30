import React, { FC } from 'react';

type CardImagePropsType = {
  path?: string;
};

export type CardImageType = FC<CardImagePropsType>;

const CardImage = ({ path }: CardImagePropsType) => {
  return (
    <div className='card-image'>
      <figure className='image'>
        <img
          src={path}
          alt='image'
        />
      </figure>
    </div>
  );
};

export default CardImage;
