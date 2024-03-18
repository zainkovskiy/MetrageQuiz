import styled from 'styled-components';

interface TextStyleProps {
  $size?: number;
  $color?: string;
  $bold?: boolean;
}

export const Text = styled.span<TextStyleProps>`
  font-size: ${({ $size }) => ($size ? `${$size}px` : '12px')};
  color: ${({ $color }) => $color && `${$color}`};
  ${({ $bold }) => $bold && 'font-family: CeraCYBold, sans-serif;'};
`;
