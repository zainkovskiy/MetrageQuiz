import React from 'react';
import * as S from './styled';

interface IToggleButton {
  children: string;
  value: string;
  selected?: boolean;
  fullWidth?: boolean;
  onClickParrent?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: string
  ) => void;
}

const ToggleButton: React.FC<IToggleButton> = ({
  children,
  value,
  selected,
  fullWidth,
  onClickParrent,
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (onClickParrent) {
      onClickParrent(event, value);
    }
  };

  return (
    <S.ToggleButton
      onClick={handleClick}
      $fullWidth={fullWidth}
      $isSelected={selected}
    >
      {children}
    </S.ToggleButton>
  );
};

export default ToggleButton;
