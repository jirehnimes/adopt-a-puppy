import React, { FC, ReactNode } from 'react';

import CardImage, { CardImageType } from './image/CardImage';

type CardChildrenType = {
  Image: CardImageType;
};

type CardPropsType = {
  children: ReactNode;
};

type CardType = FC<CardPropsType> & CardChildrenType;

const Card: CardType = ({ children }: CardPropsType) => {
  return <div className='card'>{children}</div>;
};

Card.Image = CardImage;

export default Card;
