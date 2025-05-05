
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const About = () => {
  useScrollToTop();

  // Update document title
  useEffect(() => {
    document.title = "About Tyres.co.zw – Zimbabwe's Online Tyre Marketplace";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">About Tyres.co.zw – Zimbabwe's Online Tyre Marketplace</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Tyres.co.zw team planning" 
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
                />
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Our Mission & Vision</h2>
                <p>At Tyres.co.zw, we are driven by a simple yet powerful vision: to revolutionize how Zimbabweans purchase tyres by creating the country's most comprehensive and user-friendly tyre marketplace. Our mission is to connect local tyre buyers with verified sellers across the nation, eliminating the hassle of making multiple phone calls or visiting numerous shops to find the right tyres at competitive prices.</p>
                
                <p className="mt-4">We aim to bring transparency and efficiency to the tyre buying process in Zimbabwe. By aggregating offers from multiple suppliers, we provide buyers with more options, better pricing, and detailed information to make informed decisions. For sellers, we create a digital platform that expands their reach beyond traditional local markets, connecting them with customers they might never have accessed otherwise.</p>
                
                <p className="mt-4">Our long-term vision is to become the default platform for all tyre-related needs in Zimbabwe, eventually expanding to other automotive parts and services. We believe that by digitizing this essential industry, we can help modernize Zimbabwe's automotive sector while creating opportunities for businesses of all sizes.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Our Story & Founders</h2>
                <p>Tyres.co.zw was born from a frustrating personal experience that many Zimbabweans can relate to. In 2021, one of our founders, Tendai, spent an entire day calling different tyre shops in Harare, comparing prices and checking stock availability for his SUV. After hours of calls, notes on scraps of paper, and confusion about which shop offered what, he realized there had to be a better way.</p>
                
                <p className="mt-4">Tendai shared this experience with his long-time friend and tech entrepreneur, Farai, who immediately recognized the business opportunity. Together, they envisioned a platform where buyers could submit their requirements once and receive multiple quotes from verified sellers. Within six months, they had built the first version of Tyres.co.zw.</p>
                
                <p className="mt-4">Since our launch in early 2022, we've grown from just five participating tyre shops in Harare to over thirty verified sellers across major cities in Zimbabwe including Bulawayo, Gweru, and Mutare. What started as a simple idea has now facilitated thousands of tyre purchases, saving Zimbabweans both time and money while helping local businesses thrive in the digital economy.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Why Choose Tyres.co.zw</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3 text-gray-800">Convenience</h3>
                    <p>Submit one request and receive multiple quotes from sellers across Zimbabwe, eliminating the need for numerous phone calls or shop visits.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3 text-gray-800">Verified Sellers</h3>
                    <p>Every tyre business on our platform undergoes a strict verification process. We check business registrations, physical locations, and customer reviews.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3 text-gray-800">Price Comparison</h3>
                    <p>Easily compare quotes from multiple sellers side by side, ensuring you get the best possible deal for your specific tyre needs.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3 text-gray-800">Expert Advice</h3>
                    <p>Access to our comprehensive <Link to="/tyre-guide" className="text-blue-600 hover:underline">tyre guide</Link> and professionals who can help you make the right choice for your vehicle.</p>
                  </div>
                </div>
                
                <p className="mt-6">We're committed to improving the tyre buying experience in Zimbabwe through technology, transparency, and trust. Our platform is continuously evolving based on feedback from both buyers and sellers, ensuring we meet the unique needs of the Zimbabwean market.</p>
                
                <div className="mt-10 bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Ready to experience a better way to buy tyres?</h3>
                  <p className="mb-4">Submit a request for quote today or browse our verified sellers across Zimbabwe.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/rfq" className="bg-brand-blue text-white px-6 py-2 rounded-md hover:bg-brand-blue/90 transition inline-block text-center">
                      Request a Quote
                    </Link>
                    <Link to="/how-it-works" className="bg-white border border-brand-blue text-brand-blue px-6 py-2 rounded-md hover:bg-gray-50 transition inline-block text-center">
                      Learn How It Works
                    </Link>
                  </div>
                </div>
              </section>

              <section className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-xl font-semibold mb-4">Discover More About Tyres.co.zw</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/how-it-works" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> How Our Platform Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Contact Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Read Success Stories from Customers
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

export default About;
