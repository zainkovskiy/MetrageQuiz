import React from 'react';
import { IQuestion } from '../../core/types/questions';
import * as S from './styled';
import { useAsyncValue } from 'react-router-dom';

interface QustionsProps {
  question: IQuestion;
  setAnswer: (answerUid: number) => void;
}

const Question: React.FC<QustionsProps> = (props) => {
  const { question, setAnswer } = props;

  return (
    <S.Question>
      {question.question}
      {question.answers.map((answer) => (
        <label
          htmlFor={`question${question.UID}answer${answer.UID}`}
          key={`question${question.UID}answer${answer.UID}`}
        >
          <input
            type='checkbox'
            defaultChecked={answer.isChecked}
            id={`question${question.UID}answer${answer.UID}`}
            onChange={() => {
              setAnswer(answer.UID);
            }}
          />
          {answer.title}
        </label>
      ))}
    </S.Question>
  );
};

export default Question;
