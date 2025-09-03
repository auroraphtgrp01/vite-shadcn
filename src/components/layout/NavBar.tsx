import { Menu, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface NavbarProps {
  isMobile: boolean;
  onMenuClick: () => void;
}

export function Navbar({ isMobile, onMenuClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="text-foreground font-bold text-xl">Nailism</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                {t('navbar.home')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.services')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.about')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.contact')}
              </a>
            </div>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <LanguageToggle />
            
            {/* Theme Toggle */}
            <ModeToggle />
            
            {/* Contact Button */}
            <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{t('navbar.contactBtn')}</span>
            </Button>

            {/* Booking Button */}
            <Button size="sm" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{t('navbar.bookingBtn')}</span>
            </Button>

            {/* Mobile Menu Button */}
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-foreground hover:text-primary transition-colors font-medium">
                {t('navbar.home')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.services')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.about')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('navbar.contact')}
              </a>
              <div className="pt-3 border-t border-border">
                <Button variant="outline" size="sm" className="w-full mb-2 flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{t('navbar.contactBtn')}</span>
                </Button>
                <Button size="sm" className="w-full flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{t('navbar.bookingBtn')}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}