
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

        <div className="flex items-center gap-3">
          <Link to="/auth" className="hidden sm:inline-flex">
            <Button variant="outline" className="font-medium">
              Sign In / Sign Up
            </Button>
          </Link>
          <Link to="/register" className="hidden sm:inline-flex">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
              Register As Supplier
            </Button>
          </Link>
          <button className="p-1" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white px-4 pt-2 pb-4 border-t">
          <div className="space-y-3">
            <div className="sm:hidden space-y-3 mb-4">
              <Link to="/auth" className="block w-full">
                <Button variant="outline" className="w-full font-medium">
                  Sign In / Sign Up
                </Button>
              </Link>
              <Link to="/register" className="block w-full">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium w-full">
                  Register As Supplier
                </Button>
              </Link>
            </div>

            <Link to="/sellers" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Tyre Sellers
            </Link>
            <Link to="/rfq" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Request Quote
            </Link>
            <Link to="/how-it-works" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              How It Works
            </Link>
            <Link to="/tyre-guide" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Tyre Guide
            </Link>
            <Link to="/faq" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Buyer FAQ
            </Link>
            <Link to="/seller-faq" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Seller FAQ
            </Link>
            <Link to="/testimonials" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Success Stories
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/plans" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Plans
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
