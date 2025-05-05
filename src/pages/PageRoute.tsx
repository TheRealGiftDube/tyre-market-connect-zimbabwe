
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicPage from '@/components/pages/DynamicPage';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const PageRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const [pageContent, setPageContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Use the scroll to top hook
  useScrollToTop();

  useEffect(() => {
    const fetchPageContent = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!slug) {
          setError("Page not found");
          return;
        }

        const { data, error: fetchError } = await supabase
          .from('pages')
          .select('*')
          .eq('slug', slug)
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
          setError("Page not found");
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
  }, [slug, toast]);

  return <DynamicPage isLoading={loading} error={error} pageData={pageContent} />;
};

export default PageRoute;
