import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
      <SidebarProvider>
      <AppSidebar />
    <div className="">
      <main className="">
      <SidebarTrigger />
        <Outlet />
      </main>
    </div>
    </SidebarProvider>
  );
};

export default AppLayout;