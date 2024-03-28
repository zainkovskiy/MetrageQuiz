import { motion } from 'framer-motion';
import styled from 'styled-components';

export const DialogWindow = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 40%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
