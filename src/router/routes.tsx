import { RouteObject } from 'react-router-dom';
import HomePage from '@/pages/home';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/layout/AppLayout';
import Login from '@/pages/auth/Login';
import AnalyticsPage from '@/pages/analytics';
import DocumentsPage from '@/pages/documents';
import CalendarPage from '@/pages/calendar';
import MessagesPage from '@/pages/messages';
import UserPage from '@/pages/user';
import SystemPage from '@/pages/system';
import HelpPage from '@/pages/help';

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
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'documents',
        element: <DocumentsPage />,
      },
      {
        path: 'calendar',
        element: <CalendarPage />,
      },
      {
        path: 'messages',
        element: <MessagesPage />,
      },
      {
        path: 'user',
        element: <UserPage />,
      },
      {
        path: 'system',
        element: <SystemPage />,
      },
      {
        path: 'help',
        element: <HelpPage />,
      },
    ]
  }
];

export default routes; 