import React from 'react';
import * as S from './styled';
import Title from '../ui/Title';
import { IAnswer, IQuestion } from '../../core/types/questions';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import Input from '../ui/Input/Input';
import Label from '../ui/Label';
import Button from '../ui/Button';
import ToggleButtonGroup from '../ui/ToggleButtonGroup';
import ToggleButton from '../ui/ToggleButton';
import NewAnswers from '../NewAnswers';
import Uploader from '../ui/Uploader';
import { uploadPhoto } from '../../core/api';

interface EditNewQuestionProps {
  editQestion?: IQuestion | null;
  onClose: () => void;
  addNewQuestion: (question: IQuestion) => void;
}

const EditNewQuestion: React.FC<EditNewQuestionProps> = ({
  editQestion,
  onClose,
  addNewQuestion,
}) => {
  const method = useForm<IQuestion>({
    defaultValues: editQestion || {
      UID: Date.now(),
      answerType: 'single',
      answers: [],
    },
  });
  const { control, getValues, setValue } = method;

  const onSubmit: SubmitHandler<IQuestion> = (data) => {
    addNewQuestion(data);
    onClose();
  };
  //TODO: замегнить S.EditNewWindow на DialogContainer

  const cleareAnswersRight = () => {
    if (getValues('answers').length > 0) {
      setValue(
        'answers',
        getValues('answers').map((item: IAnswer) => {
          return { ...item, isRightOption: false };
        })
      );
    }
  };
  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget?.files) {
      uploadPhoto(e.currentTarget.files);
    }
  };
  return (
    <FormProvider {...method}>
      <S.EditNewWindow
        onClick={(e) => e.stopPropagation()}
        onSubmit={method.handleSubmit(onSubmit)}
      >
        <Title>Новый вопрос</Title>
        <S.EditNewContent>
          <Controller
            name='question'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                defaultValue={field.value || ''}
                onChange={field.onChange}
                label='Вопрос'
              />
            )}
          />
          <S.EditNewWrap>
            <Controller
              name='answerType'
              control={control}
              render={({ field }) => (
                <Label label='Тип ответа' position='top-left' fullWidth>
                  <ToggleButtonGroup
                    fullWidth
                    value={field.value}
                    onChange={(e, newValue) => {
                      field.onChange(newValue);
                      cleareAnswersRight();
                    }}
                  >
                    <ToggleButton value='single'>single</ToggleButton>
                    <ToggleButton value='multiple'>multiple</ToggleButton>
                  </ToggleButtonGroup>
                </Label>
              )}
            />
            <Label label='Загрузите фото' position='top-left' fullWidth>
              <Uploader onChange={handleUpload} />
            </Label>
          </S.EditNewWrap>
          <NewAnswers />
        </S.EditNewContent>
        <S.EditNewFooter>
          <Button onClick={onClose} variant='outline'>
            Закрыть
          </Button>
          <Button type='submit'>Сохранить</Button>
        </S.EditNewFooter>
      </S.EditNewWindow>
    </FormProvider>
  );
};

export default EditNewQuestion;
