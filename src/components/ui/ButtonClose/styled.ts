import styled from 'styled-components';
import Close from '../../../assets/images/close.svg';

export const ButtonClose = styled.div`
  background-color: #8500a2;
  align-self: flex-start;
  padding: 0.5rem;
  border-radius: 20px 0 0 20px;
`;

export const ButtonCloseCircle = styled.div`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-radius: 40px;
  display: flex;
  cursor: pointer;
  transition: border 0.3s, transform 0.3s;

  &:hover {
    border: 1px solid #fff;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const ButtonCloseIcon = styled(Close)`
  fill: #fff;
  width: 20px;
  height: 20px;
`;
