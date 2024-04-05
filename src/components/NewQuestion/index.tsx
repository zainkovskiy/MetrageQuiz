import React from 'react';
import { IQuestion } from '../../core/types/questions';
import * as S from './styled';
import Button from '../ui/Button';
import Text from '../ui/Text';
import Done from '../../assets/images/done.svg';

interface INewQuestion {
  question: IQuestion;
  index: number;
  handleEidtQuestion: (question: IQuestion) => void;
  removeQuestion: (UID: number) => void;
}

const NewQuestion: React.FC<INewQuestion> = ({
  question,
  index,
  handleEidtQuestion,
  removeQuestion,
}) => {
  return (
    <S.NewQuestion>
      <S.NewQuestionButtons>
        <Button
          variant='line'
          onClick={() => {
            handleEidtQuestion(question);
          }}
        >
          Редактировать
        </Button>
        <Button
          variant='outline'
          color='error'
          onClick={() => {
            removeQuestion(question.UID);
          }}
        >
          Удалить
        </Button>
      </S.NewQuestionButtons>
      <S.NewQuestionContainer>
        <div>
          <Text size={14}>
            {index}. {question.question}
          </Text>
          <S.NewQuestionList>
            {question.answers.map((answer) => (
              <S.NewQuestionListItem
                key={answer.UID}
                $isRight={answer.isRightOption}
                data-dot='&#8226;  '
                data-icon='&#10004; '
              >
                <Text>{answer.title}</Text>
              </S.NewQuestionListItem>
            ))}
          </S.NewQuestionList>
        </div>
        {question.imageUrl && <S.NewQuestionImg src={question.imageUrl} />}
      </S.NewQuestionContainer>
    </S.NewQuestion>
  );
};

export default NewQuestion;
