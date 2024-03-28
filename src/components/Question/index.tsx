import React, { useState } from 'react';
import { IQuestion } from '../../core/types/questions';
import * as S from './styled';
import { useAsyncValue } from 'react-router-dom';

interface QustionsProps {
  question: IQuestion;
}

const Question: React.FC<QustionsProps> = (props) => {
  const { question } = props;
  const [answers, setAnswers] = useState(question.answers);
  const handleAnswer: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    setAnswers((prevState) =>
      prevState.map((item) => {
        if (item.UID.toString() === id) {
          return { ...item, isChecked: checked };
        }
        return question.answerType === 'single'
          ? { ...item, isChecked: false }
          : item;
      })
    );
  };
  return (
    <S.Question>
      {question.question}
      {answers.map((answer) => (
        <label
          htmlFor={`${answer.UID}`}
          key={`question${question.UID}answer${answer.UID}`}
        >
          <input
            type='checkbox'
            checked={answer.isChecked}
            id={`${answer.UID}`}
            onChange={handleAnswer}
          />
          {answer.title}
        </label>
      ))}
    </S.Question>
  );
};

export default Question;
