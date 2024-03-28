import React, { useState } from 'react';
import * as S from './styled';
import SliderBlockContainer from '../../containers/SliderBlockContainer';
import { Link, useAsyncValue } from 'react-router-dom';
import { IQuizeSlide } from '../../core/types/quize';
import Text from '../ui/Text';
import moment from 'moment';
import Title from '../ui/Title';
import VideoPlayer from '../VideoPlayer';
import QustionsContainer from '../../containers/QustionsContainer';
import Questions from '../Questions';

const QuizeSlideContent: React.FC = () => {
  const [start, setStart] = useState(false);
  const quize = useAsyncValue() as IQuizeSlide;
  const toggleStart = () => {
    setStart(!start);
  };
  return (
    <S.QuizeSlideContent>
      <SliderBlockContainer flex jc='space-between'>
        <Text>ID: {quize.UID}</Text>
        {quize.dueDate && (
          <Text>Пройдено: {moment(quize.dueDate).format('DD.MM.YYYY')} </Text>
        )}
      </SliderBlockContainer>
      <SliderBlockContainer>
        <Link to={`/quize/edit/${quize.UID}`}>edit</Link>
        <button>назначить</button>
      </SliderBlockContainer>
      <SliderBlockContainer flex jc='flex-end'>
        <Text>Сотрудник: {quize.user.fullName}</Text>
      </SliderBlockContainer>
      <SliderBlockContainer flex column>
        <Title>Материал:</Title>
        <VideoPlayer src={quize.youtubelink} />
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
    </S.QuizeSlideContent>
  );
};

export default QuizeSlideContent;
