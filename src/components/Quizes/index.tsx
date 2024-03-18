import React from 'react';
import { useAppSelector } from '../../core/hooks/hookStore';
import * as S from './styled';
import Quize from '../Quize';

const Quizes: React.FC<{ id: number }> = ({ id }) => {
  const { data } = useAppSelector((state) => state.quize);
  return (
    <S.Quizes>
      {data.length > 0 &&
        data.map((quize) => {
          if (quize.stageId === id) {
            return <Quize key={quize.UID} {...quize} />;
          }
        })}
    </S.Quizes>
  );
};

export default Quizes;
