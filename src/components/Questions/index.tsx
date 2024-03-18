import React, { useState } from 'react';
import { useAsyncValue } from 'react-router-dom';
import { IQouzeSlide } from '../../core/types/quize';
import Question from '../Question';
import ButtonStep from '../ui/ButtonStep';

const Questions = () => {
  const quize = useAsyncValue() as IQouzeSlide;

  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex(index + 1);
  };
  const handlePrev = () => {
    setIndex(index - 1);
  };
  const setAnswer = (answerUid: number) => {
    quize.testData[index].answers = quize.testData[index].answers.map(
      (answer) => {
        if (answer.UID === answerUid) {
          return { ...answer, isChecked: !answer.isChecked };
        }
        return answer;
      }
    );
  };
  return (
    <>
      <Question setAnswer={setAnswer} question={quize.testData[index]} />
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
