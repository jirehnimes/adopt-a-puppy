import React, { FC, ReactNode } from 'react';

type MediaContentPropsType = {
  children: ReactNode;
};

export type MediaContentType = FC<MediaContentPropsType>;

const MediaContent = ({ children }: MediaContentPropsType) => {
  return <div className='media-content'>{children}</div>;
};

export default MediaContent;
