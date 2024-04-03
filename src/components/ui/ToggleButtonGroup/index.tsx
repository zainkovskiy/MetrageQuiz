import React, { Children } from 'react';
import * as S from './styled';

interface IToggleButtonGroup {
  children: React.ReactNode;
  value: string;
  onChange: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: string
  ) => void;
  fullWidth?: boolean;
}
const ToggleButtonGroup: React.FC<IToggleButtonGroup> = ({
  children,
  fullWidth,
  value,
  onChange,
}) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: string
  ) => {
    if (onChange) {
      onChange(event, newValue);
    }
  };

  return (
    <S.ToggleButtonGroup $fullWidth={fullWidth}>
      {Children.map(children as React.ReactElement, (child) => {
        return React.cloneElement(child, {
          ...child.props,
          fullWidth: fullWidth,
          selected: value === child.props.value,
          onClickParrent: handleClick,
        });
      })}
    </S.ToggleButtonGroup>
  );
};

export default ToggleButtonGroup;
