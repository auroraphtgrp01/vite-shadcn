import { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/layout/AppLayout';
import Login from '@/pages/auth/Login';
import HomePage from '@/pages/HomePage';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes; 