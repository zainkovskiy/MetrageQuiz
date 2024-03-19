import React from 'react';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';
import { getOneQuize } from '../../core/api';
import { IQouzeSlide } from '../../core/types/quize';
import SliderContainer from '../../containers/SliderContainer';
import QuizeSlideContent from '../../components/QuizeSlideContent';

interface LoaderData {
  quize: IQouzeSlide;
}

const SlideQuize: React.FC = () => {
  const navigate = useNavigate();
  const { quize } = useLoaderData() as LoaderData;

  const handleClose = () => {
    navigate('/quize');
  };
  return (
    <SliderContainer<IQouzeSlide> onClose={handleClose} awaitArg={quize}>
      <QuizeSlideContent />
    </SliderContainer>
  );
};
export const loaderQuize: LoaderFunction = async ({ params }) => {
  console.log(params.id);
  return { quize: getOneQuize() };
};

export default SlideQuize;
