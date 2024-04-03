import React from 'react';
import * as S from './styled';

interface ILabel {
  label?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right';
  gap?: string;
  noWrap?: boolean;
}

const Label: React.FC<ILabel> = ({
  label,
  fullWidth,
  children,
  position = 'left',
  gap,
  noWrap = false,
}) => {
  return (
    <S.LabelStyle
      $fullWidth={fullWidth}
      $position={position}
      $gap={gap}
      $noWrap={noWrap}
    >
      {label}
      {children}
    </S.LabelStyle>
  );
};

export default Label;
