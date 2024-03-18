import { store } from './core/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { GlobalStyle } from './styles/globalStyles';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <GlobalStyle />
  </Provider>
);
