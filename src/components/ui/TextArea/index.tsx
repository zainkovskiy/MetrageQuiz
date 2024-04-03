import React, { Children } from 'react';
import * as S from './styled';

interface ITextArea extends React.ComponentProps<'textarea'> {
  label?: string;
}
//TODO: сдклвть autosize
const TextArea: React.FC<ITextArea> = ({ label, ...otherProps }) => {
  return (
    <S.InputLabel>
      {label}
      <S.TextArea {...otherProps} />
    </S.InputLabel>
  );
};

export default TextArea;
