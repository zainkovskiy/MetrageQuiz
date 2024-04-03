import styled from 'styled-components';

interface ToggleButtonGroupProps {
  $fullWidth?: boolean;
}
export const ToggleButtonGroup = styled.div<ToggleButtonGroupProps>`
  display: flex;
  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'};
`;
