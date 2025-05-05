import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusIcon, Trash2Icon, PencilIcon, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Pages = () => {
  // Keep existing code (state, useAuth, etc.)
  const [pages, setPages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  // Use scroll to top hook
  useScrollToTop();

  useEffect(() => {
    const fetchPages = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('pages')
          .select('*')
          .order('title', { ascending: true });

        if (error) throw error;
        setPages(data || []);
      } catch (error: any) {
        console.error('Error fetching pages:', error);
        toast({
          title: "Error",
          description: "Failed to load pages",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPages();
  }, [toast]);

  // Redirect if not admin
  useEffect(() => {
    if (userRole !== 'admin' && !isLoading) {
      navigate('/');
    }
  }, [userRole, navigate, isLoading]);

  // Keep existing functions (handleDelete, etc.)
  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      try {
        const { error } = await supabase
          .from('pages')
          .delete()
          .eq('id', id);

        if (error) throw error;

        setPages(pages.filter(page => page.id !== id));
        toast({
          title: "Page deleted",
          description: "The page has been deleted successfully",
        });
      } catch (error: any) {
        console.error('Error deleting page:', error);
        toast({
          title: "Error",
          description: "Failed to delete page",
          variant: "destructive",
        });
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (userRole !== 'admin') {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pages</h1>
          <div className="space-x-2">
            <Button
              variant="outline"
              onClick={() => navigate('/admin/initialize-pages')}
              className="hidden md:inline-flex"
            >
              Initialize Default Pages
            </Button>
            <Button 
              variant="default"
              onClick={() => navigate('/admin/pages/new')}
            >
              <PlusIcon className="mr-2 h-4 w-4" />
              New Page
            </Button>
          </div>
        </div>

        {/* Responsive button for mobile */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => navigate('/admin/initialize-pages')}
            className="w-full"
          >
            Initialize Default Pages
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
          </div>
        ) : (
          <div className="bg-white rounded-md shadow overflow-hidden">
            {pages.length === 0 ? (
              <div className="p-10 text-center">
                <p className="mb-4">No pages found. Create your first page or initialize default pages.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-2">
                  <Button onClick={() => navigate('/admin/pages/new')}>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Create Page
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/admin/initialize-pages')}
                  >
                    Initialize Default Pages
                  </Button>
                </div>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Slug</TableHead>
                    <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pages.map((page) => (
                    <TableRow key={page.id}>
                      <TableCell className="font-medium">{page.title}</TableCell>
                      <TableCell className="hidden md:table-cell">{page.slug}</TableCell>
                      <TableCell className="hidden md:table-cell">{formatDate(page.updated_at)}</TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => window.open(`/${page.slug}`, '_blank')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/pages/edit/${page.id}`)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(page.id)}
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Pages;
