import React, { FC, ReactNode } from 'react';

type CardFooterPropsType = {
  children: ReactNode;
};

export type CardFooterType = FC<CardFooterPropsType>;

const CardFooter = ({ children }: CardFooterPropsType) => {
  return <div className='card-content'>{children}</div>;
};

export default CardFooter;
