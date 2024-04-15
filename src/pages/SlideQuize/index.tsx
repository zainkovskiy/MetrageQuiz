import React, { Suspense, useState } from 'react';
import { Await } from 'react-router-dom';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';
import { getOneQuize } from '../../core/api';
import { IQuizeSlide } from '../../core/types/quize';
import SliderContainer from '../../containers/SliderContainer';
import QuizeSlideContent from '../../components/QuizeSlideContent';

interface LoaderData {
  quize: IQuizeSlide;
}

const SlideQuize: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const { quize } = useLoaderData() as LoaderData;

  const handleClose = () => {
    setTimeout(() => {
      navigate('/quize');
    }, 300);
    setOpen(false);
  };
  return (
    <SliderContainer onClose={handleClose} open={open}>
      <Suspense
        fallback={
          <div
            style={{
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            loading...
          </div>
        }
      >
        <Await resolve={quize}>
          <QuizeSlideContent />
        </Await>
      </Suspense>
    </SliderContainer>
  );
};
export const loaderQuize: LoaderFunction = async ({ params }) => {
  return { quize: getOneQuize(params.id || '') };
};

export default SlideQuize;
