import MainPage from './pages/MainPage';
import { LoaderFunction, createBrowserRouter } from 'react-router-dom';
import SlideQuize, { loaderQuize } from './pages/SlideQuize';
import SlideNew, { loaderQuizeEdit } from './pages/SlideNew';

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
      {
        path: 'new',
        element: <SlideNew />,
      },
      {
        path: 'edit/:id',
        element: <SlideNew />,
        loader: loaderQuizeEdit as LoaderFunction,
      },
    ],
  },
]);
