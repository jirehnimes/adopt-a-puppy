import React, { FC, ReactNode } from 'react';

type HeroSubtitlePropsType = {
  children: ReactNode;
};

export type HeroSubtitleType = FC<HeroSubtitlePropsType>;

const HeroSubtitle = ({ children }: HeroSubtitlePropsType) => {
  return <p className='subtitle'>{children}</p>;
};

export default HeroSubtitle;
