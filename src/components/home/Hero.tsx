
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-pattern relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight mb-4">
              Find Tyre Sellers in Zimbabwe
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Connect with verified tyre suppliers across Zimbabwe. Get quotes, compare prices, and find the right tyres for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/rfq" className="sm:w-auto">
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full sm:w-auto">
                  Request Quotation
                </Button>
              </Link>
              <Link to="/sellers" className="sm:w-auto">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full sm:w-auto">
                  Browse Sellers
                </Button>
              </Link>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    type="text" 
                    placeholder="Search by location, seller, or tyre brand..." 
                    className="pl-10 py-6 w-full"
                  />
                </div>
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="/tyre-hero-image.png" 
              alt="Tyre selection" 
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/600x400?text=Tyre+Image";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
