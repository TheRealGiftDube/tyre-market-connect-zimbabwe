
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const TyreGuide = () => {
  useScrollToTop();

  // Update document title
  useEffect(() => {
    document.title = "Complete Tyre Buying & Maintenance Guide | Tyres.co.zw";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Complete Tyre Buying & Maintenance Guide</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Close-up of car tyres" 
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
                />
                <p className="text-gray-700">Understanding tyre basics is essential for every vehicle owner in Zimbabwe. Whether you're driving on Harare's urban roads or the rugged terrain of rural Zimbabwe, this comprehensive guide will help you make informed decisions about your tyre purchases and maintenance.</p>
              </div>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Understanding Tyre Sidewall Codes</h2>
                <p>The sidewall of your tyre contains crucial information about its specifications. Learning to read these codes helps you purchase the right tyres for your vehicle and understand what you're currently using.</p>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
                  <h3 className="text-xl font-medium mb-3">Example: 205/55R16 91V</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>205</strong> - Width of the tyre in millimeters</li>
                    <li><strong>55</strong> - Aspect ratio (height as a percentage of width)</li>
                    <li><strong>R</strong> - Radial construction</li>
                    <li><strong>16</strong> - Rim diameter in inches</li>
                    <li><strong>91</strong> - Load index (maximum weight the tyre can support)</li>
                    <li><strong>V</strong> - Speed rating (maximum speed capability)</li>
                  </ul>
                </div>
                
                <p>Zimbabwe's roads demand quality tyres that can handle various conditions. Always check your vehicle manufacturer's recommended specifications before purchasing new tyres. These specifications can usually be found in your owner's manual or on a sticker inside the driver's door frame.</p>
                
                <p className="mt-4">If you're unsure about which tyre specifications are right for your vehicle, our <Link to="/rfq" className="text-blue-600 hover:underline">Request for Quote service</Link> connects you with tyre experts who can provide guidance specific to your vehicle make and model.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Choosing the Right Tyre Size</h2>
                <p>Selecting the correct tyre size is crucial for your vehicle's performance and safety. While it might be tempting to change tyre sizes for aesthetic reasons, doing so without proper knowledge can affect your speedometer accuracy, fuel economy, and overall driving experience.</p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Factors to Consider When Choosing Tyre Size:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Vehicle Manufacturer Recommendations:</strong> Always start with what your vehicle manufacturer recommends.</li>
                  <li><strong>Driving Conditions:</strong> Consider where you drive most often in Zimbabwe – city roads in Harare or Bulawayo require different tyres than rural areas or farms.</li>
                  <li><strong>Budget:</strong> Quality tyres are an investment in safety, but there are good options at various price points.</li>
                  <li><strong>Performance Needs:</strong> Consider your priorities – fuel efficiency, comfort, off-road capability, or longevity.</li>
                </ol>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <p className="text-yellow-700"><strong>Important:</strong> Significantly changing your tyre size without proper adjustments can void your vehicle warranty and potentially create safety hazards. When in doubt, consult with a professional.</p>
                </div>
                
                <p>Many Zimbabwean drivers face challenges finding the exact manufacturer-recommended tyre sizes due to supply limitations. If you're having trouble finding your exact tyre size, our network of <Link to="/sellers" className="text-blue-600 hover:underline">verified sellers</Link> can help you find suitable alternatives that won't compromise safety or performance.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Understanding Seasonal Tyre Types</h2>
                <p>While many countries require seasonal tyre changes, Zimbabwe's climate generally allows for all-season tyres year-round. However, understanding different tyre types helps you make better choices based on your specific needs.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3">All-Season Tyres</h3>
                    <p><strong>Best for:</strong> Most Zimbabwean drivers</p>
                    <p><strong>Features:</strong> Balanced performance in various conditions, moderate tread life, acceptable wet traction</p>
                    <p><strong>Recommended for:</strong> Daily driving in urban areas like Harare, Bulawayo, and Mutare</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3">All-Terrain Tyres</h3>
                    <p><strong>Best for:</strong> Mixed on-road and off-road driving</p>
                    <p><strong>Features:</strong> More aggressive tread, better traction on unpaved roads, slightly noisier on highways</p>
                    <p><strong>Recommended for:</strong> Rural areas, farms, and frequent travel to areas with unpaved roads</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3">Highway Terrain Tyres</h3>
                    <p><strong>Best for:</strong> SUVs and light trucks primarily used on paved roads</p>
                    <p><strong>Features:</strong> Quieter ride, better fuel economy, longer tread life on highways</p>
                    <p><strong>Recommended for:</strong> SUV owners who rarely go off-road and prioritize comfort</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-3">Mud Terrain Tyres</h3>
                    <p><strong>Best for:</strong> Serious off-road enthusiasts</p>
                    <p><strong>Features:</strong> Aggressive tread patterns, excellent off-road traction, shorter tread life on highways</p>
                    <p><strong>Recommended for:</strong> Off-road adventures, mining areas, construction sites</p>
                  </div>
                </div>
                
                <p className="mt-6">Zimbabwe's diverse terrain offers everything from well-maintained highways to challenging off-road conditions. Choose tyres that match where you drive most frequently, but remember that extremely specialized tyres may compromise performance in other conditions.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Tyre Rotations & Managing Wear</h2>
                <p>Regular tyre rotation is essential for extending tyre life and maintaining even wear patterns. In Zimbabwe, where road conditions can vary dramatically, proper tyre maintenance becomes even more important.</p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Recommended Rotation Schedule:</h3>
                <p>Rotate your tyres every 8,000 to 10,000 kilometers. However, if you notice uneven wear before reaching this mileage, schedule a rotation sooner. Many Zimbabwean roads can cause accelerated and uneven wear, so regular inspections are important.</p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Common Rotation Patterns:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Forward Cross:</strong> For front-wheel drive vehicles (common in Zimbabwe)</li>
                  <li><strong>Rearward Cross:</strong> For rear-wheel and four-wheel drive vehicles</li>
                  <li><strong>X-Pattern:</strong> Alternative for vehicles with same-sized, non-directional tyres</li>
                </ul>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 my-6">
                  <h3 className="text-xl font-medium mb-3">Signs of Improper Tyre Wear:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Center wear:</strong> Over-inflation</li>
                    <li><strong>Edge wear:</strong> Under-inflation</li>
                    <li><strong>One-sided wear:</strong> Alignment issues</li>
                    <li><strong>Cupping or scalloping:</strong> Suspension problems</li>
                  </ul>
                </div>
                
                <p>Zimbabwe's potholes and rough roads can lead to alignment issues that cause uneven tyre wear. If you notice any unusual wear patterns, have your alignment checked promptly to prevent further damage to your tyres and suspension components.</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-brand-blue mb-4">Essential Tyre Safety Checks</h2>
                <p>Regular safety checks are crucial for preventing tyre-related accidents. In Zimbabwe's varying road conditions, maintaining your tyres properly is not just about longevity but also about safety.</p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Monthly Tyre Safety Checklist:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Pressure Check:</strong> Use a reliable pressure gauge to ensure tyres are inflated to the manufacturer's specifications. Zimbabwe's temperature variations can affect pressure significantly.</li>
                  <li><strong>Tread Depth:</strong> The legal minimum tread depth in Zimbabwe is 1.6mm. Use a tread depth gauge or the "20 cent coin test" – if you can see the top of the beacon when inserted in the tread, your tyres need replacement.</li>
                  <li><strong>Visual Inspection:</strong> Look for cuts, bulges, or objects embedded in the tyre. Zimbabwe's roads often have debris that can damage tyres.</li>
                  <li><strong>Valve Caps:</strong> Ensure all valve caps are present to prevent dust and moisture from entering the valve stem.</li>
                  <li><strong>Spare Tyre:</strong> Don't forget to check your spare tyre's condition and pressure – particularly important when traveling in remote areas of Zimbabwe.</li>
                </ol>
                
                <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
                  <p className="text-red-700"><strong>Warning:</strong> Driving on significantly worn or damaged tyres is dangerous and illegal in Zimbabwe. Replace tyres that show signs of excessive wear or damage immediately.</p>
                </div>
              </section>

              <section className="border-t border-gray-200 pt-8 mt-10">
                <h3 className="text-xl font-semibold mb-4">Ready to Find the Right Tyres for Your Vehicle?</h3>
                <p>Now that you understand the basics of tyre selection and maintenance, let Tyres.co.zw help you find the perfect tyres for your vehicle and driving needs in Zimbabwe.</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link to="/rfq" className="bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-brand-blue/90 transition inline-block text-center">
                    Submit a Quote Request
                  </Link>
                  <Link to="/sellers" className="bg-white border border-brand-blue text-brand-blue px-6 py-3 rounded-md hover:bg-gray-50 transition inline-block text-center">
                    Browse Verified Sellers
                  </Link>
                </div>

                <h3 className="text-xl font-semibold mt-10 mb-4">Learn More About Tyres.co.zw</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/faq" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link to="/plans" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> Our Subscription Plans for Sellers
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-blue-600 hover:underline flex items-center">
                      <span className="mr-2">→</span> About Tyres.co.zw
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

export default TyreGuide;
