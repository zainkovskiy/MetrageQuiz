import React, { useState } from 'react';
import { IAnswer, IQuestion } from '../../core/types/questions';
import * as S from './styled';
import Label from '../ui/Label';
import Checkbox from '../ui/Checkbox';

interface QustionsProps {
  question: IQuestion;
  setNewAnswer: (answers: IAnswer[]) => void;
}

const Question: React.FC<QustionsProps> = (props) => {
  const { question, setNewAnswer } = props;
  const [change, setChange] = useState(false);
  const handleAnswer: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    setNewAnswer(
      question.answers.map((item) => {
        if (item.UID.toString() === id) {
          return { ...item, isChecked: checked };
        }
        return question.answerType === 'single'
          ? { ...item, isChecked: false }
          : item;
      })
    );
    setChange(!change);
  };

  return (
    <S.Question>
      {question.question}
      {question.answers.map((answer) => (
        <Label gap='0.5rem' key={`question${question.UID}answer${answer.UID}`}>
          <Checkbox
            checked={answer.isChecked}
            id={`${answer.UID}`}
            onChange={handleAnswer}
          />
          {answer.title}
        </Label>
      ))}
    </S.Question>
  );
};

export default Question;
