import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Button from '../ui/Button';
import NewAnswer from '../NewAnswer';
import * as S from './styled';
import Text from '../ui/Text';

const NewAnswers = () => {
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
    <S.NewAnswers>
      <div>
        <Text size={14}>Добавить ответ </Text>
        <Button onClick={addNewAnswer} variant='line'>
          +
        </Button>
      </div>
      {fields.map((answer, index) => (
        <NewAnswer
          id={answer.id}
          key={answer.id}
          index={index}
          remove={remove}
        />
      ))}
    </S.NewAnswers>
  );
};

export default NewAnswers;
