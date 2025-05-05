
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RFQForm from '@/components/rfq/RFQForm';

const RFQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Request for Quotation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Submit a single request and receive competitive quotes from multiple verified tyre sellers in Zimbabwe.
            </p>
          </div>
          <RFQForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RFQ;
