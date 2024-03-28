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
  console.log(quize);

  const [contentType, setContentType] = useState(
    quize ? quize.contentType : 'youtube'
  );
  const [qestions, setQuestions] = useState<IQuestion[]>(
    quize ? quize.testData : []
  );
  const [windowQestion, setWindowQestion] = useState(false);
  const [editWindowQestion, setEditWindowQestion] = useState(null);
  const handleContentType: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setContentType(e.currentTarget.id);
  };
  const handleWindowQuestion = () => {
    setWindowQestion(!windowQestion);
  };
  const haadleWindowClose = () => {
    if (windowQestion) {
      setWindowQestion(false);
    }
    if (Boolean(editWindowQestion)) {
      setEditWindowQestion(null);
    }
  };
  const addNewQuestion = (qestion: IQuestion) => {
    setQuestions([...qestions, qestion]);
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
        {qestions.map((item, idx) => (
          <div key={item.UID} style={{ border: '1px solid' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '0.5rem',
              }}
            >
              <button>edit</button>
              <button>delete question</button>
            </div>
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
        />
      </DialogWindow>
    </div>
  );
};

export default QuizeSlideNew;
