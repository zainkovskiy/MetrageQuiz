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
import NewQuestion from '../NewQuestion';

const testQ = {
  UID: 1712222824714,
  answerType: 'single',
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMup-hD-50SjTcD9W19tYwmejXjAjIgn5NUIPtuq1tZQ&s',
  answers: [
    {
      UID: 1712222825827,
      isChecked: false,
      isRightOption: false,
      title: 'Рон Уизли',
    },
    {
      UID: 1712222826261,
      isChecked: false,
      isRightOption: false,
      title: 'Невилл Лонгботтом',
    },
    {
      UID: 1712222826744,
      isChecked: false,
      isRightOption: true,
      title: 'Драко Малфой',
    },
    {
      UID: 1712222851645,
      isChecked: false,
      isRightOption: false,
      title: 'Драко Уизли',
    },
  ],
  question: 'Кто из этих персонажей не дружит с Гарри Поттером?',
};
const testQ1 = {
  UID: 1712222824724,
  answerType: 'single',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eiffel_Tower_Vertical.JPG/802px-Eiffel_Tower_Vertical.JPG?20080622213711',
  answers: [
    {
      UID: 1712222825827,
      isChecked: false,
      isRightOption: false,
      title: 'Big Ban',
    },
    {
      UID: 1712222826261,
      isChecked: false,
      isRightOption: true,
      title: 'Eiffel Tower',
    },
  ],
  question: 'Waht is it?',
};

const QuizeSlideNew: React.FC = () => {
  const quize = useAsyncValue() as IQuizeSlide;

  const [contentType, setContentType] = useState(
    quize ? quize.contentType : 'youtube'
  );
  const [questions, setQuestions] = useState<IQuestion[]>(
    quize ? quize.testData : [testQ, testQ1]
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
        <ToggleButtonGroup
          value={contentType}
          onChange={handleContentType}
          fullWidth
        >
          <ToggleButton value='youtube'>youtube</ToggleButton>
          <ToggleButton value='pdf'>pdf</ToggleButton>
        </ToggleButtonGroup>
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
          <NewQuestion
            key={item.UID}
            question={item}
            index={idx + 1}
            handleEidtQuestion={handleEidtQuestion}
            removeQuestion={removeQuestion}
          />
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
