
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

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
                      <div className="text-sm font-medium">FAQ</div>
                      <div className="text-xs text-gray-500">Answers to common questions</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="text-gray-700 hover:text-brand-blue hover:underline font-medium">
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
