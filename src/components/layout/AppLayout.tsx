import { Navbar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const AppLayout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleMenuClick = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar 
        isMobile={isMobile}
        onMenuClick={handleMenuClick}
      />
      
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;