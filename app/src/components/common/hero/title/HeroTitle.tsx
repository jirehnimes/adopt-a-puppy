import React, { FC, ReactNode } from 'react';

type HeroTitlePropsType = {
  children: ReactNode;
};

export type HeroTitleType = FC<HeroTitlePropsType>;

const HeroTitle = ({ children }: HeroTitlePropsType) => {
  return <p className='title'>{children}</p>;
};

export default HeroTitle;
