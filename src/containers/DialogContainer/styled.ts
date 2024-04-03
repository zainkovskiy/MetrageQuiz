import styled from 'styled-components';

interface DialogContainerProps {
  $width?: string;
  $height?: string;
}

export const DialogContainer = styled.div<DialogContainerProps>`
  ${({ $width }) => $width && `width: ${$width}`};
  ${({ $height }) => $height && `height: ${$height}`};
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5rem;
`;
