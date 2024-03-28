import React from 'react';
import * as S from './styled';
import { IQuize } from '../../core/types/quize';
import Text from '../ui/Text';
import Avatar from '../Avatar';

const Quize: React.FC<IQuize> = (props) => {
  const { title, color, UID, dueDate, user } = props;
  return (
    <S.QuizeLink to={`${UID}`} $color={color}>
      <S.Quize>
        <Text size={14}>{title}</Text>
        <Text size={14}>Сделать до: {dueDate}</Text>
        <Avatar {...user} />
      </S.Quize>
    </S.QuizeLink>
  );
};

export default Quize;
