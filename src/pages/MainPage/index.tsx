import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/hooks/hookStore';
import { fetchQuize } from '../../core/store/quizeSlice';
import * as S from './styled';
import Quizes from '../../components/Quizes';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import KanbanContainer from '../../containers/KanbanContainer';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { stages } = useAppSelector((state) => state.quize);

  useEffect(() => {
    dispatch(fetchQuize());
  }, []);
  return (
    <S.MainPage>
      <Nav />
      <KanbanContainer>
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
      </KanbanContainer>
    </S.MainPage>
  );
};

export default MainPage;
