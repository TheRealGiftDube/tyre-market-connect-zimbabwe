
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DynamicPage from '@/components/pages/DynamicPage';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import NotFound from './NotFound';

const PageRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageContent, setPageContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Use the scroll to top hook
  useScrollToTop();

  // If no slug is provided, use the current path as the slug
  const effectiveSlug = slug || window.location.pathname.substring(1);

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!effectiveSlug) {
          setError("Page not found");
          return;
        }

        // First try to fetch the page by slug
        const { data, error: fetchError } = await supabase
          .from('pages')
          .select('*')
          .eq('slug', effectiveSlug)
          .maybeSingle();

        if (fetchError) {
          console.error("Error fetching page:", fetchError);
          setError("Failed to load page content");
          toast({
            title: "Error",
            description: "Failed to load page content",
            variant: "destructive"
          });
        } else if (!data) {
          // No page found with this slug
          setError("Page not found");
          console.log(`Page with slug "${effectiveSlug}" not found in database`);
        } else {
          setPageContent(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPageContent();
  }, [effectiveSlug, toast]);

  // If page not found and we're not still loading, show the not found component
  if (!loading && (error || !pageContent)) {
    return <NotFound />;
  }

  return <DynamicPage isLoading={loading} error={null} pageData={pageContent} />;
};

export default PageRoute;
