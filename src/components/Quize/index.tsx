import React from 'react';
import * as S from './styled';
import { IQuize } from '../../core/types/quize';

const Quize: React.FC<IQuize> = (props) => {
  const { title, color, UID } = props;

  return (
    <S.QuizeLink to={`${UID}`} $color={color}>
      <S.Quize>{title}</S.Quize>
    </S.QuizeLink>
  );
};

export default Quize;
