import React, { FC, ReactNode } from 'react';

type CardContentPropsType = {
  children: ReactNode;
};

export type CardContentType = FC<CardContentPropsType>;

const CardContent = ({ children }: CardContentPropsType) => {
  return <div className='card-content'>{children}</div>;
};

export default CardContent;
