import React, { FC, MouseEventHandler, ReactNode } from 'react';

import CardContent, { CardContentType } from './content/CardContent';
import CardFooter, { CardFooterType } from './footer/CardFooter';
import CardImage, { CardImageType } from './image/CardImage';

type CardChildrenType = {
  Image: CardImageType;
  Content: CardContentType;
  Footer: CardFooterType;
};

type CardPropsType = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<any>;
};

type CardType = FC<CardPropsType> & CardChildrenType;

const Card: CardType = ({ children, className, onClick }: CardPropsType) => {
  const cardClass = `card ${className}`;

  return (
    <div
      className={cardClass}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
