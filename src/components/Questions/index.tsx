import React, { useState } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { IQuizeSlide } from '../../core/types/quize';
import Question from '../Question';
import ButtonStep from '../ui/ButtonStep';
import { IAnswer } from '../../core/types/questions';

const Questions = () => {
  const quize = useAsyncValue() as IQuizeSlide;

  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };
  const setNewAnswer = (answers: IAnswer[]) => {
    quize.testData[index].answers = answers;
  };
  return (
    <>
      <Question question={quize.testData[index]} setNewAnswer={setNewAnswer} />
      <ButtonStep
        steps={quize.testData.length}
        activeStep={index}
        onClickNext={handleNext}
        onClickPrev={handlePrev}
      />
    </>
  );
};

export default Questions;
