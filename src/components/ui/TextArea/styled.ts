import styled from 'styled-components';

//TODO: выексти lavel в отдельный компонент
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

export const TextArea = styled.textarea`
  font-family: CeraCY, sans-serif;
  font-size: 14px;
  padding: 0.2rem;
  box-sizing: border-box;
  resize: none;
  border: 1px solid rgb(133, 0, 158);
  outline: 1px solid transparent;
  transition: outline 0.3s;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: 1px solid rgb(133, 0, 158);
  }
`;
