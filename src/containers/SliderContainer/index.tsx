import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Await } from 'react-router-dom';
import * as S from './styled';
import ButtonClose from '../../components/ui/ButtonClose';
import { variantsBackground, variantsContent } from './variants';

interface ISliderContainer<T> {
  onClose: () => void;
  children?: React.ReactNode;
  awaitArg: T;
}
const SliderContainer = <T,>(props: ISliderContainer<T>) => {
  const { onClose, children, awaitArg } = props;
  return (
    <AnimatePresence mode='wait'>
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
          <S.SlideQuizeContent>
            <Suspense
              fallback={
                <div
                  style={{
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 1,
                  }}
                >
                  loading...
                </div>
              }
            >
              <Await resolve={awaitArg}>{children}</Await>
            </Suspense>
          </S.SlideQuizeContent>
        </S.SlideQuizeContainer>
      </S.SlideQuize>
    </AnimatePresence>
  );
};

export default SliderContainer;
