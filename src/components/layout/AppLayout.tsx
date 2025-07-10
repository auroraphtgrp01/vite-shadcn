import { Sidebar } from '@/components/layout/Sidebar';
import { Navbar } from '@/components/layout/NavBar';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const AppLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-collapse sidebar when switching to mobile for the first time
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

  // Memoize event handlers to prevent unnecessary re-renders
  const handleSidebarToggle = useCallback((collapsed: boolean) => {
    setSidebarCollapsed(collapsed);
  }, []);

  const handleMenuClick = useCallback(() => {
    // Debounce to prevent rapid clicks causing lag
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    clickTimeoutRef.current = setTimeout(() => {
      setSidebarCollapsed(!sidebarCollapsed);
    }, 50); // Small delay to debounce
  }, [sidebarCollapsed]);

  // Handle backdrop click on mobile to close sidebar
  const handleBackdropClick = useCallback(() => {
    if (isMobile && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }
  }, [isMobile, sidebarCollapsed]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onCollapse={handleSidebarToggle}
        isMobile={isMobile}
      />
      <Navbar 
        sidebarCollapsed={sidebarCollapsed} 
        isMobile={isMobile}
        onMenuClick={handleMenuClick}
      />
      
      {/* Mobile backdrop overlay */}
      {isMobile && !sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={handleBackdropClick}
        />
      )}
      
      <main 
        className={`transition-all duration-150 ease-out pt-16 ${
          isMobile 
            ? 'ml-0' 
            : sidebarCollapsed 
              ? 'ml-16' 
              : 'ml-48'
        }`}
      >
        <div className="p-3 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;