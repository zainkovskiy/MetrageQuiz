import React, { memo } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import Input from '../ui/Input/Input';
import Button from '../ui/Button';
import { IAnswer } from '../../core/types/questions';
import * as S from './styled';
import Label from '../ui/Label';
import Checkbox from '../ui/Checkbox';

interface INewAnswer {
  id: string;
  index: number;
  remove: (index: number) => void;
}

const NewAnswer: React.FC<INewAnswer> = memo(({ id, index, remove }) => {
  const { control, getValues, setValue } = useFormContext();
  const handleRemove = () => {
    remove(index);
  };
  const showIsQuestionType = () => {
    if (getValues('answerType') === 'multiple') return;
    const answer: IAnswer = getValues('answers')[index];
    setValue(
      'answers',
      getValues('answers').map((item: IAnswer) => {
        if (item.UID === answer.UID) {
          return item;
        }
        return { ...item, isRightOption: false };
      })
    );
  };
  return (
    <S.NewAnswer>
      <Controller
        name={`answers.${index}.title`}
        control={control}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            defaultValue={field.value}
            fullWidth
          />
        )}
      />
      <Controller
        name={`answers.${index}.isRightOption`}
        control={control}
        render={({ field }) => (
          <Label label='Верно' gap='0.3rem'>
            <Checkbox
              onChange={(e) => {
                field.onChange(e.target.checked);

                showIsQuestionType();
              }}
              checked={field.value}
            />
          </Label>
        )}
      />
      <Button variant='line' color='error' onClick={handleRemove}>
        Удалить
      </Button>
    </S.NewAnswer>
  );
});

export default NewAnswer;
