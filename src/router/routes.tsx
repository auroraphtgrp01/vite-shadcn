import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/layout/AppLayout';
import Login from '@/pages/auth/Login';
import TutorialPage from '@/pages/tutorial';
import TutorialPage2 from '@/pages/tuto2';
import TutorialPage3 from '@/pages/tuto3';

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
        path: 'tutorial',
        element: <TutorialPage />,
      },
      {
        path: 'tutorial2',
        element: <TutorialPage2 />,
      },
      {
        path: 'tutorial3',
        element: <TutorialPage3 />,
      },
      {
        path: '*',
        element: <NotFound />,
      }
    ]
  }
];

export default routes; 