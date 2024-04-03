import React, { ComponentProps } from 'react';
import * as S from './styled';

interface InputProps extends ComponentProps<'input'> {
  error?: boolean;
  label?: string;
  labelSize?: number;
  fullWidth?: boolean;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  error,
  fullWidth,
  label,
  labelSize,
  width,
  ...ownProps
}) => {
  return (
    <S.InputLabel $fullWidth={fullWidth} $labelSize={labelSize} $width={width}>
      {label}
      <S.InputBorder $isError={error}>
        <S.InputContainer $isError={error}>
          <S.InputStyle {...ownProps} />
        </S.InputContainer>
      </S.InputBorder>
    </S.InputLabel>
  );
};

export default Input;
