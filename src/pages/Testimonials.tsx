
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Button } from '@/components/ui/button';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  useScrollToTop();

  // Update document title
  useEffect(() => {
    document.title = "What Our Customers Say | Success Stories | Tyres.co.zw";
  }, []);

  const renderStars = (count: number) => {
    return Array(count)
      .fill(null)
      .map((_, index) => <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">What Our Customers Say</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <p className="text-gray-700 text-xl">Discover how Tyres.co.zw has transformed the tyre buying experience for customers and boosted business for sellers across Zimbabwe. These success stories showcase the real impact our platform has made.</p>
              </div>

              <section className="mb-14">
                <h2 className="text-2xl font-semibold text-brand-blue mb-6">Featured Success Stories</h2>
                
                <div className="space-y-10">
                  {/* Buyer Testimonial 1 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
                    <Quote className="absolute text-gray-100 h-24 w-24 -top-4 -left-4 opacity-50" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-2xl font-bold text-brand-blue">
                            TM
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Tatenda Murimwa</h3>
                          <p className="text-gray-500 mb-2">SUV Owner, Harare</p>
                          <div className="flex mb-4">
                            {renderStars(5)}
                          </div>
                          <p className="italic">"I needed new all-terrain tyres for my family trip to Nyanga but didn't have time to visit multiple shops. With Tyres.co.zw, I submitted one request and received quotes from six different sellers within hours. I saved over $120 compared to the price I was quoted elsewhere, and the delivery was arranged the next day!"</p>
                          <p className="mt-3 font-medium">Found: 4 Bridgestone Dueler A/T tyres</p>
                          <p className="text-green-600">Saved: $120 compared to local shop prices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Seller Testimonial */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
                    <Quote className="absolute text-gray-100 h-24 w-24 -top-4 -left-4 opacity-50" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-2xl font-bold text-brand-blue">
                            CN
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Chiedza Nyamapfeni</h3>
                          <p className="text-gray-500 mb-2">Owner, Premium Tyres, Bulawayo</p>
                          <div className="flex mb-4">
                            {renderStars(5)}
                          </div>
                          <p className="italic">"Joining Tyres.co.zw transformed our business model. As a newly established tyre shop in Bulawayo, we struggled with marketing and customer acquisition. Within the first month on the platform, we responded to 23 RFQs and secured 14 sales. The platform has significantly reduced our marketing costs while increasing our customer base."</p>
                          <p className="mt-3 font-medium">Result: 35% increase in monthly revenue</p>
                          <p className="text-green-600">ROI: 670% on subscription investment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Buyer Testimonial 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
                    <Quote className="absolute text-gray-100 h-24 w-24 -top-4 -left-4 opacity-50" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-2xl font-bold text-brand-blue">
                            BM
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Brian Mutasa</h3>
                          <p className="text-gray-500 mb-2">Fleet Manager, Mutare</p>
                          <div className="flex mb-4">
                            {renderStars(5)}
                          </div>
                          <p className="italic">"Managing tyre replacements for our delivery fleet used to be a logistical nightmare. Since discovering Tyres.co.zw, I can submit one RFQ for multiple vehicles and receive comprehensive quotes quickly. The platform has streamlined our procurement process and helped us establish relationships with reliable suppliers across the country."</p>
                          <p className="mt-3 font-medium">Impact: Reduced procurement time by 70%</p>
                          <p className="text-green-600">Benefit: Consistent pricing and quality across multiple locations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Seller Testimonial 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
                    <Quote className="absolute text-gray-100 h-24 w-24 -top-4 -left-4 opacity-50" />
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-2xl font-bold text-brand-blue">
                            KZ
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">Kudakwashe Zimuto</h3>
                          <p className="text-gray-500 mb-2">Manager, FastFit Tyres, Gweru</p>
                          <div className="flex mb-4">
                            {renderStars(5)}
                          </div>
                          <p className="italic">"As a Premium subscriber on Tyres.co.zw, we've been able to expand our business beyond Gweru. The platform connects us with customers from surrounding areas we never reached before. The analytics tools also help us track which tyre brands and sizes are most requested, allowing us to optimize our inventory accordingly."</p>
                          <p className="mt-3 font-medium">Growth: Expanded service area by 45km radius</p>
                          <p className="text-green-600">Achievement: Now serving customers from 5 additional towns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-14">
                <h2 className="text-2xl font-semibold text-brand-blue mb-6">How Tyres.co.zw Changed Their Business</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">For Tyre Sellers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Digital Transformation</h4>
                        <p>"We were a traditional brick-and-mortar business with limited online presence. Tyres.co.zw gave us a digital storefront that attracts customers who shop online. It's like having a website and marketing team for a fraction of the cost."</p>
                        <p className="mt-2 text-right italic">- Emmanuel Moyo, Harare Tyre Center</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Inventory Management</h4>
                        <p>"The data we get from customer requests helps us stock the right tyres. We've reduced excess inventory by 30% while still meeting customer needs, improving our cash flow significantly."</p>
                        <p className="mt-2 text-right italic">- Ruvimbo Tafadzwa, RT Auto, Bulawayo</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Customer Acquisition</h4>
                        <p>"Before Tyres.co.zw, we spent thousands on newspaper ads with mixed results. Now we get qualified leads directly through the platform at a predictable monthly subscription cost."</p>
                        <p className="mt-2 text-right italic">- Gilbert Nyandoro, GilTyres, Mutare</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Business Growth</h4>
                        <p>"We upgraded to the Premium Plus plan after seeing the initial results, and it's been worth every dollar. We've hired two additional staff members just to handle the increase in business from the platform."</p>
                        <p className="mt-2 text-right italic">- Tendai Makoni, Makoni Tyres, Masvingo</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">For Tyre Buyers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Time Savings</h4>
                        <p>"I spent an entire Saturday driving around Harare comparing tyre prices before discovering Tyres.co.zw. Now I submit one request and get multiple quotes while focusing on other priorities."</p>
                        <p className="mt-2 text-right italic">- Farai Moyo, Harare</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Price Transparency</h4>
                        <p>"The platform creates healthy competition among sellers. I received quotes with up to 15% difference for the exact same tyres, allowing me to choose the best value option."</p>
                        <p className="mt-2 text-right italic">- Patricia Gumbo, Kwekwe</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Expert Advice</h4>
                        <p>"As someone who knows little about tyres, I appreciated getting professional recommendations from multiple sellers. This helped me make an informed decision rather than just buying whatever was suggested at the first shop."</p>
                        <p className="mt-2 text-right italic">- Tawanda Ncube, Bulawayo</p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-lg mb-3">Rare Size Availability</h4>
                        <p>"I drive an imported vehicle with uncommon tyre specifications. One RFQ on Tyres.co.zw connected me with a specialist who had my exact size in stock, after weeks of unsuccessful searching."</p>
                        <p className="mt-2 text-right italic">- Michelle Dube, Chinhoyi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-6">Submit Your Own Story</h2>
                <p>Has Tyres.co.zw helped your business grow or made finding tyres easier? We'd love to hear about your experience and potentially feature your story on our platform.</p>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-6">
                  <p className="mb-4">To share your success story, please send us an email with the following information:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Your name and location</li>
                    <li>Whether you're a buyer or seller</li>
                    <li>How Tyres.co.zw helped you</li>
                    <li>Any specific results or benefits you experienced</li>
                    <li>Optional: A photo of you or your business</li>
                  </ul>
                  
                  <div className="mt-6">
                    <Link to="/contact" className="bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-brand-blue/90 transition inline-block text-center">
                      Contact Us to Share Your Story
                    </Link>
                  </div>
                </div>
              </section>

              <section className="mt-14 border-t border-gray-200 pt-8">
                <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Ready to Experience Tyres.co.zw?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="text-center">
                      <h4 className="text-xl font-medium mb-3">Looking for Tyres?</h4>
                      <p className="mb-6">Submit a request for quote and receive competitive offers from verified sellers across Zimbabwe.</p>
                      <Link to="/rfq">
                        <Button className="bg-brand-blue hover:bg-brand-blue/90 w-full sm:w-auto">
                          Request a Quote Now
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-xl font-medium mb-3">Own a Tyre Business?</h4>
                      <p className="mb-6">Join our growing network of sellers and connect with customers actively looking for your products.</p>
                      <Link to="/register">
                        <Button className="bg-brand-blue hover:bg-brand-blue/90 w-full sm:w-auto">
                          Register Your Business
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-10 mb-4">Learn More About Us</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> About Tyres.co.zw
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> How Our Platform Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/tyre-guide" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Complete Tyre Guide
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

export default Testimonials;
