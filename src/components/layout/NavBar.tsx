import { Search, Bell, User, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  sidebarCollapsed: boolean;
  isMobile: boolean;
  onMenuClick: () => void;
}

export function Navbar({ sidebarCollapsed, isMobile, onMenuClick }: NavbarProps) {
  return (
    <nav className={`fixed top-0 z-40 bg-background border-b border-border transition-all duration-300 ease-in-out ${
      isMobile 
        ? 'left-0 w-full' 
        : sidebarCollapsed 
          ? 'left-16 w-[calc(100vw-4rem)]' 
          : 'left-48 w-[calc(100vw-12rem)]'
    }`}>
      <div className="flex items-center justify-between px-3 md:px-6 h-16">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMenuClick}
            className="mr-2 flex-shrink-0"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}

        {/* Search Bar */}
        <div className={`flex-1 mr-3 md:mr-8 ${isMobile ? 'max-w-none' : 'max-w-md'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder={isMobile ? "Search..." : "Search..."}
              className="pl-10 pr-4 py-2 w-full text-sm"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-1 md:space-x-4 flex-shrink-0">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-4 w-4 md:h-5 md:w-5" />
                <Badge className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center p-0">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">New user registered</span>
                  <span className="text-sm text-muted-foreground">2 minutes ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">Server maintenance scheduled</span>
                  <span className="text-sm text-muted-foreground">1 hour ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col space-y-1">
                  <span className="font-medium">Database backup completed</span>
                  <span className="text-sm text-muted-foreground">3 hours ago</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-6 w-6 md:h-8 md:w-8">
                  <AvatarImage src="/api/placeholder/32/32" alt="User" />
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}