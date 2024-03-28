import React, { Suspense, useState } from 'react';
import SliderContainer from '../../containers/SliderContainer';
import {
  Await,
  LoaderFunction,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import QuizeSlideNew from '../../components/QuizeSlideNew';
import { getOneQuize } from '../../core/api';
import { IQuizeSlide } from '../../core/types/quize';

interface LoaderData {
  quize: IQuizeSlide;
}

const SlideNew: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const { quize } = (useLoaderData() as LoaderData) || {};
  const handleClose = () => {
    setTimeout(() => {
      navigate('/quize');
    }, 300);
    setOpen(false);
  };
  return (
    <SliderContainer open={open} onClose={handleClose}>
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
          <QuizeSlideNew />
        </Await>
      </Suspense>
    </SliderContainer>
  );
};
export const loaderQuizeEdit: LoaderFunction = async ({ params }) => {
  console.log(params.id);
  return { quize: getOneQuize() };
};
export default SlideNew;
