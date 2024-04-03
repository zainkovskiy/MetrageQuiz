import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Label from '../ui/Label';
import Button from '../ui/Button';
import NewQuestion from '../NewQuestion';
import * as S from './styled';
import Text from '../ui/Text';

const NewQuestions = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: 'answers',
    control,
  });
  const addNewAnswer = () => {
    append({
      UID: Date.now(),
      isChecked: false,
      isRightOption: false,
      title: '',
    });
  };
  return (
    <S.NewQuestions>
      <div>
        <Text size={14}>Добавить ответ </Text>
        <Button onClick={addNewAnswer} variant='line'>
          +
        </Button>
      </div>
      {fields.map((answer, index) => (
        <NewQuestion
          id={answer.id}
          key={answer.id}
          index={index}
          remove={remove}
        />
      ))}
    </S.NewQuestions>
  );
};

export default NewQuestions;
