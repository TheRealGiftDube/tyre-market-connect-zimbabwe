
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface PageContent {
  id: string;
  title: string;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  updated_at: string;
}

interface DynamicPageProps {
  isLoading?: boolean;
  error?: string | null;
  pageData?: PageContent | null;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ isLoading, error, pageData }) => {
  // Update document title with meta title if available
  React.useEffect(() => {
    if (pageData) {
      document.title = pageData.meta_title || pageData.title || 'Tyres.co.zw';
    }
  }, [pageData]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h1 className="text-3xl text-red-500 font-bold mb-4">Error</h1>
              <p className="text-lg mb-8">{error}</p>
              <a href="/" className="text-brand-blue hover:underline">Return to home page</a>
            </div>
          ) : pageData ? (
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">{pageData.title}</h1>
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />
              <div className="mt-8 text-sm text-gray-500">
                Last updated: {new Date(pageData.updated_at).toLocaleDateString()}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-3xl text-gray-500 font-bold mb-4">Page Not Found</h1>
              <p className="text-lg mb-8">The requested page could not be found.</p>
              <a href="/" className="text-brand-blue hover:underline">Return to home page</a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DynamicPage;
