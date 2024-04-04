import React, { useEffect, useRef } from 'react';
import * as S from './styled';
import Logo from '../../assets/images/logo.svg';
import { useAppDispatch, useAppSelector } from '../../core/hooks/hookStore';
import LinkRoute from '../ui/LinkRoute';
import Label from '../ui/Label';
import Switch from '../ui/Switch';
import { fetchQuize, toggleAdminMode } from '../../core/store/quizeSlice';

const Nav: React.FC = () => {
  const dispatch = useAppDispatch();
  const { rightsToMove, adminMode } = useAppSelector((state) => state.quize);
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) return;
    dispatch(fetchQuize());
  }, [adminMode]);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    }
  }, []);
  const handleChange = () => {
    dispatch(toggleAdminMode());
  };
  return (
    <S.Nav>
      <S.NavLogoWrap>
        <Logo style={{ fill: '#85009E' }} />
        {rightsToMove && (
          <Label label='Режим администратора' position='right' gap='0.5rem'>
            <Switch onChange={handleChange} />
          </Label>
        )}
      </S.NavLogoWrap>
      {rightsToMove && <LinkRoute to='new'>Создать</LinkRoute>}
    </S.Nav>
  );
};

export default Nav;
