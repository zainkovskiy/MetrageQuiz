import React from 'react';
import * as S from './styled';

interface KanbanContainerProps {
  children: React.ReactNode;
}

const KanbanContainer: React.FC<KanbanContainerProps> = ({ children }) => {
  return <S.KanbanContainer>{children}</S.KanbanContainer>;
};

export default KanbanContainer;
