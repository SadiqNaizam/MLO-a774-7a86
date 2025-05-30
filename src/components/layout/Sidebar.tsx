import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutGrid,
  Users,
  FileText,
  FileSpreadsheet,
  ShoppingBasket,
  Mail,
  Archive,
  CalendarDays,
  HelpCircle,
  Settings,
  Box
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
  isActive?: boolean;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, href: '#', isActive: true },
  { id: 'leads', label: 'Leads', icon: Users, href: '#' },
  { id: 'customers', label: 'Customers', icon: Users, href: '#' },
  { id: 'proposals', label: 'Proposals', icon: FileText, href: '#', badge: 3 },
  { id: 'invoices', label: 'Invoices', icon: FileSpreadsheet, href: '#' },
  { id: 'items', label: 'Items', icon: ShoppingBasket, href: '#' },
  { id: 'mail', label: 'Mail', icon: Mail, href: '#' },
  { id: 'shoebox', label: 'Shoebox', icon: Archive, href: '#' },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays, href: '#' },
];

const footerNavItems: NavItem[] = [
  { id: 'help1', label: 'Help', icon: HelpCircle, href: '#' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#' },
  { id: 'help2', label: 'Help', icon: HelpCircle, href: '#' }, // Context had two 'Help' items, keeping for consistency
];

interface SidebarProps {
  isMobileSidebarOpen: boolean;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileSidebarOpen, className }) => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-40 flex h-screen w-64 flex-col bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-in-out",
        "px-4", // As per Layout Requirements: sidebar.layout
        isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0",
        className
      )}
      aria-label="Sidebar"
    >
      <div className="flex h-[70px] items-center justify-center border-b border-gray-700">
        <Box size={32} className="mr-2 text-accentBlue" />
        <span className="text-2xl font-bold">bo</span>
      </div>
      <nav className="flex-grow overflow-y-auto py-6">
        <ul className="space-y-1">
          {mainNavItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  'flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  item.isActive
                    ? 'bg-accentBlue/20 text-white'
                    : 'hover:bg-accentBlue/10 hover:text-white'
                )}
              >
                <item.icon size={18} className="mr-3 flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-accentRed px-2 py-0.5 text-xs font-semibold text-white">
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="py-6 border-t border-gray-700">
        <ul className="space-y-1">
          {footerNavItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="flex items-center rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accentBlue/10 hover:text-white"
              >
                <item.icon size={18} className="mr-3 flex-shrink-0" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
