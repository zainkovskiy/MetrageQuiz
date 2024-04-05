import styled from 'styled-components';

export const NewQuestion = styled.div`
  background-color: #eee;
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const NewQuestionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;
export const NewQuestionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
`;
export const NewQuestionImg = styled.img`
  height: 150px;
  border-radius: 5px;
`;
export const NewQuestionList = styled.ul`
  margin: 0.5rem 0;
  padding-left: 2rem;
`;
export const NewQuestionListItem = styled.li<{ $isRight: boolean }>`
  &::marker {
    content: attr(${({ $isRight }) => ($isRight ? 'data-icon' : 'data-dot')});
    ${({ $isRight }) => $isRight && 'color: green;'};
  }
`;
