import React from 'react';
import { IUser } from '../../core/types/user';
import * as S from './styled';

const Avatar: React.FC<IUser> = (props) => {
  const { avatar, fullName } = props;
  return (
    <S.Avatar>
      <S.AvatarImg src={avatar} />
      {fullName}
    </S.Avatar>
  );
};

export default Avatar;
