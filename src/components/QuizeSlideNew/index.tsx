import React, { useState } from 'react';
import * as S from './styled';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import Title from '../ui/Title';
import DialogWindow from '../DialogWindow';
import { IQuestion } from '../../core/types/questions';
import EditNewQuestion from '../EditNewQuestion';
import { useAsyncValue } from 'react-router-dom';
import { IQuizeForm, IQuizeSlide } from '../../core/types/quize';
import ToggleButton from '../ui/ToggleButton';
import ToggleButtonGroup from '../ui/ToggleButtonGroup';
import Input from '../ui/Input/Input';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import Uploader from '../ui/Uploader';
import Label from '../ui/Label';
import { saveQuize, uploadFiles } from '../../core/api';
import NewQuestion from '../NewQuestion';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface QuizeSlideNewProps {
  onClose: () => void;
}

const QuizeSlideNew: React.FC<QuizeSlideNewProps> = ({ onClose }) => {
  const quize = useAsyncValue() as IQuizeSlide;
  const [windowQestion, setWindowQestion] = useState(false);
  const [editWindowQestion, setEditWindowQestion] = useState<IQuestion | null>(
    null
  );
  const { control, handleSubmit, getValues, watch, setValue } = useForm({
    defaultValues: quize
      ? quize
      : {
          contentType: 'youtube',
          description: '',
          contentURL: '',
          testData: [],
          successBall: undefined,
          title: '',
        },
  });
  const handleWindowQuestion = () => {
    setWindowQestion(!windowQestion);
  };
  const handleEidtQuestion = (question: IQuestion) => {
    setEditWindowQestion(question);
  };
  const handleWindowClose = () => {
    if (windowQestion) {
      setWindowQestion(false);
    }
    if (Boolean(editWindowQestion)) {
      setEditWindowQestion(null);
    }
  };
  const addNewQuestion = (question: IQuestion) => {
    const questions = getValues('testData');
    const find = questions.find((item) => item.UID === question.UID);
    if (find) {
      questions.splice(questions.indexOf(find), 1, question);
      setValue('testData', questions);
      return;
    }
    setValue('testData', [...questions, question]);
  };
  const removeQuestion = (UID: number) => {
    setValue(
      'testData',
      getValues('testData').filter((item) => item.UID !== UID)
    );
  };
  const handleUploader: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.currentTarget?.files;
    if (files) {
      uploadFiles(files).then((file) => {
        if (file) {
          setValue('contentURL', file[0].downloadUrl);
        }
      });
    }
  };
  const onSubmit: SubmitHandler<IQuizeForm> = (data) => {
    console.log(data);
    saveQuize(data).then((answer) => {
      if (answer === 'OK') {
        onClose();
      }
    });
  };
  watch('contentType');
  watch('testData');
  return (
    <>
      <S.QuizeSlideNew onSubmit={handleSubmit(onSubmit)}>
        <SliderBlockContainer flex column>
          <Title>Материал:</Title>
          <Controller
            name='contentType'
            control={control}
            render={({ field }) => (
              <ToggleButtonGroup
                value={field.value}
                onChange={(e, newValue) => field.onChange(newValue)}
                fullWidth
              >
                <ToggleButton value='youtube'>youtube</ToggleButton>
                <ToggleButton value='pdf'>pdf</ToggleButton>
              </ToggleButtonGroup>
            )}
          />
          {getValues('contentType') === 'youtube' && (
            <Controller
              name='contentURL'
              control={control}
              render={({ field }) => (
                <Input
                  label='Ссылка на контент:'
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          )}
          {getValues('contentType') === 'pdf' && (
            <Label label='Загрузите файл' position='top-left'>
              <Uploader onChange={handleUploader} />
            </Label>
          )}
          <Controller
            name='title'
            control={control}
            render={({ field }) => (
              <Input
                label='Заголовок'
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <TextArea
                onChange={field.onChange}
                value={field.value}
                label='Описание модуля:'
                rows={10}
              />
            )}
          />
        </SliderBlockContainer>
        <SliderBlockContainer flex column>
          <Title>
            Вопросы:
            <Button onClick={handleWindowQuestion}>Добавить вопрос</Button>
          </Title>
          <Controller
            name='successBall'
            control={control}
            render={({ field }) => (
              <Input
                label='Проходной балл:'
                type='number'
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {getValues('testData').map((item, idx) => (
            <NewQuestion
              key={item.UID}
              question={item}
              index={idx + 1}
              handleEidtQuestion={handleEidtQuestion}
              removeQuestion={removeQuestion}
            />
          ))}
        </SliderBlockContainer>
        <SliderBlockContainer flex jc='flex-end'>
          <Button type='submit'>Сохранить</Button>
        </SliderBlockContainer>
      </S.QuizeSlideNew>
      <DialogWindow
        open={windowQestion || Boolean(editWindowQestion)}
        onClose={handleWindowClose}
      >
        <EditNewQuestion
          onClose={handleWindowClose}
          addNewQuestion={addNewQuestion}
          editQestion={editWindowQestion}
        />
      </DialogWindow>
    </>
  );
};

export default QuizeSlideNew;
