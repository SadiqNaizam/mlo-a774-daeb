import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Package,
  Calendar,
  HelpCircle,
  Settings,
  Icon,
  Box
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: Icon;
  href: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { label: 'Leads', icon: Users, href: '#' },
  { label: 'Customers', icon: User, href: '#' },
  { label: 'Proposals', icon: FileText, href: '#' },
  { label: 'Invoices', icon: Receipt, href: '#' },
  { label: 'Items', icon: ShoppingCart, href: '#' },
  { label: 'Mail', icon: Mail, href: '#' },
  { label: 'Shoebox', icon: Package, href: '#' },
  { label: 'Calendar', icon: Calendar, href: '#' },
];

const supportNavItems: NavItem[] = [
  { label: 'Help', icon: HelpCircle, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
];

const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
  const { label, icon: Icon, href, active } = item;
  return (
    <a href={href} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          'w-full justify-start text-base font-normal',
          active ? 'bg-secondary text-primary' : 'text-foreground/80'
        )}
      >
        <Icon className="mr-3 h-5 w-5" />
        {label}
      </Button>
    </a>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-full max-h-screen flex-col">
      <div className="flex h-16 items-center border-b px-4 lg:px-6">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <div className='rounded-md bg-foreground p-1.5'>
            <Box className="h-6 w-6 text-background" />
          </div>
          <span className="ml-2 text-lg">Dashboard</span>
        </a>
      </div>
      <nav className="flex flex-1 flex-col justify-between overflow-y-auto p-4">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>
        <div className="space-y-1">
          {supportNavItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;