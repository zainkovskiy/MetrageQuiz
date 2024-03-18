import { HTMLMotionProps, motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonStep = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DotGroup = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

interface DotProps {
  $active: boolean;
}
export const Dot = styled(motion.div)<DotProps>`
  width: 8px;
  height: 8px;
  border-radius: 40px;
  background-color: ${({ $active }) => ($active ? '#8500a2' : '#ccc')};
  transform: ${({ $active }) => $active && 'scale(1.3)'};
  transition: transform 0.3s, background-color 0.3s;
`;
