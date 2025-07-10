import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  User,
  Settings, 
  FileText, 
  Calendar,
  Mail,
  HelpCircle,
  PanelLeftClose,
  PanelLeft,
  LogOut,
  Shield,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  isMobile: boolean;
}

interface SidebarGroupProps {
  title: string;
  items: typeof menuItems;
  collapsed: boolean;
  isMobile: boolean;
  renderMenuItem: (item: typeof menuItems[0]) => React.ReactNode;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true, category: 'main' },
  { icon: BarChart3, label: 'Analytics', active: false, category: 'main' },
  { icon: FileText, label: 'Documents', active: false, category: 'main' },
  { icon: Calendar, label: 'Calendar', active: false, category: 'tools' },
  { icon: Mail, label: 'Messages', active: false, category: 'tools' },
  { icon: User, label: 'User', active: false, category: 'setting' },
  { icon: Shield, label: 'System', active: false, category: 'setting' },
  { icon: HelpCircle, label: 'Help', active: false, category: 'setting' },
];

const mainItems = menuItems.filter(item => item.category === 'main');
const toolItems = menuItems.filter(item => item.category === 'tools');
const settingItems = menuItems.filter(item => item.category === 'setting');

function SidebarGroup({ title, items, collapsed, isMobile, renderMenuItem }: SidebarGroupProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    if (!collapsed) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="px-3 space-y-1">
      {!collapsed && (
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpanded}
          className="w-full px-3 py-2 h-auto justify-start hover:bg-accent/50 transition-colors duration-150"
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {title}
            </h2>
            {isExpanded ? (
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            )}
          </div>
        </Button>
      )}
      
      <div className={cn(
        "overflow-hidden transition-all duration-200 ease-out",
        isExpanded || collapsed ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-1">
          {items.map(renderMenuItem)}
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ collapsed, onCollapse, isMobile }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderMenuItem = (item: typeof menuItems[0]) => {
    const menuButton = (
      <Button
        key={item.label}
        variant={item.active ? "default" : "ghost"}
        size={collapsed ? "icon" : "sm"}
        className={cn(
          "w-full group relative will-change-transform",
          "transition-all duration-100 ease-out",
          collapsed ? "h-10 px-0" : "justify-start h-10 px-3",
          item.active 
            ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90" 
            : "hover:bg-accent hover:text-accent-foreground",
          !collapsed && "text-sm font-medium"
        )}
        onMouseEnter={() => setHoveredItem(item.label)}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <item.icon className={cn(
          "h-4 w-4 flex-shrink-0",
          !collapsed && "mr-2"
        )} />
        {!collapsed && (
          <span className="truncate">{item.label}</span>
        )}
        
        {/* Tooltip for collapsed state */}
        {collapsed && hoveredItem === item.label && !isMobile && (
          <div className="absolute left-full ml-3 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-md whitespace-nowrap z-50 shadow-md border border-border animate-in fade-in-0 zoom-in-95 duration-150">
            {item.label}
          </div>
        )}
      </Button>
    );

    if (collapsed && !isMobile) {
      return (
        <TooltipProvider key={item.label}>
          <Tooltip>
            <TooltipTrigger asChild>
              {menuButton}
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              {item.label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return menuButton;
  };

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-card border-r border-border flex flex-col will-change-transform",
      "transition-all duration-150 ease-out",
      isMobile 
        ? collapsed 
          ? "-translate-x-full opacity-0 pointer-events-none w-64 z-50" 
          : "translate-x-0 opacity-100 w-64 z-50"
        : collapsed 
          ? "w-16 z-30" 
          : "w-48 z-30"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-border bg-card/50">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-sm">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-semibold text-sm">Dashboard</span>
              <span className="text-muted-foreground text-xs">Admin Panel</span>
            </div>
          </div>
        )}
        
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCollapse(!collapsed)}
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-100 ease-out"
          >
            {collapsed ? 
              <PanelLeft className="h-4 w-4" /> : 
              <PanelLeftClose className="h-4 w-4" />
            }
          </Button>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-hidden py-4 space-y-4">
        {/* Main Navigation Group */}
        <SidebarGroup
          title="Main"
          items={mainItems}
          collapsed={collapsed}
          isMobile={isMobile}
          renderMenuItem={renderMenuItem}
        />

        <Separator className="mx-3" />

        {/* Tools Group */}
        <SidebarGroup
          title="Tools"
          items={toolItems}
          collapsed={collapsed}
          isMobile={isMobile}
          renderMenuItem={renderMenuItem}
        />

        <Separator className="mx-3" />

        {/* Setting Group */}
        <SidebarGroup
          title="Setting"
          items={settingItems}
          collapsed={collapsed}
          isMobile={isMobile}
          renderMenuItem={renderMenuItem}
        />
      </div>

      {/* Footer */}
      <div className="border-t border-border bg-card/50 p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center ring-2 ring-background">
            <span className="text-muted-foreground text-sm font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Administrator</p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {collapsed && !isMobile && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-full h-8 mt-2 text-muted-foreground hover:text-foreground hover:bg-accent"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="font-medium">
                Sign out
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        
        {collapsed && isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="w-full h-8 mt-2 text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}