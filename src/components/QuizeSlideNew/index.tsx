import React, { useState } from 'react';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import Title from '../ui/Title';
import DialogWindow from '../DialogWindow';
import { IQuestion } from '../../core/types/questions';
import EditNewQuestion from '../EditNewQuestion';
import { useAsyncValue } from 'react-router-dom';
import { IQuizeSlide } from '../../core/types/quize';
import ToggleButton from '../ui/ToggleButton';
import ToggleButtonGroup from '../ui/ToggleButtonGroup';
import Input from '../ui/Input/Input';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import Uploader from '../ui/Uploader';
import Label from '../ui/Label';
import { uploadFiles } from '../../core/api';

const QuizeSlideNew: React.FC = () => {
  const quize = useAsyncValue() as IQuizeSlide;

  const [contentType, setContentType] = useState(
    quize ? quize.contentType : 'youtube'
  );
  const [questions, setQuestions] = useState<IQuestion[]>(
    quize ? quize.testData : []
  );
  const [windowQestion, setWindowQestion] = useState(false);
  const [editWindowQestion, setEditWindowQestion] = useState<IQuestion | null>(
    null
  );
  const handleContentType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newValue: string
  ) => {
    setContentType(newValue);
  };
  const handleWindowQuestion = () => {
    setWindowQestion(!windowQestion);
  };
  const handleEidtQuestion = (question: IQuestion) => {
    setEditWindowQestion(question);
  };
  const haadleWindowClose = () => {
    if (windowQestion) {
      setWindowQestion(false);
    }
    if (Boolean(editWindowQestion)) {
      setEditWindowQestion(null);
    }
  };
  const addNewQuestion = (question: IQuestion) => {
    const find = questions.find((item) => item.UID === question.UID);
    if (find) {
      //TODO: подумать как сократить
      const arr = questions;
      arr.splice(arr.indexOf(find), 1, question);
      setQuestions(arr);
      return;
    }
    setQuestions([...questions, question]);
  };
  const removeQuestion = (UID: number) => {
    setQuestions((prevState) => prevState.filter((item) => item.UID !== UID));
  };
  const handleUploader: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget?.files) {
      uploadFiles(e.currentTarget.files);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <SliderBlockContainer flex column>
        <Title>Материал:</Title>
        <div>
          <ToggleButtonGroup
            value={contentType}
            onChange={handleContentType}
            fullWidth
          >
            <ToggleButton value='youtube'>youtube</ToggleButton>
            <ToggleButton value='pdf'>pdf</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div></div>
        {contentType === 'youtube' && <Input label='Ссылка на контент:' />}
        {contentType === 'pdf' && (
          <Label label='Загрузите файл' position='top-left'>
            <Uploader onChange={handleUploader} />
          </Label>
        )}
        <TextArea label='Описание модуля:' rows={10} />
      </SliderBlockContainer>
      <SliderBlockContainer flex column>
        <Title>
          Вопросы:
          <Button onClick={handleWindowQuestion}>Добавить вопрос</Button>
        </Title>
        <Input label='Проходной балл:' />
        {questions.map((item, idx) => (
          <div key={item.UID} style={{ border: '1px solid' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.5rem',
              }}
            >
              <button
                onClick={() => {
                  handleEidtQuestion(item);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  removeQuestion(item.UID);
                }}
              >
                delete question
              </button>
            </div>
            {item?.imageUrl && (
              <img src={item.imageUrl} style={{ width: '100%' }} />
            )}
            <span>
              {idx + 1 + '. '}
              {item.question}
            </span>
            <div>
              {item.answers.map((answer) => (
                <div key={answer.UID}>
                  {answer.title} {answer?.isRightOption && ' +'}
                </div>
              ))}
            </div>
          </div>
        ))}
      </SliderBlockContainer>
      <DialogWindow
        open={windowQestion || Boolean(editWindowQestion)}
        onClose={haadleWindowClose}
      >
        <EditNewQuestion
          onClose={haadleWindowClose}
          addNewQuestion={addNewQuestion}
          editQestion={editWindowQestion}
        />
      </DialogWindow>
    </div>
  );
};

export default QuizeSlideNew;
