import React, { useEffect, useRef, useState } from 'react';
import { IAnswer, IQuestion } from '../../core/types/questions';
import * as S from './styled';

interface QustionsProps {
  question: IQuestion;
  setNewAnswer: (answers: IAnswer[]) => void;
}

const Question: React.FC<QustionsProps> = (props) => {
  const { question, setNewAnswer } = props;
  const [answers, setAnswers] = useState(question.answers);
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) return;
    setNewAnswer(answers);
  }, [answers]);
  useEffect(() => {
    if (firstMount?.current) {
      firstMount.current = false;
    }
  }, []);
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
