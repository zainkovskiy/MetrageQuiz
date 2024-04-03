import styled, { css } from 'styled-components';

interface LabelStyleProps {
  $fullWidth?: boolean;
  $position?: 'left' | 'right' | 'top' | 'bottom' | 'top-left' | 'top-right';
  $gap?: string;
  $noWrap: boolean;
}

export const LabelStyle = styled.label<LabelStyleProps>`
  display: flex;
  ${({ $position }) => $position && getPositon($position)};
  ${({ $gap }) => $gap && `gap: ${$gap}`};
  ${({ $noWrap }) => $noWrap && 'white-space: nowrap;'};
  font-size: 14px;
  font-family: CeraCY, sans-serif;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%'}
`;

const getPositon = (position: string) => {
  switch (position) {
    case 'left':
      return leftPosition;
    case 'right':
      return rightPosition;
    case 'top':
      return topPosition;
    case 'bottom':
      return bottomPosition;
    case 'top-left':
      return topLeftPosition;
    case 'top-right':
      return topRightPosition;
    default:
      break;
  }
};

const leftPosition = css`
  align-items: center;
`;
const rightPosition = css`
  flex-direction: row-reverse;
  align-items: center;
`;
const topPosition = css`
  flex-direction: column;
  align-items: center;
`;
const bottomPosition = css`
  flex-direction: column-reverse;
  align-items: center;
`;
const topLeftPosition = css`
  flex-direction: column;
  align-items: flex-start;
`;
const topRightPosition = css`
  flex-direction: column;
  align-items: flex-end;
`;
