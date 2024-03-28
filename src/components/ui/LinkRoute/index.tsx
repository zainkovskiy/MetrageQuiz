import React from 'react';
import * as S from './styled';
import { LinkProps } from 'react-router-dom';

interface LinkRouterProps extends LinkProps {
  children: string;
  size?: number;
}

const LinkRoute: React.FC<LinkRouterProps> = ({ children, size, to }) => {
  return (
    <S.LinkRoute to={to} $size={size}>
      {children}
    </S.LinkRoute>
  );
};

export default LinkRoute;
