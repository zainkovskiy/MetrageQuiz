import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import { useAsyncValue } from 'react-router-dom';
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
import Button from '../ui/Button';
import LinkRoute from '../ui/LinkRoute';

const QuizeSlideContent: React.FC = () => {
  const quize = useAsyncValue() as IQuizeSlide;
  const [start, setStart] = useState(false);
  const firstMount = useRef(true);
  const [openAppoint, setOpenAppoint] = useState(false);
  const [openFullScreen, setOpenFullScreen] = useState(false);
  const [result, setResult] = useState<IResult[]>(quize?.resultGrid || []);
  useEffect(() => {
    if (firstMount.current) return;
    if (start) return;
    getResult(quize).then((data) => {
      if (data?.resultGrid && data?.resultGrid?.length > 0) {
        setResult(data?.resultGrid);
      }
    });
  }, [start]);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
    }
  }, []);
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
        <S.QuizeWrap>
          <Text>Попыток: {quize.numberOfAttempts}</Text>
          {quize.dueDate && (
            <Text>Пройдено: {moment(quize.dueDate).format('DD.MM.YYYY')} </Text>
          )}
        </S.QuizeWrap>
        {quize.rightsEdit && (
          <S.QuizeWrap>
            <LinkRoute to={`/quize/edit/${quize.UID}`}>Редактировать</LinkRoute>
            <Button onClick={toggleAppoint}>Назначить</Button>
          </S.QuizeWrap>
        )}
      </SliderBlockContainer>
      <SliderBlockContainer flex column full={openFullScreen}>
        <Title>
          Материал:{' '}
          <Button variant='line' onClick={toggleFullScreen}>
            {openFullScreen ? 'Свернуть' : 'Развернуть'}
          </Button>
        </Title>
        <VideoPlayer
          src={quize.youtubelink}
          height={openFullScreen ? '100%' : ''}
        />
      </SliderBlockContainer>
      <SliderBlockContainer flex column layout>
        <Title>
          Тест:{' '}
          <Button onClick={toggleStart} variant='line'>
            {start ? 'Закончить' : 'Начать'}
          </Button>
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
