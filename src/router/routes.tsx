import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/layout/AppLayout';
import Login from '@/pages/auth/Login';

export const routes: RouteObject[] = [
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
        index: true,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  }
];

export default routes; 