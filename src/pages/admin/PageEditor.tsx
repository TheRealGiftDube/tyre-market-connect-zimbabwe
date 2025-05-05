
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Save } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// Form schema
const pageSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  slug: z
    .string()
    .min(1, { message: 'URL slug is required' })
    .regex(/^[a-z0-9-]+$/, {
      message: 'Slug can only contain lowercase letters, numbers, and hyphens',
    }),
  content: z.string().min(1, { message: 'Content is required' }),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
});

type PageFormValues = z.infer<typeof pageSchema>;

const PageEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, userRole } = useAuth();
  const [isLoading, setIsLoading] = useState(id !== 'new');
  const isEditing = id !== 'new';
  
  // Use scroll to top hook
  useScrollToTop();

  const form = useForm<PageFormValues>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      meta_title: '',
      meta_description: '',
    },
  });

  useEffect(() => {
    // Fetch existing page data if editing
    if (isEditing) {
      const fetchPage = async () => {
        try {
          const { data, error } = await supabase
            .from('pages')
            .select('*')
            .eq('id', id)
            .single();

          if (error) {
            throw error;
          }

          if (data) {
            form.reset({
              title: data.title || '',
              slug: data.slug || '',
              content: data.content || '',
              meta_title: data.meta_title || '',
              meta_description: data.meta_description || '',
            });
          }
        } catch (error) {
          console.error('Error fetching page:', error);
          toast({
            title: 'Error',
            description: 'Failed to load page data',
            variant: 'destructive',
          });
        } finally {
          setIsLoading(false);
        }
      };

      fetchPage();
    }
  }, [id, isEditing, form, toast]);

  // Redirect if not admin
  if (userRole !== 'admin' && !isLoading) {
    navigate('/');
    return null;
  }

  const onSubmit = async (values: PageFormValues) => {
    try {
      setIsLoading(true);

      if (isEditing) {
        // Update existing page with all required fields
        const { error } = await supabase
          .from('pages')
          .update({
            title: values.title,
            content: values.content,
            meta_title: values.meta_title || values.title,
            meta_description: values.meta_description || '',
            last_updated_by: user?.id,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Page updated successfully',
        });
      } else {
        // Create new page
        const { error } = await supabase.from('pages').insert({
          title: values.title,
          slug: values.slug,
          content: values.content,
          meta_title: values.meta_title || values.title,
          meta_description: values.meta_description || '',
          last_updated_by: user?.id,
        });

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Page created successfully',
        });
      }

      navigate('/admin/pages');
    } catch (error) {
      console.error('Error saving page:', error);
      toast({
        title: 'Error',
        description: 'Failed to save page',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" onClick={() => navigate('/admin/pages')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pages
          </Button>
          <h1 className="text-2xl font-bold">
            {isEditing ? 'Edit Page' : 'Create New Page'}
          </h1>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Details</CardTitle>
                <CardDescription>Basic information about the page</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Page Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter page title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL Slug</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <span className="text-sm text-muted-foreground mr-1">/</span>
                          <Input
                            placeholder="page-url-slug"
                            {...field}
                            disabled={isEditing} // Don't allow editing the slug of existing pages
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Tabs defaultValue="content">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Page Content</CardTitle>
                    <CardDescription>The main content of the page</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Enter page content (HTML supported)"
                              className="min-h-[400px] font-mono"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                    <CardDescription>
                      Optimize the page for search engines
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="meta_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="SEO title (leave blank to use page title)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="meta_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief description for search engines"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end">
              <Button
                type="button"
                variant="outline"
                className="mr-2"
                onClick={() => navigate('/admin/pages')}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                <Save className="mr-2 h-4 w-4" />
                {isLoading ? 'Saving...' : 'Save Page'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </DashboardLayout>
  );
};

export default PageEditor;
