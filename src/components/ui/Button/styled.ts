import styled from 'styled-components';
import { colors } from './theme';

interface IButtonStyleProps {
  $fullWidth?: boolean;
  color: 'primary' | 'error' | 'info';
}

export const ButtonStyle = styled.button<IButtonStyleProps>`
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  font-family: CeraCY, sans-serif;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  width: ${({ $fullWidth }) => $fullWidth && '100%'};
  white-space: nowrap;
  color: ${({ theme, color }) => (theme.color ? colors[color].bg : '#fff')};
  background-color: ${({ theme, color }) =>
    theme.bg ? colors[color].bg : '#fff'};
  border: ${({ theme, color }) =>
    theme.border ? colors[color].border : '1px solid transparent'};
  transition: color 0.3s, background-color 0.3s, border 0.3s;
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  @media (hover: none) {
    &:active {
      background-color: ${({ theme, color }) =>
        theme.active ? colors[color].active : '#fff'};
    }
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ color }) => colors[color].hover};
      color: ${({ theme, color }) =>
        theme.hoverText && colors[color].hoverText};
    }
    &:active {
      background-color: ${({ theme, color }) =>
        theme.active ? colors[color].active : '#fff'};
      color: ${({ theme }) => theme.hoverText && '#fff'};
    }
  }
`;
