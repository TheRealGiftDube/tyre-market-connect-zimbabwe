
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SellersList from '@/components/sellers/SellersList';

const Sellers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Tyre Sellers in Zimbabwe</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse our directory of verified tyre sellers across Zimbabwe. Filter by location, brands, and more to find the right supplier for your needs.
            </p>
          </div>
          <SellersList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sellers;
