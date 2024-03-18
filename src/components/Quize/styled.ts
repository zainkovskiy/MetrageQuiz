import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface QuizeStyle {
  $color?: string;
}

export const QuizeLink = styled(Link)<QuizeStyle>`
  border-radius: 5px;
  color: #000;
  background-color: ${({ $color }) => ($color ? $color : '#c586cf')};
  margin-right: 0.5rem;
  text-decoration: none;
  transition: opacity 0.3s, filter 0.3s;
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
    }
  }
`;
export const Quize = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
  pointer-events: none;
`;
