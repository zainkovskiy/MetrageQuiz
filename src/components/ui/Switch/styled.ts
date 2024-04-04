import styled from 'styled-components';

export const Switch = styled.div`
  border: solid 1px grey;
  border-radius: 999px;
  display: inline-flex;
  justify-content: flex-start;
  cursor: pointer;
  width: 48px;
  background-color: #ddd;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:has(input:checked) {
    background-color: rgb(132 1 158);
  }
  &:has(input:disabled) {
    opacity: 0.5;
  }
`;
export const SwitchButton = styled.div`
  border-radius: 50%;
  border: solid 1px grey;
  width: 24px;
  height: 24px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  transition: transform 0.4s ease;
  pointer-events: none;
`;
export const SwitchHiddenInput = styled.input`
  display: none;
  pointer-events: none;
  &:checked + ${SwitchButton} {
    transform: translateX(100%);
  }
`;
