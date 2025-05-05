
import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  ShoppingBag, 
  FileSpreadsheet, 
  Gift, 
  CreditCard,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  roles?: Array<'admin' | 'seller' | 'buyer'>;
};

const sidebarItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: <BarChart3 className="h-5 w-5" />,
    roles: ['admin', 'seller', 'buyer'],
  },
  {
    name: 'Pages Manager',
    href: '/admin/pages',
    icon: <FileText className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'RFQ Management',
    href: '/admin/rfqs',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'User Management',
    href: '/admin/users',
    icon: <Users className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'Supplier Directory',
    href: '/admin/suppliers',
    icon: <ShoppingBag className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'Supplier Import',
    href: '/admin/import',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'Referral Program',
    href: '/admin/referrals',
    icon: <Gift className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'Subscription Plans',
    href: '/admin/plans',
    icon: <CreditCard className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: <Settings className="h-5 w-5" />,
    roles: ['admin'],
  },
  // Seller items
  {
    name: 'RFQ Inbox',
    href: '/seller/rfqs',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    roles: ['seller'],
  },
  {
    name: 'Profile Manager',
    href: '/seller/profile',
    icon: <Users className="h-5 w-5" />,
    roles: ['seller'],
  },
  {
    name: 'My Subscription',
    href: '/seller/subscription',
    icon: <CreditCard className="h-5 w-5" />,
    roles: ['seller'],
  },
  {
    name: 'Referrals',
    href: '/seller/referrals',
    icon: <Gift className="h-5 w-5" />,
    roles: ['seller'],
  },
  // Buyer items
  {
    name: 'My RFQs',
    href: '/buyer/rfqs',
    icon: <FileSpreadsheet className="h-5 w-5" />,
    roles: ['buyer'],
  },
  {
    name: 'Saved Sellers',
    href: '/buyer/saved',
    icon: <ShoppingBag className="h-5 w-5" />,
    roles: ['buyer'],
  },
  {
    name: 'Profile',
    href: '/buyer/profile',
    icon: <Users className="h-5 w-5" />,
    roles: ['buyer'],
  },
  {
    name: 'Referrals',
    href: '/buyer/referrals',
    icon: <Gift className="h-5 w-5" />,
    roles: ['buyer'],
  },
];

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { userRole, signOut } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter sidebar items based on user role
  const filteredItems = sidebarItems.filter(
    item => !item.roles || (userRole && item.roles.includes(userRole))
  );

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Determine dashboard title based on user role
  let dashboardTitle = 'Dashboard';
  if (userRole === 'admin') dashboardTitle = 'Admin Dashboard';
  else if (userRole === 'seller') dashboardTitle = 'Seller Dashboard';
  else if (userRole === 'buyer') dashboardTitle = 'Buyer Dashboard';

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 overflow-y-auto">
          <div className="flex items-center justify-center h-16 flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-gray-900">
              {dashboardTitle}
            </h1>
          </div>
          <ScrollArea className="flex-1 px-2 py-4">
            <nav className="flex-1 space-y-1 px-2">
              {filteredItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    'flex items-center justify-start w-full px-4 py-2 my-1 rounded-lg',
                    window.location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  )}
                  onClick={() => navigate(item.href)}
                >
                  {item.icon}
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                </Button>
              ))}
            </nav>
          </ScrollArea>
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="flex items-center justify-start w-full px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Sign out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity',
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMobileMenu}
      />
      <div
        className={cn(
          'lg:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white transition-transform transform',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 flex-shrink-0 px-4 border-b">
            <h1 className="text-xl font-bold text-gray-900">{dashboardTitle}</h1>
          </div>
          <ScrollArea className="flex-1 px-2 py-4">
            <nav className="flex-1 space-y-1 px-2">
              {filteredItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    'flex items-center justify-start w-full px-4 py-2 my-1 rounded-lg',
                    window.location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  )}
                  onClick={() => {
                    navigate(item.href);
                    toggleMobileMenu();
                  }}
                >
                  {item.icon}
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                </Button>
              ))}
            </nav>
          </ScrollArea>
          <div className="flex-shrink-0 p-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="flex items-center justify-start w-full px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              <span className="ml-3 text-sm font-medium">Sign out</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
