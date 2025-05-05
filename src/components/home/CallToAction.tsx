
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find the Perfect Tyres for Your Vehicle?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join Tyres.co.zw today and connect with verified tyre sellers across Zimbabwe. Submit an RFQ or browse our seller directory to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/rfq">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full sm:w-auto">
                Submit an RFQ
              </Button>
            </Link>
            <Link to="/sellers">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue w-full sm:w-auto">
                Browse Sellers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
