import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid rgb(132 1 158);
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
  &:checked + ${CheckBoxContainer} {
    background-color: rgb(132 1 158);
  }
`;
