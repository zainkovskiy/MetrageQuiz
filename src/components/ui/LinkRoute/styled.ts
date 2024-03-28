import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface LinkRouteStyleProps {
  $size?: number;
}
export const LinkRoute = styled(Link)<LinkRouteStyleProps>`
  font-size: ${({ $size }) => ($size ? `${$size}px` : '12px')};
  text-decoration: none;
  color: #84019e;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`;
