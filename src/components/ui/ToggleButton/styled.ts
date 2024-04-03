import styled from 'styled-components';

interface ToggleButtonProps {
  $fullWidth?: boolean;
  $isSelected?: boolean;
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  border: 1px solid rgb(133, 0, 158);
  border-right: none;
  background-color: ${({ $isSelected }) =>
    $isSelected ? 'rgb(133, 0, 158)' : '#FFF'};
  color: ${({ $isSelected }) => ($isSelected ? '#fff' : 'rgb(133, 0, 158)')};
  cursor: pointer;
  font-family: CeraCY, sans-serif;
  padding: 0.2rem 0.5rem;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'};
  transition: background-color 0.3s, color 0.3s;
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-right: 1px solid rgb(133, 0, 158);
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${({ $isSelected }) =>
        $isSelected ? 'rgb(133, 0, 158, 60%)' : 'rgb(0 0 0 / 9%)'};
    }
  }
`;
