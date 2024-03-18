import React, { JSXElementConstructor } from 'react';
import * as S from './styled';

interface ButtonStepProp {
  steps: number;
  activeStep: number;
  onClickNext: () => void;
  onClickPrev: () => void;
}

const ButtonStep: React.FC<ButtonStepProp> = ({
  steps,
  activeStep,
  onClickNext,
  onClickPrev,
}) => {
  const getSteps = () => {
    let count = 0;
    let dots: React.ReactNode[] = [];
    while (count < steps) {
      dots.push(<S.Dot $active={activeStep === count} />);
      count++;
    }
    return dots;
  };
  return (
    <S.ButtonStep>
      <button onClick={onClickPrev} disabled={activeStep === 0}>
        prev
      </button>
      <S.DotGroup>{...getSteps()}</S.DotGroup>
      <button onClick={onClickNext} disabled={steps - 1 === activeStep}>
        next
      </button>
    </S.ButtonStep>
  );
};

export default ButtonStep;
