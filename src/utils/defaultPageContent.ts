
/**
 * Default content for static pages
 * This file has been refactored - content is now maintained in individual page components:
 * - About.tsx
 * - TyreGuide.tsx
 * - Register.tsx
 * - Testimonials.tsx
 * - Sitemap.tsx
 * 
 * For dynamic pages, content is stored in the database and accessed via PageRoute.tsx
 */

import { PageContent } from '@/integrations/supabase/types';

// Simplified version with only essential pages for database initialization
export const defaultPageContent: Record<string, PageContent> = {
  "faq": {
    title: "Frequently Asked Questions",
    slug: "faq",
    content: `<h2>Common Questions About Tyres.co.zw</h2>
      <p>This page answers common questions about using our marketplace to find the right tyres for your vehicle.</p>
      <div class="mt-6 space-y-6">
        <div>
          <h3 class="text-lg font-medium">How does the Request for Quote (RFQ) process work?</h3>
          <p>Submit your vehicle and tyre details through our simple form. Our system will match your request with verified sellers who have your specific requirements in stock. You'll receive multiple quotes to compare, typically within 24 hours.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium">Is Tyres.co.zw a tyre seller?</h3>
          <p>No, we are not a direct seller. We are a marketplace that connects tyre buyers with verified tyre sellers across Zimbabwe. We don't maintain inventory but instead help you find the best deals from businesses that do.</p>
        </div>
      </div>`,
    meta_description: "Find answers to common questions about using Tyres.co.zw - Zimbabwe's premier online tyre marketplace.",
    meta_title: "Frequently Asked Questions | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "seller-faq": {
    title: "Seller FAQ",
    slug: "seller-faq",
    content: `<h2>Frequently Asked Questions for Tyre Sellers</h2>
      <p>Learn how to maximize your presence on Tyres.co.zw and connect with more customers.</p>
      <div class="mt-6 space-y-6">
        <div>
          <h3 class="text-lg font-medium">How do I respond to Request for Quotes (RFQs)?</h3>
          <p>When a customer submits an RFQ that matches your inventory, you'll receive a notification via email and in your seller dashboard. Simply log in, review the request details, and submit your quote with pricing and availability information.</p>
        </div>
        <div>
          <h3 class="text-lg font-medium">How much does it cost to join Tyres.co.zw?</h3>
          <p>We offer flexible subscription plans starting with a free basic listing. Premium plans with enhanced features start at $20/month. Visit our <a href="/plans">plans page</a> for detailed information on pricing and features.</p>
        </div>
      </div>`,
    meta_description: "Essential information for tyre sellers on Tyres.co.zw - Learn how to maximize your business presence on Zimbabwe's leading tyre marketplace.",
    meta_title: "Seller FAQ | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "how-it-works": {
    title: "How Tyres.co.zw Works",
    slug: "how-it-works",
    content: `<h2>Finding Tyres Made Simple</h2>
      <p>Tyres.co.zw simplifies the tyre buying process in Zimbabwe through our innovative online marketplace.</p>
      <div class="mt-6 space-y-8">
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <div class="bg-brand-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h3 class="text-lg font-medium">Submit Your Requirements</h3>
            <p>Use our simple Request for Quote (RFQ) form to tell us what tyres you need. Include your vehicle details, tyre size, preferred brands, and location.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <div class="bg-brand-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h3 class="text-lg font-medium">Receive Multiple Quotes</h3>
            <p>Our system matches your request with verified tyre sellers across Zimbabwe who have your requirements in stock. Within 24 hours, you'll receive multiple competitive quotes.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <div class="bg-brand-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h3 class="text-lg font-medium">Compare and Choose</h3>
            <p>Review quotes from different sellers, comparing prices, brands, warranties, and additional services. Select the offer that provides the best value for your needs.</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4 items-start">
          <div class="bg-brand-blue text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h3 class="text-lg font-medium">Complete Your Purchase</h3>
            <p>Contact your chosen seller directly to arrange payment and delivery or installation. After your purchase, you can rate your experience to help other buyers.</p>
          </div>
        </div>
      </div>`,
    meta_description: "Learn how to use Tyres.co.zw to find the perfect tyres for your vehicle in Zimbabwe. Submit one request and receive multiple quotes from verified sellers.",
    meta_title: "How It Works | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "contact": {
    title: "Contact Us",
    slug: "contact",
    content: `<h2>Get in Touch with Tyres.co.zw</h2>
      <p>We're here to help with any questions about using our platform to find or sell tyres in Zimbabwe.</p>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium mb-4">For Tyre Buyers</h3>
          <p class="mb-4">Need help submitting a Request for Quote or choosing the right tyres?</p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="mr-2">📧</span>
              <span><strong>Email:</strong> <a href="mailto:support@tyres.co.zw">support@tyres.co.zw</a></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">📱</span>
              <span><strong>Phone:</strong> +263 77 123 4567</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">⏰</span>
              <span><strong>Hours:</strong> Monday-Friday: 8am-5pm, Saturday: 9am-1pm</span>
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-lg font-medium mb-4">For Tyre Sellers</h3>
          <p class="mb-4">Questions about listing your business or subscription plans?</p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="mr-2">📧</span>
              <span><strong>Email:</strong> <a href="mailto:sellers@tyres.co.zw">sellers@tyres.co.zw</a></span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">📱</span>
              <span><strong>Phone:</strong> +263 77 765 4321</span>
            </li>
            <li class="flex items-start">
              <span class="mr-2">⏰</span>
              <span><strong>Hours:</strong> Monday-Friday: 8am-5pm</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10">
        <h3 class="text-lg font-medium mb-4">Visit Our Office</h3>
        <p class="mb-2">123 Samora Machel Avenue<br>Harare, Zimbabwe</p>
        <p class="mb-6">We recommend scheduling an appointment before visiting.</p>
      </div>`,
    meta_description: "Get in touch with Tyres.co.zw team for support with finding tyres or selling on our marketplace. We're here to help both buyers and sellers!",
    meta_title: "Contact Us | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "plans": {
    title: "Subscription Plans",
    slug: "plans",
    content: `<h2>Choose the Right Plan for Your Tyre Business</h2>
      <p>Tyres.co.zw offers flexible subscription options to fit businesses of all sizes. Select the plan that matches your needs and budget.</p>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Free Plan -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Free</h3>
            <div class="text-3xl font-bold mb-6">$0<span class="text-lg font-normal text-gray-500">/month</span></div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Basic business profile
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                5 RFQ responses per month
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Standard response time
              </li>
              <li class="flex items-center text-gray-400">
                <svg class="h-5 w-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                No business analytics
              </li>
              <li class="flex items-center text-gray-400">
                <svg class="h-5 w-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                No featured placement
              </li>
            </ul>
            <button class="w-full py-2 px-4 border border-brand-blue text-brand-blue font-medium rounded-md hover:bg-gray-50 transition-colors">Get Started</button>
          </div>
        </div>
        
        <!-- Standard Plan -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Standard</h3>
            <div class="text-3xl font-bold mb-6">$20<span class="text-lg font-normal text-gray-500">/month</span></div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Enhanced business profile
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                25 RFQ responses per month
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Priority response queue
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Basic business analytics
              </li>
              <li class="flex items-center text-gray-400">
                <svg class="h-5 w-5 text-gray-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                No featured placement
              </li>
            </ul>
            <button class="w-full py-2 px-4 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors">Subscribe</button>
          </div>
        </div>
        
        <!-- Premium Plan -->
        <div class="bg-white rounded-lg shadow-md border border-brand-blue overflow-hidden">
          <div class="bg-brand-blue text-white py-2 px-4 text-center font-medium">
            Most Popular
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Premium</h3>
            <div class="text-3xl font-bold mb-6">$50<span class="text-lg font-normal text-gray-500">/month</span></div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Premium business profile
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Unlimited RFQ responses
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                High priority response queue
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Advanced business analytics
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Featured in search results
              </li>
            </ul>
            <button class="w-full py-2 px-4 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors">Subscribe</button>
          </div>
        </div>
        
        <!-- Premium Plus Plan -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">Premium Plus</h3>
            <div class="text-3xl font-bold mb-6">$100<span class="text-lg font-normal text-gray-500">/month</span></div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Premium+ business profile
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Unlimited RFQ responses
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Highest priority response
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Premium analytics dashboard
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Top featured placement
              </li>
              <li class="flex items-center">
                <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Dedicated account manager
              </li>
            </ul>
            <button class="w-full py-2 px-4 bg-brand-blue text-white font-medium rounded-md hover:bg-brand-blue/90 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div class="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 class="text-xl font-medium mb-4">Plan Comparison</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-3 px-4 text-left">Feature</th>
                <th class="py-3 px-4 text-center">Free</th>
                <th class="py-3 px-4 text-center">Standard</th>
                <th class="py-3 px-4 text-center">Premium</th>
                <th class="py-3 px-4 text-center">Premium Plus</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="py-3 px-4">Monthly Price</td>
                <td class="py-3 px-4 text-center">$0</td>
                <td class="py-3 px-4 text-center">$20</td>
                <td class="py-3 px-4 text-center">$50</td>
                <td class="py-3 px-4 text-center">$100</td>
              </tr>
              <tr>
                <td class="py-3 px-4">RFQ Responses</td>
                <td class="py-3 px-4 text-center">5/month</td>
                <td class="py-3 px-4 text-center">25/month</td>
                <td class="py-3 px-4 text-center">Unlimited</td>
                <td class="py-3 px-4 text-center">Unlimited</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Business Profile</td>
                <td class="py-3 px-4 text-center">Basic</td>
                <td class="py-3 px-4 text-center">Enhanced</td>
                <td class="py-3 px-4 text-center">Premium</td>
                <td class="py-3 px-4 text-center">Premium+</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Response Priority</td>
                <td class="py-3 px-4 text-center">Standard</td>
                <td class="py-3 px-4 text-center">Priority</td>
                <td class="py-3 px-4 text-center">High Priority</td>
                <td class="py-3 px-4 text-center">Highest Priority</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Featured Placement</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">✅</td>
                <td class="py-3 px-4 text-center">✅ (Top)</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Business Analytics</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">Basic</td>
                <td class="py-3 px-4 text-center">Advanced</td>
                <td class="py-3 px-4 text-center">Premium</td>
              </tr>
              <tr>
                <td class="py-3 px-4">Dedicated Account Manager</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">❌</td>
                <td class="py-3 px-4 text-center">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`,
    meta_description: "View our flexible subscription plans for tyre sellers. Choose from Free, Standard, Premium, and Premium Plus options to grow your business on Zimbabwe's tyre marketplace.",
    meta_title: "Subscription Plans & Pricing | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "privacy": {
    title: "Privacy Policy",
    slug: "privacy",
    content: `<h2>Tyres.co.zw Privacy Policy</h2>
      <p>Last updated: May 2025</p>
      <p>At Tyres.co.zw, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information when you use our online tyre marketplace.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Information We Collect</h3>
      <p>We collect information you provide directly to us, such as when you create an account, submit a request for quote, respond to a quote, or communicate with us. This may include:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Contact information (name, email address, phone number)</li>
        <li>Vehicle information (make, model, year)</li>
        <li>Tyre specifications and requirements</li>
        <li>Business information (for sellers)</li>
        <li>Payment information (processed by our secure payment processors)</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Provide, maintain, and improve our services</li>
        <li>Process and complete transactions</li>
        <li>Send you technical notices, updates, security alerts, and support messages</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Communicate with you about products, services, offers, and events</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Sharing of Information</h3>
      <p>We may share your information as follows:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>With verified tyre sellers to fulfill your requests for quotes</li>
        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
        <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Tyres.co.zw or others</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Data Security</h3>
      <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Your Choices</h3>
      <p>You can update, correct, or delete your account information at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at privacy@tyres.co.zw.</p>`,
    meta_description: "Read the Tyres.co.zw Privacy Policy to understand how we collect, use, and protect your information when using Zimbabwe's leading tyre marketplace.",
    meta_title: "Privacy Policy | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  "terms": {
    title: "Terms of Service",
    slug: "terms",
    content: `<h2>Tyres.co.zw Terms of Service</h2>
      <p>Last updated: May 2025</p>
      <p>Please read these Terms of Service carefully before using Tyres.co.zw.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">1. Acceptance of Terms</h3>
      <p>By accessing or using Tyres.co.zw, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you must not access or use our services.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">2. Description of Service</h3>
      <p>Tyres.co.zw is an online marketplace that connects tyre buyers with verified tyre sellers in Zimbabwe. We do not sell tyres directly but facilitate transactions between buyers and sellers.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">3. User Accounts</h3>
      <p>Some features of our service require registration. You agree to provide accurate information and keep it updated. You are responsible for maintaining the confidentiality of your account and password.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">4. Buyer Terms</h3>
      <p>As a buyer using Tyres.co.zw, you acknowledge that:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Tyres.co.zw does not guarantee the availability of any specific tyre or price</li>
        <li>All transactions are directly between you and the seller</li>
        <li>You are responsible for verifying the quality and suitability of tyres before purchase</li>
        <li>We do not offer refunds for purchases made through our platform</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">5. Seller Terms</h3>
      <p>As a seller using Tyres.co.zw, you agree to:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Provide accurate information about your business and products</li>
        <li>Respond to RFQs in a timely manner</li>
        <li>Honor the quotes provided through our platform</li>
        <li>Maintain high standards of customer service</li>
        <li>Pay all applicable subscription fees</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">6. Prohibited Activities</h3>
      <p>You agree not to:</p>
      <ul class="list-disc pl-5 space-y-2 my-3">
        <li>Use our service for any illegal purpose</li>
        <li>Submit false or misleading information</li>
        <li>Interfere with or disrupt our service</li>
        <li>Attempt to access data not intended for you</li>
        <li>Harass, abuse, or harm another person</li>
      </ul>
      
      <h3 class="text-xl font-medium mt-6 mb-3">7. Limitation of Liability</h3>
      <p>Tyres.co.zw is not liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, resulting from your use of our services.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">8. Changes to Terms</h3>
      <p>We reserve the right to modify these Terms of Service at any time. We will provide notice of significant changes by posting the new Terms on our website.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">9. Governing Law</h3>
      <p>These Terms shall be governed by the laws of Zimbabwe, without regard to its conflict of law provisions.</p>
      
      <h3 class="text-xl font-medium mt-6 mb-3">10. Contact</h3>
      <p>If you have any questions about these Terms, please contact us at legal@tyres.co.zw.</p>`,
    meta_description: "Read the Tyres.co.zw Terms of Service to understand the rules and guidelines for using Zimbabwe's premier online tyre marketplace.",
    meta_title: "Terms of Service | Tyres.co.zw",
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
};

export default defaultPageContent;
