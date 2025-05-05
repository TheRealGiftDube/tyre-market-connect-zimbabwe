
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <img 
              src="/tyre-logo.svg" 
              alt="Tyres.co.zw Logo" 
              className="h-10 w-10 rounded-md"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/40x40?text=T";
              }}
            />
            <span className="ml-2 text-xl font-heading font-bold text-brand-blue">Tyres.co.zw</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/sellers" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
            Tyre Sellers
          </Link>
          <Link to="/rfq" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
            Request Quote
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
            How It Works
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="hidden md:inline-flex font-medium">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
