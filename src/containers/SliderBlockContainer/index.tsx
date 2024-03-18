import React from 'react';
import * as S from './styled';

interface SliderBlockContainerProps {
  column?: boolean;
  flex?: boolean;
  children?: React.ReactNode;
  jc?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
  ai?: 'center' | 'flex-start' | 'flex-end';
  layout?: boolean;
}

const SliderBlockContainer: React.FC<SliderBlockContainerProps> = ({
  column,
  children,
  flex,
  jc,
  ai,
  layout,
}) => {
  return (
    <S.SliderBlockContainer
      $column={column}
      $flex={flex}
      $jc={jc}
      $ai={ai}
      layout={layout}
    >
      {children}
    </S.SliderBlockContainer>
  );
};

export default SliderBlockContainer;
