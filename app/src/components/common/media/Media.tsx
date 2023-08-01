import React, { FC, ReactNode } from 'react';

import MediaContent, { MediaContentType } from './content/MediaContent';

type MediaChildrenType = {
  Content: MediaContentType;
};

type MediaPropsType = {
  children: ReactNode;
};

type MediaType = FC<MediaPropsType> & MediaChildrenType;

const Media: MediaType = ({ children }: MediaPropsType) => {
  return <div className='media'>{children}</div>;
};

Media.Content = MediaContent;

export default Media;
