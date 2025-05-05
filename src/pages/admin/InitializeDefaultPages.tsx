
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { defaultPageContent } from '@/utils/defaultPageContent';

// Add the new page content for all required pages
const additionalPages = {
  'tyre-guide': {
    title: 'Your Tyre Buying & Maintenance Guide',
    content: `
      <div class="space-y-8">
        <h2 class="text-2xl font-semibold">How to read a tyre's sidewall</h2>
        <p>Each tyre has codes printed on its sidewall. For example, a marking like <strong>205/55 R16</strong> means a 205 mm tread width, 55% aspect ratio (sidewall height is 55% of width), and a 16-inch rim diameter. The "R" denotes radial construction. Following that you'll see load and speed codes (e.g. "91V", where 91 is load index and V is speed rating). The brand name and model are also embossed there. If you see "TUBELESS" or "Tube Type" on the sidewall, it indicates whether the tyre uses an inner tube.</p>
        
        <h2 class="text-2xl font-semibold">Choosing the right tyre size</h2>
        <p>Always match your vehicle's recommended tyre size. The size code (like <strong>205/55 R16</strong>) must match your car's specifications. A mismatched size can affect handling and safety. You can find the correct size in your owner's manual or on the driver's door jamb. When searching on the site, you may enter the size or vehicle model to find compatible tyres. Our system should validate the format (e.g., width/aspect/rim) and offer guidance if an unusual size is entered.</p>
        
        <h2 class="text-2xl font-semibold">Tubeless vs. tube-type tyres</h2>
        <p>Most modern car tyres are <strong>tubeless</strong>, meaning they do not require a separate inner tube. Tubeless tyres are lighter and more fuel-efficient (you save weight without the tube) and are easier to repair for punctures. If a tyre is labeled "Tube Type," it needs a tube inside. Educate users that tubeless is standard for cars, but some vintage or specialty rims may need tube-type tyres.</p>
        
        <h2 class="text-2xl font-semibold">Seasonal tyre types</h2>
        <p>All-season tyres are engineered as a compromise for mild climates; their rubber remains flexible down near freezing to maintain grip, but they are not as specialized as winter tyres. Winter tyres (often marked <strong>M+S</strong> or with a snowflake symbol) have tread and rubber designed for ice/snow. Summer/performance tyres use a harder compound for warm temperatures, offering superior wet/dry grip but poor cold-weather traction. (In Zimbabwe's climate, all-season or summer tyres are typical, but mention the seasonal symbols.) Choosing the right season tyre helps safety and wear.</p>
        
        <h2 class="text-2xl font-semibold">Tyre rotation tips</h2>
        <p>Include best practices for rotating tyres. Generally rotate tyres every <strong>5,000–8,000 miles</strong> (or with each oil change) according to vehicle manual. Common patterns: on non-directional tyres, swap front-to-back on same side, or use a cross pattern for all-wheel drive. On front-wheel-drive cars, swap the front tyres back and switch sides if non-directional. Rotating evens out wear across all four tyres. It also maximizes tread life and can prevent voiding the tyre warranty. Each rotation is a good opportunity to check tread depth, look for uneven wear, and inspect for damage.</p>
        
        <h2 class="text-2xl font-semibold">Damage warning signs</h2>
        <p><strong>Visual checks:</strong> look for cracks, cuts, bulges or bubbles in the sidewall, embedded objects (nails/screws), or irregular tread wear. <strong>Performance signs:</strong> vibration, pulling to one side, or frequent pressure loss can signal a problem. Any sudden change in driving feel deserves inspection. If you see air leaking or tread depth below safety limits, have the tyre checked or replaced. Recommend users check tyre pressure regularly too, since low pressure itself can cause damage.</p>
        
        <h2 class="text-2xl font-semibold">Tyre pressure and fuel economy</h2>
        <p>Underinflated tyres increase rolling resistance, hurting fuel economy and safety. For example, an Oak Ridge study found that driving with all tyres at only 50% of recommended pressure gave ~10% worse fuel economy at 40 mph. Even 75% pressure caused a 2–3% drop. Overinflation reduces grip and can cause uneven wear. Instruct users to check and set pressure to the vehicle maker's spec (usually on the door jamb) monthly, as proper inflation optimizes mileage and extends tyre life.</p>
      </div>
    `,
    meta_title: 'Your Complete Tyre Buying & Maintenance Guide | Tyres.co.zw',
    meta_description: 'Learn how to read tyre sidewalls, choose the right size, understand tyre types, and maintain your tyres for optimal performance and safety.'
  },
  'faq': {
    title: 'Frequently Asked Questions',
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">How do I submit an RFQ?</h3>
        <p>Log into your buyer account, go to <strong>"Create RFQ"</strong>, and fill in the tyre details (size, quantity, vehicle info, etc.). Submit the form to broadcast the request.</p>
        
        <h3 class="text-xl font-semibold">What is an RFQ?</h3>
        <p>RFQ stands for <em>Request for Quote</em>. It's your bid for sellers to provide a price; think of it as asking multiple tyre shops for price quotes at once.</p>
        
        <h3 class="text-xl font-semibold">Do I need an account to get quotes?</h3>
        <p>Yes, you must create a free buyer account so we can share your request with sellers and communicate results.</p>
        
        <h3 class="text-xl font-semibold">Are sellers verified?</h3>
        <p>We verify business details when they sign up, but we recommend checking seller ratings and profile info. Verified badges indicate a seller has completed our checks.</p>
        
        <h3 class="text-xl font-semibold">How long do quotes take?</h3>
        <p>Sellers typically respond within a few hours, but it can take up to 24–48 hours. You can view quote status on your dashboard.</p>
        
        <h3 class="text-xl font-semibold">Can I delete or edit an RFQ?</h3>
        <p>Yes. On your RFQ list page, you can cancel or remove any open RFQ. (After removal, sellers can no longer see it.) Edit the request only before any quotes are received.</p>
        
        <h3 class="text-xl font-semibold">What happens if no one responds?</h3>
        <p>If no sellers answer in the first day, you'll be notified. You may repost or extend the deadline. You'll never be charged for an unanswered RFQ.</p>
        
        <h3 class="text-xl font-semibold">How do I view received quotes?</h3>
        <p>On your dashboard under <strong>"My Quotes"</strong>, you can compare all responses side by side. Each quote will list price, quantity, and seller info so you can pick your best option.</p>
        
        <h3 class="text-xl font-semibold">Can I contact a seller directly?</h3>
        <p>Yes. Once quotes come in, you can message sellers through our chat tool or call them using the contact info they provide. No phone number is shared until you engage through the platform for privacy.</p>
        
        <h3 class="text-xl font-semibold">How do I choose a quote?</h3>
        <p>Simply click <strong>"Accept Quote"</strong> on the one you like. The seller will be notified and you can then arrange purchase/pickup. (We only facilitate leads; payments are done offline.)</p>
        
        <h3 class="text-xl font-semibold">Is Tyres.co.zw free?</h3>
        <p>For buyers, yes. Posting RFQs and getting quotes is 100% free. (We make money from seller subscriptions, not by charging buyers.)</p>
        
        <h3 class="text-xl font-semibold">How do subscription fees work?</h3>
        <p>Buyers aren't charged subscriptions. Sellers pay monthly via credit card or mobile payment to access leads (details in "Plans").</p>
        
        <h3 class="text-xl font-semibold">Can I get a refund?</h3>
        <p>Buyers: Yes, on a case-by-case basis if an order fails. Sellers: See the Subscription Terms for refund policy (typically none after 30 days of use). Contact support if you need help.</p>
        
        <h3 class="text-xl font-semibold">What is the referral program?</h3>
        <p>Refer a friend with your unique link. When they make their first tyre purchase, you earn credit for future RFQs. (Full terms are on the Referrals page.)</p>
      </div>
    `,
    meta_title: 'Frequently Asked Questions | Tyres.co.zw',
    meta_description: 'Find answers to common questions about using Tyres.co.zw, submitting RFQs, getting quotes, and connecting with tyre sellers.'
  },
  'register': {
    title: 'Register Your Business',
    content: `
      <div class="max-w-3xl mx-auto">
        <p class="mb-6">Join Tyres.co.zw as a verified seller and connect with customers looking for tyres. Complete the form below to create your business account.</p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p class="text-yellow-700">Registration is currently being implemented. Please check back soon or contact us for early access.</p>
        </div>
        
        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Benefits of registering your tyre business:</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Receive quote requests directly from interested buyers</li>
            <li>Create a professional online presence for your business</li>
            <li>Manage all customer inquiries in one dashboard</li>
            <li>Gain visibility in Zimbabwe's growing digital marketplace</li>
          </ul>
          
          <h3 class="text-xl font-semibold mt-8">Registration requirements:</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Valid business name and contact information</li>
            <li>Physical location details</li>
            <li>Email address for account management</li>
            <li>Phone number for verification</li>
          </ul>
          
          <p class="mt-6">Once registered, you'll be able to customize your business profile, add product information, and start responding to customer RFQs based on your subscription level.</p>
          
          <div class="mt-8 text-center">
            <a href="/plans" class="inline-block bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-blue-700">View Subscription Plans</a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Register Your Tyre Business | Tyres.co.zw',
    meta_description: 'Join Tyres.co.zw as a verified seller. Create your business profile and connect with customers searching for tyres across Zimbabwe.'
  },
  'plans': {
    title: 'Our Plans',
    content: `
      <div class="space-y-12">
        <p class="text-lg">Choose the right plan for your tyre business. From free listings to premium features, we have options for businesses of all sizes.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Free Plan -->
          <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="bg-gray-100 p-6 text-center">
              <h3 class="text-xl font-bold">Free</h3>
              <p class="text-3xl font-bold mt-2">$0 <span class="text-sm font-normal">/month</span></p>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-2">
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Basic listing</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Standard search ranking</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Up to 3 product photos</li>
                <li class="flex items-center opacity-50"><svg class="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> No RFQ responses</li>
                <li class="flex items-center opacity-50"><svg class="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> No verified badge</li>
              </ul>
              <button class="w-full mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded transition-colors">Select Plan</button>
            </div>
          </div>
          
          <!-- Standard Plan -->
          <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow border-blue-200">
            <div class="bg-blue-50 p-6 text-center">
              <h3 class="text-xl font-bold text-blue-700">Standard</h3>
              <p class="text-3xl font-bold mt-2">$20 <span class="text-sm font-normal">/month</span></p>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-2">
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Everything in Free</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Verified Seller Badge</strong></li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Up to 3 product images</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>15 RFQ leads/month</strong></li>
              </ul>
              <button class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">Select Plan</button>
            </div>
          </div>
          
          <!-- Premium Plan -->
          <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow border-purple-200">
            <div class="bg-purple-50 p-6 text-center">
              <h3 class="text-xl font-bold text-purple-700">Premium</h3>
              <p class="text-3xl font-bold mt-2">$40 <span class="text-sm font-normal">/month</span></p>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-2">
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> All Standard features</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Unlimited RFQs</strong></li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Up to 10 images</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Higher search ranking</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Personalized subdomain</strong></li>
              </ul>
              <button class="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">Select Plan</button>
            </div>
          </div>
          
          <!-- Premium Plus Plan -->
          <div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow border-indigo-200">
            <div class="bg-indigo-50 p-6 text-center">
              <h3 class="text-xl font-bold text-indigo-700">Premium Plus</h3>
              <p class="text-3xl font-bold mt-2">$100 <span class="text-sm font-normal">/month</span></p>
            </div>
            <div class="p-6 space-y-4">
              <ul class="space-y-2">
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> All Premium features</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>White-labeled website</strong></li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Dashboard analytics</strong></li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Priority support</li>
                <li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Custom branding options</li>
              </ul>
              <button class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition-colors">Select Plan</button>
            </div>
          </div>
        </div>
        
        <div class="mt-12">
          <h3 class="text-xl font-semibold mb-6">Feature Comparison</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border">
              <thead>
                <tr>
                  <th class="py-3 px-4 border-b border-r">Feature</th>
                  <th class="py-3 px-4 border-b border-r text-center">Free</th>
                  <th class="py-3 px-4 border-b border-r text-center">Standard</th>
                  <th class="py-3 px-4 border-b border-r text-center">Premium</th>
                  <th class="py-3 px-4 border-b text-center">Premium Plus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b border-r">Business Profile</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b text-center">✓</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">RFQ Responses</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">15/month</td>
                  <td class="py-2 px-4 border-b border-r text-center">Unlimited</td>
                  <td class="py-2 px-4 border-b text-center">Unlimited</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">Verified Badge</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b text-center">✓</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">Product Images</td>
                  <td class="py-2 px-4 border-b border-r text-center">3</td>
                  <td class="py-2 px-4 border-b border-r text-center">3</td>
                  <td class="py-2 px-4 border-b border-r text-center">10</td>
                  <td class="py-2 px-4 border-b text-center">10</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">Custom Subdomain</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✓</td>
                  <td class="py-2 px-4 border-b text-center">✓</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">White-label Website</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b text-center">✓</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b border-r">Analytics Dashboard</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b border-r text-center">✗</td>
                  <td class="py-2 px-4 border-b text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 class="text-xl font-semibold mb-4">Need help choosing?</h3>
          <p>Contact our team for personalized assistance in selecting the right plan for your business needs.</p>
          <a href="/contact" class="inline-block mt-4 text-blue-600 hover:underline">Contact us</a>
        </div>
      </div>
    `,
    meta_title: 'Subscription Plans for Tyre Sellers | Tyres.co.zw',
    meta_description: 'Choose from Free, Standard, Premium, and Premium Plus plans for your tyre business. Compare features and select the best option for your needs.'
  },
  'seller-faq': {
    title: 'Seller Questions & Help',
    content: `
      <div class="space-y-6">
        <h3 class="text-xl font-semibold">How do I claim my listing?</h3>
        <p>After registering, go to <strong>"Claim Listing"</strong> and find your business by name or location. If we have a pre-populated listing, you can claim it to manage it. If not, create a new listing entry under your account.</p>
        
        <h3 class="text-xl font-semibold">What's the difference between Free and Premium?</h3>
        <p><em>Free</em> sellers can create a basic listing and receive no RFQs (only buyers can browse your products). <em>Premium</em> sellers (Standard and above) get verified badges, extra photos, and can receive/respond to RFQs. Free plans can't reply to buyer requests.</p>
        
        <h3 class="text-xl font-semibold">Can I edit my listing later?</h3>
        <p>Yes. Any plan: visit <strong>"My Listings"</strong> and click <strong>Edit</strong> on your profile to update contact info, photos, business hours, etc. Changes go live immediately.</p>
        
        <h3 class="text-xl font-semibold">What happens if I miss an RFQ?</h3>
        <p>We'll notify you by email if you don't reply after 24 hours. The RFQ will expire automatically. You can then move on; the buyer may repost or close it.</p>
        
        <h3 class="text-xl font-semibold">How does the SLA system work?</h3>
        <p>We encourage sellers to reply promptly. If you accept a RFQ, you have 24 hours to respond or your "Service Level" score may drop. A higher SLA score improves your ranking. (Details in Seller Dashboard.)</p>
        
        <h3 class="text-xl font-semibold">Can I create multiple branches?</h3>
        <p>Yes. In your account, you can add branch locations under your profile. Each branch can have its own address and contact number. Leads will be routed to the branch closest to the request if enabled.</p>
        
        <h3 class="text-xl font-semibold">How do I merge duplicate listings?</h3>
        <p>If two listings represent the same business, contact support. We can merge them and transfer reviews or RFQs. Alternatively, claim both under one account and we'll handle it.</p>
        
        <h3 class="text-xl font-semibold">What does Premium Plus include?</h3>
        <p>Premium Plus (highest tier) adds a custom website (with your branding and domain) and advanced analytics. It's ideal if you want a full white-label storefront, plus data on lead conversion and popular products.</p>
        
        <h3 class="text-xl font-semibold">How does the affiliate program work?</h3>
        <p>We offer commissions for referring other sellers. Share your referral link; when a new seller subscribes through it, you earn a percentage of their monthly fee for a year. (Details in the Affiliates page.)</p>
        
        <h3 class="text-xl font-semibold">How do I manage my subscription?</h3>
        <p>Go to <strong>Account Settings > Subscriptions</strong> to upgrade, downgrade, or cancel your plan. Your billing date and payment method (credit card) are shown there.</p>
        
        <h3 class="text-xl font-semibold">What if I need help or support?</h3>
        <p>Click <strong>Support</strong> or email us at <a href="mailto:support@tyres.co.zw">support@tyres.co.zw</a>. We have a dedicated team for technical issues or account questions. FAQs and tutorials are also linked in the dashboard.</p>
      </div>
    `,
    meta_title: 'Seller FAQs & Help | Tyres.co.zw',
    meta_description: 'Find answers to common seller questions about listings, subscriptions, RFQs, and account management on Tyres.co.zw.'
  },
  'testimonials': {
    title: 'Success Stories',
    content: `
      <div class="space-y-12">
        <p class="text-lg mb-8">Here's what some of our customers have to say about their experience with Tyres.co.zw:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Testimonial 1 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p class="italic mb-3">"We got quotes in under 2 hours! I was impressed with how quickly sellers responded to my request."</p>
                <p class="font-semibold">Jane D.</p>
                <p class="text-sm text-gray-600">Harare</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 2 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p class="italic mb-3">"Found rare tyres I couldn't get locally. One of the sellers on the platform had exactly what I needed for my vintage car."</p>
                <p class="font-semibold">Mark S.</p>
                <p class="text-sm text-gray-600">Bulawayo</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 3 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p class="italic mb-3">"Our business doubled tyre inquiries since joining. The platform has given us access to customers we wouldn't otherwise reach."</p>
                <p class="font-semibold">Linda M.</p>
                <p class="text-sm text-gray-600">Tyre World, Mutare</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 4 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p class="italic mb-3">"Saved me time and money on my fleet. As a business owner with multiple vehicles, this platform simplifies my tyre procurement process."</p>
                <p class="font-semibold">Alex K.</p>
                <p class="text-sm text-gray-600">Transport Solutions Ltd</p>
              </div>
            </div>
          </div>
          
          <!-- Testimonial 5 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 mr-4">
                <div class="w-16 h-16 rounded-full bg-gray-300"></div>
              </div>
              <div>
                <p class="italic mb-3">"Extremely easy to use, great leads. The platform is intuitive and connects us with serious buyers looking for quality tyres."</p>
                <p class="font-semibold">Emily C.</p>
                <p class="text-sm text-gray-600">Premium Tyres, Harare</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <h3 class="text-xl font-semibold mb-4">Ready to experience these benefits yourself?</h3>
          <div class="space-x-4">
            <a href="/rfq" class="inline-block bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-blue-700">Submit an RFQ</a>
            <a href="/register" class="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Register Your Business</a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Customer Success Stories | Tyres.co.zw',
    meta_description: 'Read testimonials from buyers and sellers who have successfully used Tyres.co.zw to find tyres or grow their businesses.'
  },
  'how-it-works': {
    title: 'How It Works',
    content: `
      <div class="space-y-12">
        <p class="text-lg">Tyres.co.zw connects tyre buyers with sellers through a simple, efficient process. Here's how it works:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="text-center">
            <div class="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Submit your RFQ</h3>
            <p>Fill out the Request for Quote form with your tyre details, including size, quantity, and location. Your request is then broadcast to relevant sellers in our network.</p>
          </div>
          
          <!-- Step 2 -->
          <div class="text-center">
            <div class="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Receive multiple quotes</h3>
            <p>Verified sellers will see your request and submit their best offers. You'll be able to compare prices, availability, and other terms all in one place.</p>
          </div>
          
          <!-- Step 3 -->
          <div class="text-center">
            <div class="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Choose and connect</h3>
            <p>Select the quote that works best for you and connect directly with the seller to finalize the purchase. Arrange payment and collection or delivery as agreed.</p>
          </div>
        </div>
        
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Buyer Benefits -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-6">Buyer Benefits</h3>
            <ul class="space-y-4">
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Save time by getting many quotes through one form</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Compare competitive prices easily</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Shop from home instead of calling shops individually</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Find specialized or hard-to-locate tyres</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>100% free service for buyers</span>
              </li>
            </ul>
          </div>
          
          <!-- Seller Benefits -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-6">Seller Benefits</h3>
            <ul class="space-y-4">
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Get free leads and new customers daily</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Expand your digital reach with a professional online profile</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Focus on selling; we bring customers to you</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Compete for business based on your unique offerings</span>
              </li>
              <li class="flex">
                <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Track performance with detailed analytics</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <a href="/rfq" class="inline-block bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-blue-700 mr-4">Submit an RFQ</a>
          <a href="/faq" class="inline-block border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50">Read FAQs</a>
        </div>
      </div>
    `,
    meta_title: 'How Tyres.co.zw Works | Find Tyres Online',
    meta_description: 'Learn how Tyres.co.zw connects buyers and sellers through our simple 3-step process. Submit an RFQ, receive quotes, and choose your preferred seller.'
  },
  'about': {
    title: 'About Tyres.co.zw',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>We connect Zimbabwean tyre buyers with local sellers quickly and simply. Our goal is to make tyre shopping as easy as ordering online – by aggregating quotes and broadening choice for every customer.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-3">Origin Story</h2>
          <p>Tyres.co.zw was born from a simple need: one of our founders spent hours calling shops for just one set of tyres. We realized many people in Zimbabwe face the same problem. So we built a platform that brings sellers to the buyer, not the other way around. Since launching, we've helped hundreds of buyers find the right tyres and helped small tyre shops gain customers online.</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h2 class="text-2xl font-semibold mb-3">Our Team</h2>
          <div class="w-full h-64 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">Team photo placeholder</p>
          </div>
          <p>Meet the people behind Tyres.co.zw. We're a small, passionate team from Harare and Bulawayo with backgrounds in automotive and tech. Our combined expertise in digital platforms and the tyre industry allows us to create an efficient marketplace that serves both buyers and sellers.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-3">Want to partner with us?</h2>
          <p>If you run a tyre business or have ideas to grow this platform, let's talk. Email <a href="mailto:partnerships@tyres.co.zw" class="text-blue-600 hover:underline">partnerships@tyres.co.zw</a> or call +263 77 123 4567. We're always looking for new ways to serve drivers and support local industry.</p>
        </div>
        
        <div class="mt-12 flex justify-center">
          <a href="/contact" class="inline-block bg-brand-blue text-white px-6 py-3 rounded-md hover:bg-blue-700">Contact Us</a>
        </div>
      </div>
    `,
    meta_title: 'About Tyres.co.zw | Zimbabwe\'s Tyre Marketplace',
    meta_description: 'Learn about Tyres.co.zw, our mission to connect tyre buyers with sellers across Zimbabwe, and the team behind the platform.'
  }
};

const InitializeDefaultPages = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInitializePages = async () => {
    try {
      setIsInitializing(true);
      setMessage('');
      setStatus('idle');

      // Combine default pages with additional ones
      const allPages = { ...defaultPageContent, ...additionalPages };
      
      // Check for existing pages to avoid duplicates
      const { data: existingPages, error: fetchError } = await supabase
        .from('pages')
        .select('slug');
        
      if (fetchError) throw fetchError;
      
      const existingSlugs = existingPages?.map(page => page.slug) || [];
      
      // Filter pages to only add new ones that don't exist
      const pagesToAdd = Object.entries(allPages)
        .filter(([slug]) => !existingSlugs.includes(slug))
        .map(([slug, pageData]) => ({
          slug,
          title: pageData.title,
          content: pageData.content,
          meta_title: pageData.meta_title || pageData.title,
          meta_description: pageData.meta_description || '',
        }));
      
      if (pagesToAdd.length === 0) {
        setStatus('success');
        setMessage('All default pages already exist in the database.');
        toast({
          title: 'Success',
          description: 'All default pages already exist in the database.',
        });
        return;
      }

      // Insert the new pages
      const { error: insertError } = await supabase.from('pages').insert(pagesToAdd);
      
      if (insertError) throw insertError;
      
      setStatus('success');
      setMessage(`Successfully created ${pagesToAdd.length} default pages.`);
      toast({
        title: 'Success',
        description: `Created ${pagesToAdd.length} default pages.`,
      });
    } catch (error: any) {
      console.error('Error initializing pages:', error);
      setStatus('error');
      setMessage(`Error: ${error.message || 'Failed to initialize default pages'}`);
      toast({
        title: 'Error',
        description: error.message || 'Failed to initialize default pages',
        variant: 'destructive',
      });
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Initialize Default Pages</h1>
          <Button variant="outline" onClick={() => navigate('/admin/pages')}>
            Back to Pages
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Default Pages</CardTitle>
            <CardDescription>
              This will create all the default static pages needed for the website, including About, FAQ, 
              How It Works, and other required pages.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This action will add the following pages to your database (if they don't already exist):
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>About Us (/about)</li>
              <li>Frequently Asked Questions (/faq)</li>
              <li>How It Works (/how-it-works)</li>
              <li>Contact Us (/contact)</li>
              <li>Privacy Policy (/privacy)</li>
              <li>Terms of Service (/terms)</li>
              <li>Seller FAQ (/seller-faq)</li>
              <li>Plans & Pricing (/plans)</li>
              <li>Tyre Guide (/tyre-guide)</li>
              <li>Register Your Business (/register)</li>
              <li>Success Stories (/testimonials)</li>
            </ul>

            {status === 'success' && (
              <Alert className="mb-4">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {status === 'error' && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleInitializePages} 
              disabled={isInitializing}
            >
              {isInitializing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isInitializing ? 'Initializing...' : 'Initialize Default Pages'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InitializeDefaultPages;
