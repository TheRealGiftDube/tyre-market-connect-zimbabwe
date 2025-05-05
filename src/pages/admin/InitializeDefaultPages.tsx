
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { defaultPages } from '@/utils/defaultPageContent';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const InitializeDefaultPages = () => {
  const { toast } = useToast();
  const [isInitializing, setIsInitializing] = useState(false);
  const [results, setResults] = useState<{slug: string, status: string}[]>([]);
  const { userRole } = useAuth();
  const navigate = useNavigate();

  // Redirect if not admin
  useEffect(() => {
    if (userRole !== 'admin') {
      navigate('/');
    }
  }, [userRole, navigate]);

  const initializeDefaultPages = async () => {
    setIsInitializing(true);
    setResults([]);
    const newResults: {slug: string, status: string}[] = [];

    try {
      for (const page of defaultPages) {
        // Check if this page already exists
        const { data: existingPage, error: fetchError } = await supabase
          .from('pages')
          .select('id, slug')
          .eq('slug', page.slug)
          .maybeSingle();

        if (fetchError) {
          console.error("Error checking page:", fetchError);
          newResults.push({
            slug: page.slug,
            status: `Error checking: ${fetchError.message}`
          });
          continue;
        }

        if (existingPage) {
          // Update existing page
          const { error: updateError } = await supabase
            .from('pages')
            .update({
              title: page.title,
              content: page.content,
              meta_title: page.meta_title,
              meta_description: page.meta_description,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingPage.id);

          if (updateError) {
            newResults.push({
              slug: page.slug,
              status: `Error updating: ${updateError.message}`
            });
          } else {
            newResults.push({
              slug: page.slug,
              status: `Updated successfully`
            });
          }
        } else {
          // Create new page
          const { error: insertError } = await supabase
            .from('pages')
            .insert({
              title: page.title,
              slug: page.slug,
              content: page.content,
              meta_title: page.meta_title,
              meta_description: page.meta_description
            });

          if (insertError) {
            newResults.push({
              slug: page.slug,
              status: `Error creating: ${insertError.message}`
            });
          } else {
            newResults.push({
              slug: page.slug,
              status: `Created successfully`
            });
          }
        }
      }

      setResults(newResults);
      
      toast({
        title: "Complete",
        description: `Processed ${newResults.length} pages with ${newResults.filter(r => r.status.includes('successfully')).length} successful operations`,
      });
    } catch (error) {
      console.error("Initialization error:", error);
      toast({
        title: "Error",
        description: "Failed to initialize default pages",
        variant: "destructive"
      });
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Initialize Default Pages</h1>
          <Button
            variant="outline"
            onClick={() => navigate('/admin/pages')}
          >
            Back to Pages
          </Button>
        </div>

        <div className="bg-white rounded-md shadow p-6">
          <p className="mb-4">
            This utility will create or update the default pages needed for the website, including:
          </p>
          
          <ul className="list-disc ml-6 mb-6 space-y-1">
            {defaultPages.map(page => (
              <li key={page.slug}>{page.title} <span className="text-gray-500">({page.slug})</span></li>
            ))}
          </ul>
          
          <p className="mb-6 text-amber-600">
            <strong>Note:</strong> Existing pages with the same slug will be updated with the default content.
            You can edit them afterward to customize the content.
          </p>
          
          <Button 
            onClick={initializeDefaultPages}
            disabled={isInitializing}
            className="mb-6"
          >
            {isInitializing ? "Processing..." : "Initialize Default Pages"}
          </Button>
          
          {results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Results</h2>
              
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {results.map((result, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{result.slug}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm ${result.status.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                          {result.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InitializeDefaultPages;
