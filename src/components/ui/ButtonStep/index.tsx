import React, { JSXElementConstructor } from 'react';
import * as S from './styled';
import Button from '../Button';

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
      <Button onClick={onClickPrev} disabled={activeStep === 0}>
        Назад
      </Button>
      <S.DotGroup>{...getSteps()}</S.DotGroup>
      <Button onClick={onClickNext} disabled={steps - 1 === activeStep}>
        Дальше
      </Button>
    </S.ButtonStep>
  );
};

export default ButtonStep;
