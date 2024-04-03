import styled from 'styled-components';

interface InputContainerProps {
  $isError?: boolean;
}
interface InputLabelProps {
  $labelSize?: number;
  $fullWidth?: boolean;
  $width?: string;
}

export const InputLabel = styled.label<InputLabelProps>`
  font-size: ${({ $labelSize }) => ($labelSize ? $labelSize + 'px' : '14px')};
  font-family: CeraCY, sans-serif;
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth, $width }) =>
    $fullWidth ? '100%' : $width ? $width : 'auto'};
`;
export const InputContainer = styled.div<InputContainerProps>`
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.2rem 0.5rem;
  box-sizing: border-box;
  transition: border 0.3s;
  &:has(input:focus) {
    border: 1px solid
      ${({ $isError }) => ($isError ? 'rgb(253 82 82)' : 'rgb(133, 0, 158)')};
  }
`;
export const InputBorder = styled.div<InputContainerProps>`
  border-radius: 6px;
  border: 1px solid
    ${({ $isError }) => ($isError ? 'rgb(253 82 82)' : 'rgb(133, 0, 158)')};
  box-sizing: border-box;
  &:has(input:disabled) {
    border: 1px solid #ccc;
    background-color: #eee;
    opacity: 0.8;
  }
`;
export const InputStyle = styled.input`
  font-family: CeraCY, sans-serif;
  font-size: 14px;
  outline: none;
  border: none;
  width: 100%;
`;
