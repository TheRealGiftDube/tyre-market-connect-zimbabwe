
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, UserRound, FileText, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const AdminDashboard = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalRfqs: 0,
    totalSuppliers: 0,
    pendingRfqs: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        // Get total users count
        const { count: usersCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        // Get total RFQs count
        const { count: rfqsCount } = await supabase
          .from('rfqs')
          .select('*', { count: 'exact', head: true });

        // Get pending RFQs count
        const { count: pendingRfqsCount } = await supabase
          .from('rfqs')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');

        // Get total suppliers count
        const { count: suppliersCount } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true })
          .eq('role', 'seller');

        setStats({
          totalUsers: usersCount || 0,
          totalRfqs: rfqsCount || 0,
          totalSuppliers: suppliersCount || 0,
          pendingRfqs: pendingRfqsCount || 0
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Redirect if not admin
  if (userRole !== 'admin' && !isLoading) {
    navigate('/');
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="space-x-2">
            <Button variant="outline" onClick={() => navigate('/')}>
              View Website
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UserRound className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                Registered users on the platform
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs"
                onClick={() => navigate('/admin/users')}
              >
                View all users <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active RFQs</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats.pendingRfqs}</div>
              <p className="text-xs text-muted-foreground">
                Pending requests for quotation
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs"
                onClick={() => navigate('/admin/rfqs')}
              >
                Manage RFQs <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Suppliers</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats.totalSuppliers}</div>
              <p className="text-xs text-muted-foreground">
                Active tyre suppliers
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs"
                onClick={() => navigate('/admin/suppliers')}
              >
                View suppliers <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total RFQs</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoading ? '...' : stats.totalRfqs}</div>
              <p className="text-xs text-muted-foreground">
                All-time quotation requests
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs"
                onClick={() => navigate('/admin/rfqs')}
              >
                View all <ArrowRightIcon className="ml-1 h-3 w-3" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/pages')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Manage Pages
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/suppliers')}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Manage Suppliers
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate('/admin/users')}
              >
                <UserRound className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates on the platform</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>No recent activity to display.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
