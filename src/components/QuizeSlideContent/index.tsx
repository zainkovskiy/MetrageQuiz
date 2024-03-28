import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import { Link, useAsyncValue } from 'react-router-dom';
import { IQuizeSlide, IResult } from '../../core/types/quize';
import Text from '../ui/Text';
import moment from 'moment';
import Title from '../ui/Title';
import VideoPlayer from '../VideoPlayer';
import QustionsContainer from '../../containers/QustionsContainer';
import Questions from '../Questions';
import { getResult } from '../../core/api';
import DialogWindow from '../DialogWindow';
import EditAppoint from '../EditAppoint';

const QuizeSlideContent: React.FC = () => {
  const quize = useAsyncValue() as IQuizeSlide;
  const [start, setStart] = useState(false);
  const [openAppoint, setOpenAppoint] = useState(false);
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [result, setResult] = useState<IResult[]>(quize?.resultGrid || []);
  useEffect(() => {
    if (start) return;
    getResult(quize).then((data) => {
      if (data?.resultGrid && data?.resultGrid?.length > 0) {
        setResult(data?.resultGrid);
      }
    });
  }, [start]);
  const toggleStart = () => {
    setStart(!start);
  };
  const toggleFullScreen = () => {
    setOpenFullScreen(!openFullScreen);
  };
  const toggleAppoint = () => {
    setOpenAppoint(!openAppoint);
  };
  return (
    <S.QuizeSlideContent>
      <SliderBlockContainer flex jc='space-between'>
        <Text>ID: {quize.UID}</Text>
        <Text>Сотрудник: {quize.user.fullName}</Text>
      </SliderBlockContainer>
      <SliderBlockContainer flex jc='space-between'>
        <div>
          <Text>Попыток: {quize.numberOfAttempts}</Text>
          {quize.dueDate && (
            <Text>Пройдено: {moment(quize.dueDate).format('DD.MM.YYYY')} </Text>
          )}
        </div>
        <div>
          <Link to={`/quize/edit/${quize.UID}`}>edit</Link>
          <button onClick={toggleAppoint}>назначить</button>
        </div>
      </SliderBlockContainer>
      <SliderBlockContainer flex column full={openFullScreen}>
        <Title>
          Материал: <button onClick={toggleFullScreen}>full</button>
        </Title>
        <VideoPlayer
          src={quize.youtubelink}
          height={openFullScreen ? '100%' : ''}
        />
      </SliderBlockContainer>
      <SliderBlockContainer flex column layout>
        <Title>
          Тест:{' '}
          <button onClick={toggleStart}>
            {start ? 'Закончиить' : 'Начать'}
          </button>
        </Title>
        <QustionsContainer>{start && <Questions />}</QustionsContainer>
      </SliderBlockContainer>
      {result.length > 0 && (
        <SliderBlockContainer>
          <Title>Результат:</Title>
          {result.map((result, index) => (
            <div key={`result${index}`}>
              <Text>Вопрос {result.number}</Text>{' '}
              <Text color={result.isRight ? 'green' : 'red'}>
                {result.isRight ? 'Верно' : 'Не верно'}
              </Text>
            </div>
          ))}
        </SliderBlockContainer>
      )}
      <DialogWindow open={openAppoint} onClose={toggleAppoint}>
        <EditAppoint onClose={toggleAppoint} />
      </DialogWindow>
    </S.QuizeSlideContent>
  );
};

export default QuizeSlideContent;
