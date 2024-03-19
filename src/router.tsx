import MainPage from './pages/MainPage';
import { LoaderFunction, createBrowserRouter } from 'react-router-dom';
import SlideQuize, { loaderQuize } from './pages/SlideQuize';

export const router = createBrowserRouter([
  {
    path: '/quize',
    element: <MainPage />,
    children: [
      {
        path: ':id',
        element: <SlideQuize />,
        loader: loaderQuize as LoaderFunction,
      },
    ],
  },
]);
