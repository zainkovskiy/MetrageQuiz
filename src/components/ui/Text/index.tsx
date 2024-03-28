import React from 'react';
import * as S from './styled';

interface TextProps {
  children: string | number | (string | number)[];
  size?: number;
  color?: string;
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, size, color, bold }) => {
  return (
    <S.Text $size={size} $color={color} $bold={bold}>
      {children}
    </S.Text>
  );
};

export default Text;
