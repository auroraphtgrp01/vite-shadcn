import { Sidebar } from '@/components/layout/app-sidebar';
import { Navbar } from '@/components/layout/NavBar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onCollapse={setSidebarCollapsed} 
      />
      <Navbar sidebarCollapsed={sidebarCollapsed} />
      <Outlet />
    </div>
  );
};

export default AppLayout;