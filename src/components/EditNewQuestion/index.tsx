import React, { useState } from 'react';
import * as S from './styled';
import Title from '../ui/Title';
import { IAnswer, IQuestion } from '../../core/types/questions';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

interface EditNewQuestionProps {
  onClose: () => void;
  addNewQuestion: (question: IQuestion) => void;
}

const EditNewQuestion: React.FC<EditNewQuestionProps> = ({
  onClose,
  addNewQuestion,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm<IQuestion>({
    defaultValues: {
      UID: Date.now(),
      answerType: 'single',
      answers: [],
      question: '',
    },
  });
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
  const cleareIsRight = () => {
    if (getValues('answers').length === 0) {
      return;
    }
    setValue(
      'answers',
      getValues('answers').map((item) => {
        return { ...item, isRightOption: false };
      })
    );
  };
  const onSubmit: SubmitHandler<IQuestion> = (data) => {
    if (data.answers.length < 2) {
      setError('answers', { message: 'min 2 answer' });
      return;
    }
    addNewQuestion(data);
    onClose();
  };
  const showIsQuestionType = (answer: IAnswer) => {
    if (getValues('answerType') === 'multiple') return;
    setValue(
      'answers',
      getValues('answers').map((item) => {
        if (item.UID === answer.UID) {
          return item;
        }
        return { ...item, isRightOption: false };
      })
    );
  };
  return (
    <S.EditNewWindow
      onClick={(e) => e.stopPropagation()}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>
        New question
        <button type='button' onClick={onClose}>
          X
        </button>
      </Title>
      <div>
        question
        <Controller
          name='question'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type='text'
              placeholder='Ваш вопрос'
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div>
        questionType
        <Controller
          name='answerType'
          control={control}
          render={({ field }) => (
            <label htmlFor='single'>
              <input
                type='radio'
                id='single'
                onChange={() => {
                  field.onChange('single'), cleareIsRight();
                }}
                checked={field.value === 'single'}
              />
              single
            </label>
          )}
        />
        <Controller
          name='answerType'
          control={control}
          render={({ field }) => (
            <label htmlFor='multiple'>
              <input
                type='radio'
                id='multiple'
                onChange={() => {
                  field.onChange('multiple'), cleareIsRight();
                }}
                checked={field.value === 'multiple'}
              />
              multiple
            </label>
          )}
        />
      </div>
      {errors?.answers && (
        <span style={{ color: 'red' }}>{errors.answers.message}</span>
      )}
      <div>
        anwers
        <button type='button' onClick={addNewAnswer}>
          +
        </button>
        {fields.map((fieldArr, index) => (
          <div key={fieldArr.id}>
            <Controller
              name={`answers.${index}.title`}
              control={control}
              render={({ field }) => (
                <input
                  type='text'
                  onChange={field.onChange}
                  defaultValue={field.value}
                />
              )}
            />
            <Controller
              name={`answers.${index}.isRightOption`}
              control={control}
              render={({ field }) => (
                <label htmlFor={`isTrue${fieldArr.UID}`}>
                  <input
                    type='checkbox'
                    id={`isTrue${fieldArr.UID}`}
                    onChange={(e) => {
                      field.onChange(e.target.checked);
                      showIsQuestionType(fieldArr);
                    }}
                    checked={field.value}
                  />
                  isTrue
                </label>
              )}
            />
            <button type='button' onClick={() => remove(index)}>
              delete
            </button>
          </div>
        ))}
      </div>
      <button type='submit'>submit</button>
    </S.EditNewWindow>
  );
};

export default EditNewQuestion;
