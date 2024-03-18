import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SlideQuize = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #00000066;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  overflow: hidden;
`;
export const SlideQuizeContainer = styled(motion.div)`
  display: flex;
  width: 60%;
`;
export const SlideQuizeContent = styled.div`
  width: 100%;
  background-color: #8500a2;
  padding: 0.5rem;
  overflow: auto;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
