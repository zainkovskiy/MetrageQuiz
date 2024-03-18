import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/hooks/hookStore';
import { fetchQuize } from '../../core/store/quizeSlice';
import * as S from './styled';
import Quizes from '../../components/Quizes';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { stages } = useAppSelector((state) => state.quize);

  useEffect(() => {
    dispatch(fetchQuize());
  }, []);
  return (
    <S.MainPage>
      {stages?.length > 0 && (
        <S.Kanban $columns={stages.length}>
          {stages.map((stage) => (
            <S.StageColumn key={`stage${stage.id}`}>
              <S.Stage>{stage.name}</S.Stage>
              <Quizes id={stage.id} />
            </S.StageColumn>
          ))}
        </S.Kanban>
      )}
      <Outlet />
    </S.MainPage>
  );
};

export default MainPage;
