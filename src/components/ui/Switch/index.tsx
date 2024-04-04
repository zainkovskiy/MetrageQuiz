import React, { ComponentProps, useRef } from 'react';
import * as S from './styled';

interface ISwitch extends Omit<ComponentProps<'input'>, 'type'> {}

const Switch: React.FC<ISwitch> = ({ ...otherProps }) => {
  const switchRef = useRef<HTMLInputElement>(null);
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const parentElem = e.currentTarget.parentElement?.tagName;
    if (parentElem === 'LABEL') return;
    if (switchRef.current) {
      switchRef.current.click();
    }
  };
  return (
    <S.Switch onClick={handleClick}>
      <S.SwitchHiddenInput type='checkbox' ref={switchRef} {...otherProps} />
      <S.SwitchButton />
    </S.Switch>
  );
};

export default Switch;
