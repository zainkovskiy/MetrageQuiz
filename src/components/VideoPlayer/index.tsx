import React from 'react';
import * as S from './styled';

interface VideoPlayerProps {
  src: string;
  height: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, height }) => {
  return (
    <S.VideoPlayer
      width='100%'
      height={height || '375'}
      src={src}
      title='YouTube video player'
      // frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      // allowfullscreen
    />
  );
};

export default VideoPlayer;
