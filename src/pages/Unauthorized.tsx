
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft } from 'lucide-react';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="rounded-full bg-red-100 p-4">
        <Shield className="h-16 w-16 text-red-500" />
      </div>
      <h1 className="mt-6 text-3xl font-bold text-gray-900">Access Denied</h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        You don't have permission to access this page. Please contact an administrator if you believe this is an error.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button 
          onClick={() => navigate('/')}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
