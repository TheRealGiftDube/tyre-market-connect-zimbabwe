
import React from 'react';
import { useParams } from 'react-router-dom';
import DynamicPage from '@/components/pages/DynamicPage';

const PageRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  
  return <DynamicPage />;
};

export default PageRoute;
