import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/layout/AppLayout';
import Login from '@/pages/auth/Login';
import UserPage from '@/pages/user';
import SystemPage from '@/pages/system';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
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
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'system',
        element: <SystemPage />,
      },
    ]
  }
];

export default routes; 