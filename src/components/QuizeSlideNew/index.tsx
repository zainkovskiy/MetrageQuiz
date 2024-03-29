import React, { useState } from 'react';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import Title from '../ui/Title';
import DialogWindow from '../DialogWindow';
import { IQuestion } from '../../core/types/questions';
import EditNewQuestion from '../EditNewQuestion';
import { useAsyncValue } from 'react-router-dom';
import { IQuizeSlide } from '../../core/types/quize';

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
  const handleContentType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setContentType(e.currentTarget.id);
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
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <SliderBlockContainer flex column>
        <Title>Материал:</Title>
        <div>
          <label htmlFor='youtube'>
            <input
              type='radio'
              name='contentType'
              id='youtube'
              checked={contentType === 'youtube'}
              onChange={handleContentType}
            />
            Youtube
          </label>
          <label htmlFor='pdf'>
            <input
              type='radio'
              name='contentType'
              id='pdf'
              checked={contentType === 'pdf'}
              onChange={handleContentType}
            />
            PDF
          </label>
        </div>
        {contentType === 'youtube' && (
          <div>
            <p style={{ margin: 0 }}>Ссылка на контент:</p>
            <input type='text' />
          </div>
        )}
        {contentType === 'pdf' && (
          <div>
            <p style={{ margin: 0 }}>Положите сюда файлик:</p>
            <input type='file' />
          </div>
        )}
        <div>
          <p style={{ margin: 0 }}>Описание модуля:</p>
          <textarea
            style={{ width: '100%', resize: 'none', boxSizing: 'border-box' }}
            rows={10}
          />
        </div>
      </SliderBlockContainer>
      <SliderBlockContainer flex column>
        <Title>
          Вопросы:
          <button onClick={handleWindowQuestion}>Добавить вопрос</button>
        </Title>
        <label>
          Проходной балл: <input type='number' />
        </label>
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
