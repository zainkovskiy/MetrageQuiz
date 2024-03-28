import React from 'react';
import * as S from './styled';

interface IDialogContainer {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const DialogContainer: React.FC<IDialogContainer> = ({
  children,
  height,
  width,
}) => {
  return (
    <S.DialogContainer onClick={(e) => e.stopPropagation()}>
      {children}
    </S.DialogContainer>
  );
};

export default DialogContainer;
