import React from 'react';
import * as S from './style';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default Title;
