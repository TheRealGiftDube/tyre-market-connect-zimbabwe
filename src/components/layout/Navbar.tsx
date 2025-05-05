
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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

        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/sellers" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
                  Tyre Sellers
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/rfq" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
                  Request Quote
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-brand-blue">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/how-it-works" className="block p-2 hover:bg-slate-100 rounded-md">
                      <div className="text-sm font-medium">How It Works</div>
                      <div className="text-xs text-gray-500">Learn how our platform connects buyers and sellers</div>
                    </Link>
                    <Link to="/tyre-guide" className="block p-2 hover:bg-slate-100 rounded-md">
                      <div className="text-sm font-medium">Tyre Guide</div>
                      <div className="text-xs text-gray-500">Everything you need to know about tyres</div>
                    </Link>
                    <Link to="/faq" className="block p-2 hover:bg-slate-100 rounded-md">
                      <div className="text-sm font-medium">Buyer FAQ</div>
                      <div className="text-xs text-gray-500">Answers to common buyer questions</div>
                    </Link>
                    <Link to="/seller-faq" className="block p-2 hover:bg-slate-100 rounded-md">
                      <div className="text-sm font-medium">Seller FAQ</div>
                      <div className="text-xs text-gray-500">Information for tyre sellers</div>
                    </Link>
                    <Link to="/testimonials" className="block p-2 hover:bg-slate-100 rounded-md">
                      <div className="text-sm font-medium">Success Stories</div>
                      <div className="text-xs text-gray-500">Read about our customer experiences</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/plans" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
                  Plans
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/auth" className="hidden md:inline-flex">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium">
              Register
            </Button>
          </Link>
          <button className="md:hidden p-1" onClick={toggleMobileMenu}>
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
        <div className="md:hidden bg-white px-4 pt-2 pb-4 border-t">
          <div className="space-y-3">
            <Link to="/sellers" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Tyre Sellers
            </Link>
            <Link to="/rfq" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Request Quote
            </Link>
            <div className="py-2">
              <div className="font-medium mb-1">Resources</div>
              <div className="pl-4 space-y-2">
                <Link to="/how-it-works" className="block py-1 text-gray-700 hover:text-brand-blue text-sm" onClick={toggleMobileMenu}>
                  How It Works
                </Link>
                <Link to="/tyre-guide" className="block py-1 text-gray-700 hover:text-brand-blue text-sm" onClick={toggleMobileMenu}>
                  Tyre Guide
                </Link>
                <Link to="/faq" className="block py-1 text-gray-700 hover:text-brand-blue text-sm" onClick={toggleMobileMenu}>
                  Buyer FAQ
                </Link>
                <Link to="/seller-faq" className="block py-1 text-gray-700 hover:text-brand-blue text-sm" onClick={toggleMobileMenu}>
                  Seller FAQ
                </Link>
                <Link to="/testimonials" className="block py-1 text-gray-700 hover:text-brand-blue text-sm" onClick={toggleMobileMenu}>
                  Success Stories
                </Link>
              </div>
            </div>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link to="/plans" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Plans
            </Link>
            <Link to="/auth" className="block py-2 text-gray-700 hover:text-brand-blue" onClick={toggleMobileMenu}>
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
