
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Sitemap = () => {
  useScrollToTop();

  // Update document title
  useEffect(() => {
    document.title = "Site Map | Tyres.co.zw";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Site Map</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-8">Welcome to the Tyres.co.zw sitemap. This page provides an overview of all sections and pages available on our platform to help you navigate our website efficiently.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                  <h2 className="text-2xl font-semibold text-brand-blue mb-4 pb-2 border-b border-gray-200">For Tyre Buyers</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="text-blue-600 hover:underline font-medium">
                        Home
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Main landing page with platform overview</p>
                    </li>
                    <li>
                      <Link to="/rfq" className="text-blue-600 hover:underline font-medium">
                        Request for Quotation
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Submit your tyre requirements to get quotes</p>
                    </li>
                    <li>
                      <Link to="/sellers" className="text-blue-600 hover:underline font-medium">
                        Tyre Sellers Directory
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Browse our verified tyre sellers across Zimbabwe</p>
                    </li>
                    <li>
                      <Link to="/tyre-guide" className="text-blue-600 hover:underline font-medium">
                        Tyre Guide
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Comprehensive guide to tyre buying and maintenance</p>
                    </li>
                    <li>
                      <Link to="/faq" className="text-blue-600 hover:underline font-medium">
                        Buyer FAQ
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Answers to frequently asked questions for buyers</p>
                    </li>
                    <li>
                      <Link to="/testimonials" className="text-blue-600 hover:underline font-medium">
                        Success Stories
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Customer testimonials and experiences</p>
                    </li>
                    <li>
                      <Link to="/how-it-works" className="text-blue-600 hover:underline font-medium">
                        How It Works
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Step-by-step guide to using our platform</p>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-brand-blue mb-4 pb-2 border-b border-gray-200">For Tyre Sellers</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/register" className="text-blue-600 hover:underline font-medium">
                        Register Your Business
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Join our network of verified tyre sellers</p>
                    </li>
                    <li>
                      <Link to="/plans" className="text-blue-600 hover:underline font-medium">
                        Subscription Plans
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">View our subscription options and pricing</p>
                    </li>
                    <li>
                      <Link to="/seller-faq" className="text-blue-600 hover:underline font-medium">
                        Seller FAQ
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Answers to frequently asked questions for sellers</p>
                    </li>
                    <li>
                      <Link to="/auth" className="text-blue-600 hover:underline font-medium">
                        Seller Login
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Access your seller dashboard</p>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-brand-blue mb-4 pb-2 border-b border-gray-200">About Tyres.co.zw</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/about" className="text-blue-600 hover:underline font-medium">
                        About Us
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Our mission, story, and team</p>
                    </li>
                    <li>
                      <Link to="/contact" className="text-blue-600 hover:underline font-medium">
                        Contact Us
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">How to reach our support team</p>
                    </li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-2xl font-semibold text-brand-blue mb-4 pb-2 border-b border-gray-200">Legal Information</h2>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/terms" className="text-blue-600 hover:underline font-medium">
                        Terms of Service
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">Platform usage terms and conditions</p>
                    </li>
                    <li>
                      <Link to="/privacy" className="text-blue-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">How we handle and protect your data</p>
                    </li>
                  </ul>
                </section>
              </div>
              
              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Admin Pages</h2>
                <p className="mb-4">The following pages are accessible only to administrators:</p>
                <ul className="pl-5 list-disc">
                  <li><Link to="/admin" className="text-blue-600 hover:underline">Admin Dashboard</Link></li>
                  <li><Link to="/admin/pages" className="text-blue-600 hover:underline">Content Management</Link></li>
                  <li><Link to="/admin/supplier-import" className="text-blue-600 hover:underline">Supplier Import</Link></li>
                </ul>
              </section>
              
              <section className="mt-12 border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
                <p>If you can't locate the information you need, please don't hesitate to reach out to our support team:</p>
                <div className="mt-4">
                  <Link to="/contact" className="bg-brand-blue text-white px-6 py-2 rounded-md hover:bg-brand-blue/90 transition inline-block">
                    Contact Support
                  </Link>
                </div>
              </section>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              Last updated: May 5, 2025
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
