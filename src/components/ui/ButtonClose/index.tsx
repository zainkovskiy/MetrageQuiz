import React from 'react';
import * as S from './styled';

interface IButtonClose {
  onClose: () => void;
}

const ButtonClose: React.FC<IButtonClose> = ({ onClose }) => {
  return (
    <S.ButtonClose onClick={onClose}>
      <S.ButtonCloseCircle>
        <S.ButtonCloseIcon />
      </S.ButtonCloseCircle>
    </S.ButtonClose>
  );
};

export default ButtonClose;
