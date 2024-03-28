import React from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './styled';
import ButtonClose from '../../components/ui/ButtonClose';
import { variantsBackground, variantsContent } from './variants';

interface ISliderContainer {
  onClose: () => void;
  children?: React.ReactNode;
  open: boolean;
}
const SliderContainer = (props: ISliderContainer) => {
  const { onClose, children, open } = props;
  return (
    <AnimatePresence mode='wait'>
      {open && (
        <S.SlideQuize
          variants={variantsBackground}
          initial='close'
          animate='open'
          exit='close'
        >
          <S.SlideQuizeContainer
            variants={variantsContent}
            initial='close'
            animate='open'
            exit='close'
            onClick={(e) => e.stopPropagation()}
          >
            <ButtonClose onClose={onClose} />
            <S.SlideQuizeContent>{children}</S.SlideQuizeContent>
          </S.SlideQuizeContainer>
        </S.SlideQuize>
      )}
    </AnimatePresence>
  );
};

export default SliderContainer;
