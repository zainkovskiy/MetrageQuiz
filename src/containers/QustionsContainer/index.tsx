import React from 'react';
import * as S from './styled';
import { HTMLMotionProps } from 'framer-motion';

interface QustionsContainerProp {
  children: React.ReactNode;
}

const QustionsContainer: React.FC<QustionsContainerProp> = (props) => {
  const { children } = props;

  return <S.QustionsContainer>{children}</S.QustionsContainer>;
};

export default QustionsContainer;
