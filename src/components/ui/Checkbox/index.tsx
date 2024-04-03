import React, { ComponentProps } from 'react';
import Done from '../../../assets/images/done.svg';
import * as S from './styled';
import Label from '../Label';

interface OwnProps {
  label?: string;
}

type CheckboxProps = OwnProps & Omit<ComponentProps<'input'>, 'type'>;

const Checkbox: React.FC<CheckboxProps> = ({ label, ...otherProps }) => {
  return (
    <label>
      <S.HiddenInput {...otherProps} type='checkbox' />
      <S.CheckBoxContainer>
        <Done />
      </S.CheckBoxContainer>
    </label>
  );
};

export default Checkbox;
