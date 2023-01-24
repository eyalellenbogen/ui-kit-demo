import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { CardDemo } from './app/card-demo/card-demo';
import { ListDemo } from './app/list-demo/list-demo';

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/card" /> },
  {
    path: '/list',
    element: <ListDemo></ListDemo>,
  },
  {
    path: '/card',
    element: <CardDemo></CardDemo>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
