import React from 'react';
import * as S from './styled';
import Logo from '../../assets/images/logo.svg';
import Text from '../ui/Text';
import { useAppSelector } from '../../core/hooks/hookStore';
import LinkRoute from '../ui/LinkRoute';
import Checkbox from '../ui/Checkbox';
import Label from '../ui/Label';

const Nav: React.FC = () => {
  const { rightsToMove } = useAppSelector((state) => state.quize);
  return (
    <S.Nav>
      <S.NavLogoWrap>
        <Logo style={{ fill: '#85009E' }} />
        {rightsToMove && <Text>Режим администратора</Text>}
      </S.NavLogoWrap>
      {rightsToMove && <LinkRoute to='new'>Создать</LinkRoute>}
    </S.Nav>
  );
};

export default Nav;
