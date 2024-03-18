import React from 'react';
import { LoaderFunction, useLoaderData, useNavigate } from 'react-router-dom';
import { getOneQuize } from '../../core/api';
import { IQouzeSlide } from '../../core/types/quize';
import SliderContainer from '../../containers/SliderContainer';

interface LoaderData {
  quize: IQouzeSlide;
}

const SlideQuize: React.FC = () => {
  const navigate = useNavigate();
  const { quize } = useLoaderData() as LoaderData;

  const handleClose = () => {
    navigate('/');
  };
  return (
    <SliderContainer<IQouzeSlide> onClose={handleClose} awaitArg={quize}>
      test
    </SliderContainer>
  );
};
export const loaderQuize: LoaderFunction = async ({ params }) => {
  console.log(params.id);
  return { quize: getOneQuize() };
};

export default SlideQuize;
