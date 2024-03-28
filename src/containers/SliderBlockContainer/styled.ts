import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface SliderBlockContainerStyleProps {
  $column?: boolean;
  $flex?: boolean;
  $full?: boolean;
  $jc?: 'center' | 'space-between' | 'space-around' | 'flex-start' | 'flex-end';
  $ai?: 'center' | 'flex-start' | 'flex-end';
}

export const SliderBlockContainer = styled(
  motion.div
)<SliderBlockContainerStyleProps>`
  border-radius: 5px;
  background-color: #fff;
  padding: 0.5rem;
  box-sizing: border-box;
  ${({ $flex }) => $flex && 'display: flex;'};
  ${({ $column }) => $column && 'flex-direction: column;'};
  ${({ $jc }) => $jc && `justify-content: ${$jc};`};
  ${({ $ai }) => $ai && `justify-content: ${$ai};`};
  gap: 0.5rem;
  ${({ $full }) =>
    $full &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      border-radius: 0;
    `}
`;
