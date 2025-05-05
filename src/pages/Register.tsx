
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Register = () => {
  useScrollToTop();

  // Update document title
  useEffect(() => {
    document.title = "Register Your Tyre Business Today | Tyres.co.zw";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Register Your Tyre Business Today</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Tyre shop owner registering online" 
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
                />
                <p className="text-gray-700">Join Zimbabwe's fastest-growing network of tyre sellers and connect with thousands of potential customers actively looking for the products you offer. Our platform brings the customers directly to you, eliminating the need for expensive advertising and marketing campaigns.</p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Why List Your Tyre Business with Tyres.co.zw?</h2>
                <p>In today's digital age, online presence is essential for business growth. Tyres.co.zw provides tyre sellers across Zimbabwe with a powerful online platform to showcase their inventory and services to a targeted audience of active buyers.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                      <div>
                        <h3 className="text-xl font-medium mb-2">Qualified Leads</h3>
                        <p>Receive quote requests from buyers specifically looking for the tyre brands and sizes you stock.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                      <div>
                        <h3 className="text-xl font-medium mb-2">Expanded Market Reach</h3>
                        <p>Connect with customers beyond your physical location, across all major cities in Zimbabwe.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                      <div>
                        <h3 className="text-xl font-medium mb-2">Business Credibility</h3>
                        <p>Verification badge builds trust with potential customers who value legitimacy and reliability.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3" />
                      <div>
                        <h3 className="text-xl font-medium mb-2">Detailed Analytics</h3>
                        <p>Track performance with insights on quote requests, conversion rates, and customer engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-medium text-lg">Businesses who join Tyres.co.zw report:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-3">
                    <li>Average 30% increase in monthly sales within the first 3 months</li>
                    <li>Expanded customer base beyond their traditional local market</li>
                    <li>Improved inventory management through data on popular tyre requests</li>
                    <li>Enhanced online reputation through customer reviews and ratings</li>
                  </ul>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Step-by-Step Registration Process</h2>
                <p>Getting your tyre business online with Tyres.co.zw is quick and easy. Follow these simple steps to start receiving quote requests from customers across Zimbabwe:</p>
                
                <div className="my-8 space-y-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Create Your Account</h3>
                      <p>Click the "Register" button at the top of our website and fill out the basic information about yourself and your business. You'll need your email address, phone number, and business name to get started.</p>
                      <div className="mt-4 bg-gray-50 rounded-md p-4 border border-gray-200">
                        <p className="text-sm text-gray-600">Required documents: Business registration certificate, VAT certificate (if registered), and ID of the business owner or authorized representative.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Complete Your Business Profile</h3>
                      <p>Add detailed information about your tyre business including operating hours, location, services offered, and brands available. The more complete your profile, the more attractive it will be to potential customers.</p>
                      <div className="mt-4 bg-gray-50 rounded-md p-4 border border-gray-200">
                        <p className="text-sm text-gray-600">Pro tip: Add high-quality photos of your shop, team members, and facilities to build trust with potential customers.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Select Your Subscription Plan</h3>
                      <p>Choose from our flexible subscription plans designed to match businesses of all sizes. From our free basic listing to our comprehensive Premium Plus package, we have options for every tyre business in Zimbabwe.</p>
                      <div className="mt-4">
                        <Link to="/plans" className="text-blue-600 hover:underline">
                          View detailed plan comparison →
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="bg-brand-blue rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-white">4</span>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-medium mb-3">Verification Process</h3>
                      <p>Our team will verify your business details to ensure all sellers on our platform are legitimate operations. This typically takes 1-2 business days and helps maintain the quality and trust of our marketplace.</p>
                      <div className="mt-4 bg-gray-50 rounded-md p-4 border border-gray-200">
                        <p className="text-sm text-gray-600">We may contact you via phone or email to confirm details or request additional information during verification.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Next Steps After Registration</h2>
                <p>Once your tyre business is registered and verified on Tyres.co.zw, you'll immediately gain access to our seller dashboard where you can:</p>
                
                <ul className="list-disc pl-5 space-y-3 mt-4">
                  <li>Receive notifications about new quote requests from potential customers</li>
                  <li>Respond to RFQs with your best offers</li>
                  <li>Update your inventory information and special promotions</li>
                  <li>Access business analytics and performance metrics</li>
                  <li>Collect and showcase customer reviews and testimonials</li>
                  <li>Upgrade your subscription as your business grows</li>
                </ul>
                
                <p className="mt-6">Our dedicated seller success team will also provide onboarding support to help you maximize the benefits of your Tyres.co.zw presence. We're committed to helping your business succeed in the digital marketplace.</p>
                
                <div className="mt-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Tyre Business?</h3>
                  <p className="mb-6 max-w-2xl mx-auto">Join hundreds of successful tyre sellers across Zimbabwe who are already benefiting from our digital marketplace. Registration takes less than 15 minutes.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium px-8 py-6 h-auto text-lg">
                      Register Your Business Now
                    </Button>
                    <Link to="/plans">
                      <Button variant="outline" className="font-medium px-8 py-6 h-auto text-lg">
                        View Subscription Plans
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              <section className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-xl font-semibold mb-4">Have Questions About Selling on Tyres.co.zw?</h3>
                <p>We're here to help! Check out these resources or contact us directly:</p>
                <ul className="space-y-3 mt-4">
                  <li>
                    <Link to="/plans" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Subscription Plans and Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/seller-faq" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Seller Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Contact Our Seller Support Team
                    </Link>
                  </li>
                </ul>
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

export default Register;
