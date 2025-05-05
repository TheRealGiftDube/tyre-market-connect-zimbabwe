
export const defaultPageContent = {
  'about': {
    title: 'About Tyres.co.zw',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>We connect Zimbabwean tyre buyers with local sellers quickly and simply. Our goal is to make tyre shopping as easy as ordering online – by aggregating quotes and broadening choice for every customer.</p>
          <p class="mt-3">At Tyres.co.zw, we believe that finding the right tyres shouldn't be a hassle. That's why we've created Zimbabwe's first comprehensive tyre marketplace platform, designed to eliminate the frustration of endless phone calls and shop visits to find what you need.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-3">Origin Story</h2>
          <p>Tyres.co.zw was born from a simple need: one of our founders spent hours calling shops for just one set of tyres. We realized many people in Zimbabwe face the same problem. So we built a platform that brings sellers to the buyer, not the other way around.</p>
          <p class="mt-3">Since launching in 2021, we've helped thousands of buyers find the right tyres at competitive prices and have enabled small and medium-sized tyre shops to gain customers they would never have reached otherwise. Our platform has grown from a simple idea to the country's leading tyre marketplace.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Our Team</h2>
          <p>We are a diverse team of automotive enthusiasts, digital marketing experts, and tech innovators based in Harare. Our combined experience in the automotive industry and digital technology allows us to create solutions that truly address the needs of both buyers and sellers in Zimbabwe's unique market.</p>
          <p class="mt-3">Our team is dedicated to continuously improving our platform based on user feedback and market trends. We regularly meet with tyre sellers and fleet managers to understand their challenges and adapt our services accordingly.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Our Impact</h2>
          <p>By connecting buyers directly with sellers, we've helped reduce the time spent searching for tyres by an average of 70%. For sellers, our platform has increased visibility and customer reach, with many reporting 30-50% growth in their tyre business since joining.</p>
          <p class="mt-3">Our commitment to the Zimbabwean automotive ecosystem extends beyond just connecting buyers and sellers. We regularly host workshops and webinars on tyre safety, maintenance, and selection to educate consumers and promote road safety across the country.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Join Our Network</h2>
          <p>Whether you're a tyre buyer looking for the best deals or a seller wanting to expand your customer base, Tyres.co.zw offers an efficient, user-friendly platform to meet your needs.</p>
          <p class="mt-3">For buyers, our service is completely free. For sellers, we offer various subscription plans to suit businesses of all sizes. Join today and be part of Zimbabwe's growing digital tyre marketplace.</p>
          <p class="mt-3">Ready to get started? <a href="/register" class="text-blue-600 hover:underline">Register your business</a> or <a href="/rfq" class="text-blue-600 hover:underline">submit a request for quote</a>.</p>
        </div>
      </div>
    `,
    meta_title: 'About Tyres.co.zw | Zimbabwe\'s Premier Tyre Marketplace',
    meta_description: 'Learn about Tyres.co.zw, our mission, team, and how we connect tyre buyers and sellers across Zimbabwe to revolutionize the tyre shopping experience.'
  },
  'tyre-guide': {
    title: 'Comprehensive Tyre Guide',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Understanding Tyre Basics</h2>
          <p>Your tyres are the only point of contact between your vehicle and the road. Choosing the right ones affects everything from fuel efficiency to safety. This guide will help you understand what to look for when purchasing new tyres.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">How to Read a Tyre's Sidewall</h2>
          <p>Each tyre has important information encoded on its sidewall. For example, a marking like <strong>205/55 R16 91V</strong> tells you:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li><strong>205</strong>: Tyre width in millimeters</li>
            <li><strong>55</strong>: Aspect ratio (height is 55% of the width)</li>
            <li><strong>R</strong>: Radial construction</li>
            <li><strong>16</strong>: Rim diameter in inches</li>
            <li><strong>91</strong>: Load index (indicates maximum load capacity)</li>
            <li><strong>V</strong>: Speed rating (maximum speed capability)</li>
          </ul>
          <p class="mt-3">Other markings might include the manufacturing date (a four-digit code where the first two digits represent the week and the last two represent the year of manufacture), treadwear indicators, and temperature and traction ratings.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Choosing the Right Tyre Size</h2>
          <p>Always match your vehicle's recommended tyre size. You can find the correct size in your owner's manual or on the driver's door jamb. Using incorrect tyre sizes can affect:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li>Speedometer accuracy</li>
            <li>Vehicle handling and stability</li>
            <li>Braking performance</li>
            <li>Suspension wear</li>
            <li>Transmission and differential strain</li>
          </ul>
          <p class="mt-3">When using our RFQ platform, simply enter your vehicle make and model, and we can help recommend suitable tyre sizes for your specific needs.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Tubeless vs. Tube-Type Tyres</h2>
          <p>Most modern cars use tubeless tyres, which offer several advantages:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li>Better heat dissipation, reducing blowout risk</li>
            <li>Slower air leakage in case of punctures</li>
            <li>Lighter weight, improving fuel efficiency</li>
            <li>Easier to repair</li>
          </ul>
          <p class="mt-3">Tube-type tyres contain an inner tube that holds the air. These are typically used in older vehicles, some motorcycles, and agricultural equipment. In Zimbabwe's market, tubeless tyres are the standard for passenger vehicles.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Tyre Types for Zimbabwe's Climate</h2>
          <p>Zimbabwe's predominantly warm climate means most drivers use all-season or summer tyres year-round. However, understanding different tyre types is still valuable:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Summer Tyres</strong>: Excellent wet and dry grip in warm conditions, with optimized tread patterns for Zimbabwe's typical road conditions.</li>
            <li><strong>All-Season Tyres</strong>: A good compromise with moderate performance in both dry and wet conditions. These are popular due to their versatility.</li>
            <li><strong>All-Terrain Tyres</strong>: Ideal for those who frequently drive on rural or unpaved roads, offering better traction on loose surfaces.</li>
          </ul>
          <p class="mt-3">For most urban drivers in Zimbabwe, high-quality all-season tyres from reputable brands offer the best balance of performance, durability, and value.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Tyre Rotation Tips</h2>
          <p>Regular tyre rotation extends tread life by ensuring even wear. In Zimbabwe's conditions, we recommend rotation every 10,000 kilometers (or with each oil change).</p>
          <p class="mt-3">The optimal rotation pattern depends on your vehicle's drive system:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li><strong>Front-wheel drive</strong>: Move front tyres to the rear in direct positions, and cross-switch rear tyres to the front.</li>
            <li><strong>Rear-wheel drive</strong>: Move rear tyres to the front without crossing, and cross-switch front tyres to the rear.</li>
            <li><strong>All-wheel drive</strong>: Use a cross pattern for optimal wear distribution.</li>
          </ul>
          <p class="mt-3">Consistent rotation not only extends tyre life but can also improve fuel efficiency and handling.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">When to Replace Your Tyres</h2>
          <p>Even with proper maintenance, all tyres eventually need replacement. Look for these warning signs:</p>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li>Tread depth below 1.6 mm (insert a coin in the tread; if you can see the top of the Queen's head, it's time for new tyres)</li>
            <li>Uneven wear patterns</li>
            <li>Cracks or cuts in the sidewall</li>
            <li>Bulges or blisters on the tyre surface</li>
            <li>Excessive vibration while driving</li>
            <li>Tyres older than 5-6 years, regardless of tread depth</li>
          </ul>
          <p class="mt-3">When it's time for new tyres, use our RFQ service to get competitive quotes from verified sellers across Zimbabwe.</p>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 class="text-lg font-semibold text-blue-700">Need Help Choosing Tyres?</h3>
          <p>Let our network of verified tyre experts help you find the perfect tyres for your vehicle and driving needs. <a href="/rfq" class="text-blue-600 hover:underline font-medium">Submit a request for quote now</a>.</p>
        </div>
      </div>
    `,
    meta_title: 'Complete Tyre Guide | Tyres.co.zw',
    meta_description: 'Learn everything about tyres with our comprehensive guide. Understand tyre sizes, types, maintenance tips, and more to make informed decisions for your vehicle.'
  },
  'register': {
    title: 'Register Your Tyre Business',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Join Zimbabwe's Leading Tyre Marketplace</h2>
          <p>Expand your customer base and increase your sales by listing your tyre business on Tyres.co.zw. Our platform connects tyre sellers directly with buyers who are actively looking to purchase, providing you with high-quality leads and new business opportunities.</p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Why Register Your Business?</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="border rounded-lg p-4 bg-gray-50">
              <h3 class="text-lg font-medium text-blue-600 mb-2">Expand Your Digital Presence</h3>
              <p>Get discovered by thousands of potential customers searching for tyres online. No need for expensive website development—we provide a professional digital storefront for your business.</p>
            </div>
            <div class="border rounded-lg p-4 bg-gray-50">
              <h3 class="text-lg font-medium text-blue-600 mb-2">Qualified Leads</h3>
              <p>Receive Request for Quotes (RFQs) from buyers who are ready to make a purchase, eliminating time wasted on casual inquiries.</p>
            </div>
            <div class="border rounded-lg p-4 bg-gray-50">
              <h3 class="text-lg font-medium text-blue-600 mb-2">Compete with Larger Chains</h3>
              <p>Level the playing field with larger competitors by showcasing your inventory, services, and customer reviews on our trusted platform.</p>
            </div>
            <div class="border rounded-lg p-4 bg-gray-50">
              <h3 class="text-lg font-medium text-blue-600 mb-2">Streamlined Communication</h3>
              <p>Our platform handles the initial customer inquiries, allowing you to focus on providing quotes and closing sales.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Subscription Plans Designed for Your Business</h2>
          <p>We offer flexible subscription options to suit businesses of all sizes:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div class="border rounded-lg p-5">
              <h3 class="text-lg font-bold mb-1">Free</h3>
              <p class="text-2xl font-semibold mb-4">$0<span class="text-sm text-gray-500 font-normal">/month</span></p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Basic business listing</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>1 location</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  <span>No RFQ responses</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Up to 3 product photos</span>
                </li>
              </ul>
              <a href="/auth?type=signup" class="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded">
                Get Started
              </a>
            </div>
            
            <div class="border rounded-lg p-5 border-blue-200 bg-blue-50">
              <h3 class="text-lg font-bold mb-1">Standard</h3>
              <p class="text-2xl font-semibold mb-4">$20<span class="text-sm text-gray-500 font-normal">/month</span></p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Enhanced business listing</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Verified Seller badge</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Up to 15 RFQs/month</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Up to 10 product photos</span>
                </li>
              </ul>
              <a href="/auth?type=signup&plan=standard" class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Select Plan
              </a>
            </div>
            
            <div class="border rounded-lg p-5 border-purple-200 bg-purple-50">
              <h3 class="text-lg font-bold mb-1">Premium</h3>
              <div class="flex items-center mb-4">
                <p class="text-2xl font-semibold">$50<span class="text-sm text-gray-500 font-normal">/month</span></p>
                <span class="ml-2 bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded">Popular</span>
              </div>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Premium listing + priority ranking</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Unlimited RFQs</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Custom subdomain</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Up to 20 product photos</span>
                </li>
              </ul>
              <a href="/auth?type=signup&plan=premium" class="block text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
                Select Plan
              </a>
            </div>
            
            <div class="border rounded-lg p-5 border-gray-800 bg-gray-50">
              <h3 class="text-lg font-bold mb-1">Premium Plus</h3>
              <p class="text-2xl font-semibold mb-4">$100<span class="text-sm text-gray-500 font-normal">/month</span></p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>All Premium features</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>White-labeled website</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Advanced analytics dashboard</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>
              <a href="/auth?type=signup&plan=premium-plus" class="block text-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded">
                Select Plan
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-3">Getting Started is Easy</h2>
          <ol class="list-decimal pl-5 space-y-3">
            <li><strong>Register your account</strong> - Sign up with your business details and select your preferred plan.</li>
            <li><strong>Complete your profile</strong> - Add information about your business, services, and product offerings.</li>
            <li><strong>Start receiving leads</strong> - Respond to buyer RFQs and grow your customer base immediately.</li>
          </ol>
          <p class="mt-4">Our team is available to help you set up your seller profile and maximize your presence on our platform.</p>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700">Ready to Grow Your Business?</h3>
          <p class="mb-4">Join hundreds of tyre sellers already benefiting from our platform.</p>
          <a href="/auth?type=signup" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded">
            Register Your Business Now
          </a>
        </div>
      </div>
    `,
    meta_title: 'Register Your Tyre Business | Tyres.co.zw',
    meta_description: 'Join Zimbabwe\'s leading tyre marketplace. Register your tyre business today and connect with potential customers actively looking for your products.'
  },
  'testimonials': {
    title: 'Success Stories from Our Users',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">What Our Customers Say</h2>
          <p class="mb-6">Don't take our word for it. Here's what buyers and sellers across Zimbabwe have to say about their experience with Tyres.co.zw.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                  J
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">Jane Moyo</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Harare, Private Buyer</p>
                <p class="italic">"I needed tyres for my Honda urgently and dreaded making dozens of calls. With Tyres.co.zw, I submitted one request and got quotes from five sellers within 2 hours! The competitive pricing saved me over $50 per tyre, and the whole process was incredibly smooth."</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">
                  R
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">Robert Sibanda</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Bulawayo, Fleet Manager</p>
                <p class="italic">"Managing tyre purchases for our company fleet used to be a logistical nightmare. Since discovering Tyres.co.zw, we have a streamlined process that saves time and ensures we get the best prices. The platform has become an essential part of our fleet management process."</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl">
                  T
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">Tendai Nyathi</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Mutare, Tyre Shop Owner</p>
                <p class="italic">"Since listing our shop on Tyres.co.zw, we've seen a 40% increase in new customers. The platform brings us qualified buyers who know exactly what they want, making sales much easier. The subscription fee pays for itself within the first week of each month through new business."</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold text-xl">
                  M
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">Mary Chigumba</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Gweru, Private Buyer</p>
                <p class="italic">"As a woman, I was often worried about being overcharged when buying tyres. Tyres.co.zw gave me the confidence to compare prices transparently and find a trustworthy seller. I found rare tyres for my vintage car that local shops said were unavailable in Zimbabwe."</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold text-xl">
                  D
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">David Mwanza</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Masvingo, Small Business Owner</p>
                <p class="italic">"Our tyre shop was struggling to compete with larger chains until we joined Tyres.co.zw. The Premium plan gave us digital visibility we couldn't afford otherwise. Now we regularly serve customers from across the region who find us through the platform."</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-50 p-6 rounded-lg border">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                  L
                </div>
              </div>
              <div class="ml-4">
                <div class="flex items-center mb-1">
                  <span class="text-yellow-400">★★★★★</span>
                  <span class="ml-2 font-medium">Linda Masuku</span>
                </div>
                <p class="text-gray-600 text-sm mb-3">Harare, Transportation Company</p>
                <p class="italic">"For our transport business, tyre costs are a significant expense. The RFQ system has transformed how we source tyres, creating competition among sellers and resulting in better prices. We've reduced our tyre expenses by 15% while maintaining quality."</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-2xl font-semibold mb-4">Real Results for Businesses</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="bg-blue-50 p-5 rounded-lg">
              <p class="text-4xl font-bold text-blue-600 mb-2">40%</p>
              <p>Average increase in new customers reported by sellers in their first 3 months</p>
            </div>
            <div class="bg-green-50 p-5 rounded-lg">
              <p class="text-4xl font-bold text-green-600 mb-2">70%</p>
              <p>Of RFQs result in completed tyre purchases</p>
            </div>
            <div class="bg-purple-50 p-5 rounded-lg">
              <p class="text-4xl font-bold text-purple-600 mb-2">85%</p>
              <p>Of sellers renew their subscription after the first month</p>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Join Our Success Stories</h3>
          <p class="mb-4">Whether you're a buyer looking for the best tyre deals or a seller wanting to grow your business, Tyres.co.zw is here to help.</p>
          <div class="flex flex-wrap gap-4">
            <a href="/rfq" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Submit an RFQ
            </a>
            <a href="/register" class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
              Register Your Business
            </a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Success Stories from Tyres.co.zw Users | Testimonials',
    meta_description: 'Read success stories from both tyre buyers and sellers using Tyres.co.zw. Discover how our platform is transforming the tyre market in Zimbabwe.'
  },
  'sitemap': {
    title: 'Site Map',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Tyres.co.zw Site Map</h2>
          <p>Find everything on our website with this comprehensive site map. Navigate directly to any section or explore content you may have missed.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Main Pages</h3>
            <ul class="space-y-2">
              <li>
                <a href="/" class="text-blue-600 hover:underline">Home Page</a>
                <p class="text-sm text-gray-600">Our main landing page with featured sellers and services</p>
              </li>
              <li>
                <a href="/about" class="text-blue-600 hover:underline">About Us</a>
                <p class="text-sm text-gray-600">Learn about our mission and team</p>
              </li>
              <li>
                <a href="/contact" class="text-blue-600 hover:underline">Contact Us</a>
                <p class="text-sm text-gray-600">Get in touch with our support team</p>
              </li>
              <li>
                <a href="/how-it-works" class="text-blue-600 hover:underline">How It Works</a>
                <p class="text-sm text-gray-600">Step-by-step guide to using our platform</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Buyer Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="/sellers" class="text-blue-600 hover:underline">Find Tyre Sellers</a>
                <p class="text-sm text-gray-600">Browse our directory of tyre sellers</p>
              </li>
              <li>
                <a href="/rfq" class="text-blue-600 hover:underline">Submit an RFQ</a>
                <p class="text-sm text-gray-600">Request quotes from multiple sellers</p>
              </li>
              <li>
                <a href="/tyre-guide" class="text-blue-600 hover:underline">Tyre Guide</a>
                <p class="text-sm text-gray-600">Educational resources about tyres</p>
              </li>
              <li>
                <a href="/faq" class="text-blue-600 hover:underline">Buyer FAQs</a>
                <p class="text-sm text-gray-600">Answers to common buyer questions</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Seller Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="/register" class="text-blue-600 hover:underline">Register Your Business</a>
                <p class="text-sm text-gray-600">Join our platform as a seller</p>
              </li>
              <li>
                <a href="/plans" class="text-blue-600 hover:underline">Subscription Plans</a>
                <p class="text-sm text-gray-600">View our seller subscription options</p>
              </li>
              <li>
                <a href="/seller-faq" class="text-blue-600 hover:underline">Seller FAQs</a>
                <p class="text-sm text-gray-600">Answers to common seller questions</p>
              </li>
              <li>
                <a href="/testimonials" class="text-blue-600 hover:underline">Success Stories</a>
                <p class="text-sm text-gray-600">Read testimonials from our users</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">User Account</h3>
            <ul class="space-y-2">
              <li>
                <a href="/auth" class="text-blue-600 hover:underline">Login / Sign Up</a>
                <p class="text-sm text-gray-600">Access your account or create a new one</p>
              </li>
              <li>
                <a href="/auth?type=reset" class="text-blue-600 hover:underline">Reset Password</a>
                <p class="text-sm text-gray-600">Reset your account password</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Legal Information</h3>
            <ul class="space-y-2">
              <li>
                <a href="/terms" class="text-blue-600 hover:underline">Terms of Service</a>
                <p class="text-sm text-gray-600">Rules and guidelines for using our platform</p>
              </li>
              <li>
                <a href="/privacy" class="text-blue-600 hover:underline">Privacy Policy</a>
                <p class="text-sm text-gray-600">How we handle your personal information</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Additional Resources</h3>
            <ul class="space-y-2">
              <li>
                <a href="/sitemap" class="text-blue-600 hover:underline">Site Map</a>
                <p class="text-sm text-gray-600">This comprehensive site directory</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 bg-gray-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-3">Need Help Finding Something?</h3>
          <p>If you can't find what you're looking for, please <a href="/contact" class="text-blue-600 hover:underline">contact our support team</a> for assistance.</p>
        </div>
      </div>
    `,
    meta_title: 'Sitemap | Tyres.co.zw',
    meta_description: 'Navigate our website easily with this complete site map of Tyres.co.zw. Find direct links to all our pages and resources.'
  },
  // Enhancing existing content for other pages
  'contact': {
    title: 'Contact Us',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Get in Touch with Our Team</h2>
          <p>Have questions about our services? Want to learn more about how Tyres.co.zw can help you find the right tyres or grow your business? Our dedicated team is here to assist you.</p>
          <p class="mt-3">Whether you're a buyer looking for specific tyres or a seller interested in joining our platform, we're ready to provide the information and support you need.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="font-medium">Email</p>
                  <a href="mailto:info@tyres.co.zw" class="text-blue-600 hover:underline">info@tyres.co.zw</a>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="font-medium">Phone</p>
                  <p>+263 77 123 4567</p>
                  <p class="text-sm text-gray-500 mt-1">Monday to Friday, 8:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="font-medium">Office Address</p>
                  <p>123 Main Street, Harare, Zimbabwe</p>
                  <p class="text-sm text-gray-500 mt-1">Visits by appointment only</p>
                </div>
              </li>
            </ul>
            
            <div class="mt-8">
              <h4 class="text-lg font-semibold mb-2">For Business Inquiries</h4>
              <p>Interested in partnerships or collaborations? Email us at <a href="mailto:partnerships@tyres.co.zw" class="text-blue-600 hover:underline">partnerships@tyres.co.zw</a></p>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p class="text-yellow-700">Our contact form is coming soon! In the meantime, please email us directly.</p>
            </div>
            
            <div class="bg-gray-50 p-5 rounded-lg mt-6">
              <h4 class="font-medium mb-3">Frequently Asked Questions</h4>
              <ul class="space-y-2">
                <li>
                  <a href="/faq#submit-rfq" class="text-blue-600 hover:underline">How do I submit an RFQ?</a>
                </li>
                <li>
                  <a href="/faq#seller-verification" class="text-blue-600 hover:underline">Are sellers on your platform verified?</a>
                </li>
                <li>
                  <a href="/faq#seller-registration" class="text-blue-600 hover:underline">How do I register as a seller?</a>
                </li>
                <li>
                  <a href="/faq" class="text-blue-600 hover:underline">View all FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Connect With Us</h3>
          <p class="mb-4">Follow us on social media for the latest updates, tyre tips, and special offers.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-600 hover:text-blue-800">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" class="text-blue-600 hover:text-blue-800">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" class="text-blue-600 hover:text-blue-800">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Contact Tyres.co.zw | Get in Touch',
    meta_description: "Get in touch with the Tyres.co.zw team. We're here to help with any questions about our tyre marketplace."
  },
  'privacy': {
    title: 'Privacy Policy',
    content: `
      <div class="space-y-6">
        <p>Last updated: June 1, 2023</p>
        
        <h2 class="text-xl font-semibold">1. Introduction</h2>
        <p>This Privacy Policy explains how Tyres.co.zw ("we", "us", or "our") collects, uses, and shares your personal information when you use our website and services.</p>
        <p>At Tyres.co.zw, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This policy outlines our practices regarding the collection, use, and disclosure of your information when you use our tyre marketplace platform.</p>
        <p>By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        
        <h2 class="text-xl font-semibold">2. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, submit a request for quote (RFQ), or contact us. This may include:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Contact information (name, email, phone number)</li>
          <li>Account credentials</li>
          <li>Location information</li>
          <li>Vehicle and tyre specifications</li>
          <li>Business information (for sellers)</li>
          <li>Payment information (for subscription payments)</li>
          <li>Communication preferences</li>
        </ul>
        <p>We also collect certain information automatically when you use our services, including:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Log data (IP address, browser type, pages visited)</li>
          <li>Device information</li>
          <li>Cookie and tracking technology data</li>
          <li>Usage patterns and preferences</li>
        </ul>
        
        <h2 class="text-xl font-semibold">3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Provide and improve our services</li>
          <li>Connect buyers and sellers</li>
          <li>Process RFQs and quotes</li>
          <li>Send notifications about your account or transactions</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Prevent fraud and ensure compliance with our terms</li>
          <li>Communicate about new features or promotions (with your consent)</li>
          <li>Process subscription payments for sellers</li>
        </ul>
        
        <h2 class="text-xl font-semibold">4. Information Sharing and Disclosure</h2>
        <p>We may share your information in the following situations:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Between Buyers and Sellers:</strong> When you submit an RFQ as a buyer, relevant information is shared with participating sellers to facilitate quotes. Similarly, when sellers respond to RFQs, their business information is shared with the buyer.</li>
          <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
          <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
          <li><strong>With Your Consent:</strong> We may share information with third parties when you have given us your consent to do so.</li>
        </ul>
        
        <h2 class="text-xl font-semibold">5. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include internal reviews of our data collection, storage, and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data.</p>
        <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
        
        <h2 class="text-xl font-semibold">6. Your Data Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Accessing the personal information we hold about you</li>
          <li>Correcting inaccurate or incomplete information</li>
          <li>Requesting deletion of your personal information</li>
          <li>Objecting to or restricting certain processing of your data</li>
          <li>Requesting portability of your data</li>
          <li>Withdrawing consent where processing is based on consent</li>
        </ul>
        <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
        
        <h2 class="text-xl font-semibold">7. Cookie Policy</h2>
        <p>Tyres.co.zw uses cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</p>
        <p>We use cookies for:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Remembering your preferences and settings</li>
          <li>Authenticating users and maintaining sessions</li>
          <li>Analyzing site usage to improve our services</li>
          <li>Enabling certain functions and services</li>
        </ul>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
        
        <h2 class="text-xl font-semibold">8. Children's Privacy</h2>
        <p>Our service is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to remove such information from our systems.</p>
        
        <h2 class="text-xl font-semibold">9. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        
        <h2 class="text-xl font-semibold">10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p><a href="mailto:privacy@tyres.co.zw" class="text-blue-600 hover:underline">privacy@tyres.co.zw</a></p>
        <p>Tyres.co.zw<br />123 Main Street<br />Harare, Zimbabwe</p>
      </div>
    `,
    meta_title: 'Privacy Policy | Tyres.co.zw',
    meta_description: 'Our Privacy Policy explains how we collect, use, and protect your personal information when you use Tyres.co.zw.'
  },
  'terms': {
    title: 'Terms of Service',
    content: `
      <div class="space-y-6">
        <p>Last updated: June 1, 2023</p>
        
        <h2 class="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p>By accessing or using Tyres.co.zw, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        <p>These Terms of Service ("Terms") govern your access to and use of the Tyres.co.zw website and services (collectively, the "Services"). By registering for an account or using any portion of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>
        
        <h2 class="text-xl font-semibold">2. Description of Service</h2>
        <p>Tyres.co.zw is a platform that connects tyre buyers with sellers in Zimbabwe. We facilitate the request for quotes (RFQs) and communication between parties but are not directly involved in the transaction.</p>
        <p>Our platform allows buyers to submit requests for tyre quotes and enables sellers to respond with pricing and availability information. We provide tools for communication between parties, business listings, and subscription services for sellers to promote their businesses.</p>
        <p>Tyres.co.zw is not a seller of tyres and does not provide warranties for products sold through connections made on our platform. We operate solely as an intermediary service connecting buyers with sellers.</p>
        
        <h2 class="text-xl font-semibold">3. User Accounts</h2>
        <p>You must create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
        <p>When creating an account, you agree to provide accurate, current, and complete information. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
        <p>We reserve the right to disable any user account if we believe you have violated any provisions of these Terms or if activities occur which threaten the security, integrity, or proper use of our Services.</p>
        
        <h2 class="text-xl font-semibold">4. Buyer and Seller Responsibilities</h2>
        <p>Buyers must provide accurate information in RFQs. Sellers must provide accurate quotes and honor them if accepted. All transactions between buyers and sellers are their sole responsibility.</p>
        <p><strong>As a Buyer:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>You agree to provide accurate information when submitting RFQs</li>
          <li>You understand that submitting an RFQ does not guarantee responses from sellers</li>
          <li>You are responsible for evaluating seller responses and making informed purchase decisions</li>
          <li>You agree to communicate respectfully with sellers and our support team</li>
        </ul>
        <p><strong>As a Seller:</strong></p>
        <ul class="list-disc pl-5 space-y-1">
          <li>You agree to provide accurate information about your business and products</li>
          <li>You commit to responding to RFQs in a timely manner as per the service level agreements</li>
          <li>You are responsible for honoring quotes that you provide through our platform</li>
          <li>You agree to maintain professional standards when dealing with buyers</li>
          <li>You will comply with all applicable laws and regulations related to your business</li>
        </ul>
        
        <h2 class="text-xl font-semibold">5. Subscriptions and Payments</h2>
        <p>Seller subscriptions are billed according to the plan selected. Cancellations must be made before the billing cycle renews to avoid charges.</p>
        <p>By selecting a premium plan, you authorize us to charge your payment method for the plan price stated at the time of purchase, plus any applicable taxes. Subscriptions automatically renew each billing period (monthly or annually, depending on your selection) unless canceled at least 24 hours before the next renewal date.</p>
        <p>You can cancel your subscription at any time through your account settings or by contacting customer support. If you cancel, you may continue to use your subscription until the end of your current billing period, but you will not receive a refund for the current billing period.</p>
        <p>We reserve the right to change our subscription plans or adjust pricing for our services in any manner and at any time as we may determine in our sole and absolute discretion. Any price changes will become effective in the billing period following the announcement of such changes.</p>
        
        <h2 class="text-xl font-semibold">6. Limitation of Liability</h2>
        <p>We are not liable for disputes between buyers and sellers, product quality, or any damages arising from the use of our platform.</p>
        <p>To the maximum extent permitted by applicable law, in no event shall Tyres.co.zw, its affiliates, directors, employees, or its licensors be liable for:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>Any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the service</li>
          <li>Any actions of buyers or sellers using our platform</li>
          <li>Any products purchased or obtained through connections established on our platform</li>
          <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
          <li>Any interruption or cessation of transmission to or from our service</li>
          <li>Any bugs, viruses, trojan horses, or the like which may be transmitted to or through our service by any third party</li>
        </ul>
        <p>This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.</p>
        
        <h2 class="text-xl font-semibold">7. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are owned by Tyres.co.zw and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        <p>You may not copy, modify, create derivative works, publicly display, publicly perform, republish, transmit, or distribute the material on our website without prior written consent. If you print or download material from our website, you must retain all copyright and other proprietary notices.</p>
        
        <h2 class="text-xl font-semibold">8. Termination</h2>
        <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the account settings.</p>
        
        <h2 class="text-xl font-semibold">9. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law provisions.</p>
        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
        
        <h2 class="text-xl font-semibold">10. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
        
        <h2 class="text-xl font-semibold">11. Contact</h2>
        <p>If you have questions about these Terms, please contact us at <a href="mailto:terms@tyres.co.zw" class="text-blue-600 hover:underline">terms@tyres.co.zw</a>.</p>
      </div>
    `,
    meta_title: 'Terms of Service | Tyres.co.zw',
    meta_description: 'Read our Terms of Service to understand the rules and guidelines for using Tyres.co.zw.'
  },
  'how-it-works': {
    title: 'How It Works',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Finding the Perfect Tyres Has Never Been Easier</h2>
          <p>Tyres.co.zw connects tyre buyers with sellers in three simple steps. Our platform streamlines the tyre purchasing process, saving you time and money.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-blue-700">1</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Submit your RFQ</h3>
            <p>Complete our simple Request for Quote (RFQ) form with your tyre specifications, vehicle details, and location. It takes less than 2 minutes to submit your requirements.</p>
            <p class="mt-3 text-sm text-gray-600">Our smart system routes your request to the most relevant sellers in your area, ensuring you get responses from businesses that can actually help you.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-blue-700">2</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Receive quotes</h3>
            <p>Within hours, verified tyre sellers respond with their best offers. Compare prices, brands, warranty options, and availability all in one place without making multiple calls.</p>
            <p class="mt-3 text-sm text-gray-600">Each seller's profile includes ratings from other buyers, helping you make an informed decision based on price and reputation.</p>
          </div>
          
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-xl font-bold text-blue-700">3</span>
            </div>
            <h3 class="text-lg font-semibold mb-2">Choose and connect</h3>
            <p>Select your preferred quote and connect directly with the seller to finalize your purchase. Arrange payment and pickup or delivery according to your convenience.</p>
            <p class="mt-3 text-sm text-gray-600">After your purchase, you can rate the seller to help other buyers make good choices in the future.</p>
          </div>
        </div>
        
        <div class="border-t border-b py-8">
          <h2 class="text-2xl font-semibold mb-6 text-center">Why Tyres.co.zw Works</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-3">Benefits for Buyers</h3>
              <ul class="space-y-4">
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Save Time</p>
                    <p class="text-gray-600">No more calling multiple shops or driving around town. Submit one request and receive multiple quotes.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Compare Options</p>
                    <p class="text-gray-600">Easily compare prices, brands, warranties, and availability from multiple sellers side by side.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Verified Sellers</p>
                    <p class="text-gray-600">Shop with confidence knowing that all sellers are verified businesses with ratings and reviews.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Completely Free</p>
                    <p class="text-gray-600">Our service is 100% free for buyers. No hidden fees or charges—ever.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-3">Benefits for Sellers</h3>
              <ul class="space-y-4">
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Quality Leads</p>
                    <p class="text-gray-600">Receive RFQs from buyers actively looking to purchase, not just browsing or price checking.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Digital Presence</p>
                    <p class="text-gray-600">Establish your online presence without building your own website or managing complex digital marketing.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Build Reputation</p>
                    <p class="text-gray-600">Grow your business through positive ratings and reviews from satisfied customers.</p>
                  </div>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p class="font-medium">Flexible Plans</p>
                    <p class="text-gray-600">Choose from subscription options designed to suit businesses of all sizes.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="text-lg font-medium mb-2">Is Tyres.co.zw free to use?</h3>
              <p>Yes, our service is completely free for buyers. Sellers pay a subscription fee to access our platform and respond to RFQs.</p>
            </div>
            
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="text-lg font-medium mb-2">How quickly will I receive quotes?</h3>
              <p>Most buyers receive their first quotes within 2-4 hours, with the majority receiving multiple responses within 24 hours.</p>
            </div>
            
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="text-lg font-medium mb-2">Do you handle the payment process?</h3>
              <p>No, we connect buyers and sellers but are not involved in the payment process. Buyers and sellers arrange payment directly.</p>
            </div>
            
            <div class="bg-gray-50 p-5 rounded-lg">
              <h3 class="text-lg font-medium mb-2">Can I request quotes for specialty tyres?</h3>
              <p>Absolutely! Our network includes specialty tyre providers. Simply specify your exact requirements in the RFQ form.</p>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-5 mt-8">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Ready to Get Started?</h3>
          <p class="mb-4">Join thousands of satisfied customers who have found the perfect tyres at great prices.</p>
          <div class="flex flex-wrap gap-4">
            <a href="/rfq" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Submit an RFQ
            </a>
            <a href="/register" class="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
              Register as a Seller
            </a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'How It Works | Tyres.co.zw',
    meta_description: 'Learn how to use Tyres.co.zw to find and purchase tyres from sellers across Zimbabwe in three easy steps.'
  },
  'faq': {
    title: 'Frequently Asked Questions',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Find Answers to Common Questions</h2>
          <p>Browse our comprehensive FAQ section to find answers about using Tyres.co.zw, submitting requests for quotes, connecting with sellers, and more.</p>
        </div>
        
        <div class="space-y-8">
          <div id="rfq-section">
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Request for Quote (RFQ) Questions</h3>
            
            <div class="space-y-6">
              <div id="submit-rfq">
                <h4 class="text-lg font-medium">How do I submit an RFQ?</h4>
                <p>Log into your buyer account, go to "Create RFQ", and fill in the tyre details (size, quantity, vehicle info, etc.). Submit the form to broadcast the request to our network of verified tyre sellers. The form takes less than 2 minutes to complete, and you'll start receiving responses shortly after submission.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What is an RFQ?</h4>
                <p>RFQ stands for Request for Quote. It's your bid for sellers to provide a price; think of it as asking multiple tyre shops for price quotes at once. By submitting a single RFQ, you can receive multiple quotes from different sellers, allowing you to compare prices, brands, and availability without making numerous phone calls or visits to different shops.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Do I need an account to get quotes?</h4>
                <p>Yes, you must create a free buyer account so we can share your request with sellers and communicate results. Registration is quick and simple, requiring only basic contact information. Having an account also allows you to track your RFQs, review past quotes, and build relationships with preferred sellers for future purchases.</p>
              </div>
              
              <div id="seller-verification">
                <h4 class="text-lg font-medium">Are sellers verified?</h4>
                <p>We verify business details when they sign up, but we recommend checking seller ratings and profile info. Verified badges indicate a seller has completed our verification process, which includes confirming their business registration, physical location, and contact details. This helps ensure you're dealing with legitimate businesses and reduces the risk of fraudulent activities.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How long do quotes take?</h4>
                <p>Sellers typically respond within a few hours, but it can take up to 24–48 hours for all responses. You can view quote status on your dashboard. The response time may vary depending on the specificity of your request, the time of submission, and the availability of the tyre specifications you're looking for. Our system notifies you via email and in-app notifications when new quotes arrive.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Can I delete or edit an RFQ?</h4>
                <p>Yes. On your RFQ list page, you can cancel or remove any open RFQ. (After removal, sellers can no longer see it.) Edit the request only before any quotes are received. This gives you flexibility if you made a mistake in your initial request or if your requirements have changed. Once quotes start coming in, the RFQ details are locked to ensure fairness in the quoting process.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Managing Quotes</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">What happens if no one responds?</h4>
                <p>If no sellers answer in the first day, you'll be notified. You may repost or extend the deadline. You'll never be charged for an unanswered RFQ. Our customer support team can also help you refine your request to improve the chances of getting responses, especially for rare or specialized tyre needs. We may also reach out directly to sellers who might be able to fulfill your specific requirements.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I view received quotes?</h4>
                <p>On your dashboard under "My Quotes", you can compare all responses side by side. Each quote will list price, quantity, and seller info so you can pick your best option. The comparison view makes it easy to evaluate different offers based on price, brand, warranty terms, and seller ratings. You can also sort and filter quotes based on these criteria to quickly find the best match for your needs.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Can I contact a seller directly?</h4>
                <p>Yes. Once quotes come in, you can message sellers through our chat tool or call them using the contact info they provide. No phone number is shared until you engage through the platform for privacy. This two-step process protects your personal information while still allowing direct communication with sellers once you've identified potential matches for your tyre needs.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I choose a quote?</h4>
                <p>Simply click "Accept Quote" on the one you like. The seller will be notified and you can then arrange purchase/pickup. (We only facilitate leads; payments are done offline.) Accepting a quote does not obligate you to complete the purchase, but it does signal to the seller that you're interested in proceeding with their offer. This helps sellers prioritize serious buyers and prepare for your potential purchase.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Payments and Subscriptions</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">Is Tyres.co.zw free?</h4>
                <p>For buyers, yes. Posting RFQs and getting quotes is 100% free. (We make money from seller subscriptions, not by charging buyers.) Our business model ensures that buyers never pay to access our service, while sellers benefit from qualified leads and digital visibility that helps grow their business. This approach allows us to maintain a large network of active buyers, which in turn attracts more sellers to the platform.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do subscription fees work?</h4>
                <p>Buyers aren't charged subscriptions. Sellers pay monthly via credit card or mobile payment to access leads (details in "Plans"). Seller subscription plans are tiered based on the level of exposure and features desired, with options ranging from our basic Free tier to the comprehensive Premium Plus plan at $100/month. Each tier offers increasing benefits, including higher response limits, better visibility in search results, and additional marketing features.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Can I get a refund?</h4>
                <p>Buyers: Yes, on a case-by-case basis if an order fails. Sellers: See the Subscription Terms for refund policy (typically none after 30 days of use). Contact support if you need help. For buyers, refunds would apply to any optional paid services you might have purchased. For sellers, we generally offer a satisfaction guarantee for the first month, allowing new businesses to try our platform with reduced risk.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What is the referral program?</h4>
                <p>Refer a friend with your unique link. When they make their first tyre purchase, you earn credit for future RFQs. (Full terms are on the Referrals page.) Our referral program rewards both the referrer and the new user, creating a win-win situation. Credits earned can be used toward premium features or shared with other users. The program helps us grow our community while thanking existing users for their support.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Technical and Account Questions</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">What devices can I use to access Tyres.co.zw?</h4>
                <p>Our platform is fully responsive and works on any device with an internet connection. You can submit RFQs and manage your account from desktop computers, laptops, tablets, and smartphones. The mobile experience is optimized for on-the-go use, allowing you to check quotes and communicate with sellers from anywhere.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I update my account information?</h4>
                <p>Log into your account, click on your profile icon in the top right corner, and select "Account Settings." From there, you can update your contact information, change your password, and manage notification preferences. Keeping your information current ensures you receive timely updates about your RFQs and can be contacted by sellers when necessary.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Is my personal information secure?</h4>
                <p>Yes, we take data security seriously. We use industry-standard encryption techniques to protect your personal information, and we never share your contact details with sellers until you explicitly engage with a quote. Our privacy policy details how we collect, use, and protect your information, and we comply with all relevant data protection regulations.</p>
              </div>
              
              <div id="seller-registration">
                <h4 class="text-lg font-medium">How do I register as a seller?</h4>
                <p>Visit our <a href="/register" class="text-blue-600 hover:underline">Register Your Business</a> page to create a seller account. You'll need to provide basic business information, select a subscription plan, and complete the verification process. Our team reviews all seller applications to ensure the authenticity and quality of businesses on our platform, typically completing the process within 1-2 business days.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Still Have Questions?</h3>
          <p class="mb-4">If you couldn't find the answer you're looking for, our support team is here to help.</p>
          <a href="/contact" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Contact Us
          </a>
        </div>
      </div>
    `,
    meta_title: 'Frequently Asked Questions | Tyres.co.zw',
    meta_description: 'Find answers to common questions about using Tyres.co.zw, including how to submit RFQs, get quotes, and connect with tyre sellers across Zimbabwe.'
  },
  'plans': {
    title: 'Subscription Plans for Sellers',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Choose the Right Plan for Your Business</h2>
          <p>Tyres.co.zw offers flexible subscription options designed to help tyre sellers of all sizes grow their business. Select the plan that best suits your needs and start connecting with buyers today.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          <!-- Free Plan -->
          <div class="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
            <h3 class="text-xl font-bold mb-1">Free</h3>
            <p class="text-3xl font-semibold mb-4">$0<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <p class="text-gray-600 mb-6">Basic visibility for new businesses</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Basic business listing</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Single location listing</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Up to 3 product photos</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>No RFQ responses</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>No verified badge</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>Standard search ranking</span>
              </li>
            </ul>
            
            <a href="/auth?type=signup&plan=free" class="block text-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium">
              Get Started
            </a>
          </div>

          <!-- Standard Plan -->
          <div class="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white border-blue-200">
            <h3 class="text-xl font-bold mb-1">Standard</h3>
            <p class="text-3xl font-semibold mb-4">$20<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <p class="text-gray-600 mb-6">Essential features for small businesses</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Enhanced business listing</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Up to 2 location listings</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Respond to 15 RFQs/month</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Up to 10 product photos</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Verified Seller badge</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <span>Standard search ranking</span>
              </li>
            </ul>
            
            <a href="/auth?type=signup&plan=standard" class="block text-center w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
              Select Plan
            </a>
          </div>

          <!-- Premium Plan -->
          <div class="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white border-purple-300 transform scale-105 shadow-lg">
            <div class="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-2 rounded">
              MOST POPULAR
            </div>
            <h3 class="text-xl font-bold mb-1">Premium</h3>
            <p class="text-3xl font-semibold mb-4">$50<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <p class="text-gray-600 mb-6">Complete solution for growing businesses</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Premium business listing</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Up to 5 location listings</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span><strong>Unlimited</strong> RFQ responses</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Up to 20 product photos</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Verified & Premium badges</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Priority search ranking</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Custom subdomain</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Basic analytics dashboard</span>
              </li>
            </ul>
            
            <a href="/auth?type=signup&plan=premium" class="block text-center w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium">
              Select Plan
            </a>
          </div>

          <!-- Premium Plus Plan -->
          <div class="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white border-gray-800">
            <h3 class="text-xl font-bold mb-1">Premium Plus</h3>
            <p class="text-3xl font-semibold mb-4">$100<span class="text-sm text-gray-500 font-normal">/month</span></p>
            <p class="text-gray-600 mb-6">Enterprise-level features for serious sellers</p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span><strong>All Premium features</strong></span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Unlimited location listings</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>White-labeled website</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Advanced analytics dashboard</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Top search ranking</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Unlimited product photos</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Dedicated account manager</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Priority customer support</span>
              </li>
            </ul>
            
            <a href="/auth?type=signup&plan=premium-plus" class="block text-center w-full py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-md font-medium">
              Select Plan
            </a>
          </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-lg border">
          <h3 class="text-xl font-semibold mb-4">Features Comparison</h3>
          
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Free</th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Standard<br />$20/mo</th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Premium<br />$50/mo</th>
                  <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Plus<br />$100/mo</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Listing</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Basic</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Enhanced</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Premium</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Premium</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Location Listings</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">1</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">2</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">5</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RFQ Responses</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">0</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">15/month</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Unlimited</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Product Photos</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">3</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">10</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">20</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Verified Badge</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Search Ranking</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Standard</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Standard</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Priority</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Top</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Custom Subdomain</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analytics Dashboard</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Basic</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">Advanced</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">White-labeled Website</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dedicated Account Manager</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">-</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Ready to Grow Your Tyre Business?</h3>
          <p class="mb-4">Join hundreds of successful tyre sellers who have increased their customer base through Tyres.co.zw.</p>
          <div class="flex flex-wrap gap-4">
            <a href="/register" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Register Now
            </a>
            <a href="/contact" class="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded">
              Contact Sales
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-medium">Can I upgrade or downgrade my plan?</h4>
              <p class="text-gray-600">Yes, you can upgrade or downgrade your subscription at any time through your account settings. Changes to your plan will take effect on your next billing cycle.</p>
            </div>
            
            <div>
              <h4 class="font-medium">Is there a contract or minimum commitment?</h4>
              <p class="text-gray-600">No, all our plans are month-to-month with no long-term contracts. You can cancel at any time without penalties.</p>
            </div>
            
            <div>
              <h4 class="font-medium">What payment methods do you accept?</h4>
              <p class="text-gray-600">We accept credit/debit cards, EcoCash, OneMoney, and direct bank transfers for business accounts.</p>
            </div>
            
            <div>
              <h4 class="font-medium">What happens if I reach my RFQ response limit?</h4>
              <p class="text-gray-600">On the Standard plan, once you reach your monthly limit of 15 RFQ responses, you'll need to wait until your next billing cycle or upgrade to a higher plan to respond to additional requests.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Tyre Seller Subscription Plans | Tyres.co.zw',
    meta_description: 'Explore our flexible subscription plans for tyre sellers. Choose the right option to grow your business and connect with more customers across Zimbabwe.'
  },
  'seller-faq': {
    title: 'Seller Frequently Asked Questions',
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-3">Answers to Common Seller Questions</h2>
          <p>Find answers to the most common questions about selling tyres through Tyres.co.zw. Learn how to maximize your presence on our platform and grow your business.</p>
        </div>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Getting Started</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">How do I claim my listing?</h4>
                <p>After registering, go to "Claim Listing" and find your business by name or location. If we have a pre-populated listing, you can claim it to manage it. If not, create a new listing entry under your account.</p>
                <p class="mt-2">To verify your claim, we may contact you through your registered business phone number or request documents proving ownership. This process usually takes 1-2 business days and ensures that only legitimate business owners can manage listings.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What's the difference between Free and Premium?</h4>
                <p><em>Free</em> sellers can create a basic listing and receive no RFQs (only buyers can browse your products). <em>Premium</em> sellers (Standard and above) get verified badges, extra photos, and can receive/respond to RFQs. Free plans can't reply to buyer requests.</p>
                <p class="mt-2">The Free plan is a great way to establish your initial online presence, while paid plans offer increasing levels of visibility and engagement with potential customers. Most businesses start seeing a return on investment within the first month of subscribing to a paid plan.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Can I edit my listing later?</h4>
                <p>Yes. Any plan: visit "My Listings" and click Edit on your profile to update contact info, photos, business hours, etc. Changes go live immediately.</p>
                <p class="mt-2">We recommend regularly updating your business information, particularly for special promotions, new inventory, or changes in operating hours. Fresh content and recent updates tend to perform better in search results and attract more customer attention.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I set up my seller profile for maximum impact?</h4>
                <p>To optimize your seller profile:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Upload clear, high-quality photos of your business and products</li>
                  <li>Provide comprehensive business information, including hours, services, and specialties</li>
                  <li>List all major tyre brands you carry</li>
                  <li>Highlight any special services like wheel alignment, balancing, or mobile fitting</li>
                  <li>Add customer testimonials if available</li>
                  <li>Respond quickly to RFQs to build a positive response rate</li>
                </ul>
                <p class="mt-2">Complete profiles receive up to 70% more views and engagement than partial profiles.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Managing RFQs and Leads</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">What happens if I miss an RFQ?</h4>
                <p>We'll notify you by email if you don't reply after 24 hours. The RFQ will expire automatically after 48 hours. You can then move on; the buyer may repost or close it.</p>
                <p class="mt-2">To avoid missing opportunities, we recommend installing our mobile app (coming soon) for real-time notifications or setting up email alerts to go directly to your phone. Responding within the first few hours significantly increases your chances of converting the lead.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How does the SLA system work?</h4>
                <p>We encourage sellers to reply promptly. If you accept a RFQ, you have 24 hours to respond or your "Service Level" score may drop. A higher SLA score improves your ranking. (Details in Seller Dashboard.)</p>
                <p class="mt-2">The SLA (Service Level Agreement) system tracks metrics like:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Response time to new RFQs</li>
                  <li>Percentage of RFQs responded to</li>
                  <li>Quality and completeness of responses</li>
                  <li>Buyer feedback and ratings</li>
                </ul>
                <p class="mt-2">Maintaining a high SLA score not only improves your visibility but also builds trust with potential customers.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What information should I include in my quotes?</h4>
                <p>Effective quotes should include:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Clear pricing for each tyre, including any taxes</li>
                  <li>Brand and model information</li>
                  <li>Availability (in stock or order time)</li>
                  <li>Installation costs if applicable</li>
                  <li>Warranty information</li>
                  <li>Any promotional offers or discounts</li>
                  <li>Brief explanation of why your offer provides good value</li>
                </ul>
                <p class="mt-2">Comprehensive quotes that address all the buyer's needs have a 40% higher acceptance rate compared to basic price-only quotes.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I track the performance of my listings?</h4>
                <p>Standard plan subscribers and above can access performance metrics in their dashboard, including:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Profile view counts</li>
                  <li>RFQ response metrics</li>
                  <li>Quote acceptance rates</li>
                  <li>Customer interactions</li>
                </ul>
                <p class="mt-2">Premium and Premium Plus subscribers receive more detailed analytics, including competitor benchmarking and trend analysis to help optimize your pricing and response strategies.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Account Management</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">Can I create multiple branches?</h4>
                <p>Yes. In your account, you can add branch locations under your profile. Each branch can have its own address and contact number. Leads will be routed to the branch closest to the request if enabled.</p>
                <p class="mt-2">Multiple branch management is particularly valuable for businesses with locations across different cities or regions. You can assign specific staff members to manage responses for each location, ensuring timely and localized customer service.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How do I merge duplicate listings?</h4>
                <p>If two listings represent the same business, contact support. We can merge them and transfer reviews or RFQs. Alternatively, claim both under one account and we'll handle it.</p>
                <p class="mt-2">Consolidating duplicate listings improves your overall search ranking and ensures that customer reviews and ratings are unified under a single business profile. This creates a more accurate representation of your business reputation.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What does Premium Plus include?</h4>
                <p>Premium Plus (highest tier) adds a custom website (with your branding and domain) and advanced analytics. It's ideal if you want a full white-label storefront, plus data on lead conversion and popular products.</p>
                <p class="mt-2">The custom website integrates with your Tyres.co.zw listing but provides a standalone online presence that you can promote independently. It includes features like:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Online inventory management</li>
                  <li>Custom domain (e.g., yourshop.com or custom.tyres.co.zw)</li>
                  <li>Contact forms that integrate with your CRM</li>
                  <li>Mobile-optimized design</li>
                  <li>SEO optimization for local searches</li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">How does the affiliate program work?</h4>
                <p>We offer commissions for referring other sellers. Share your referral link; when a new seller subscribes through it, you earn a percentage of their monthly fee for a year. (Details in the Affiliates page.)</p>
                <p class="mt-2">Our tiered affiliate program rewards you based on the subscription level of your referrals:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>10% commission for Standard plan referrals</li>
                  <li>15% commission for Premium plan referrals</li>
                  <li>20% commission for Premium Plus plan referrals</li>
                </ul>
                <p class="mt-2">Commissions are paid monthly and can be applied as credits to your account or withdrawn via mobile money platforms.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4 text-blue-700">Billing and Support</h3>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium">How do I manage my subscription?</h4>
                <p>Go to Account Settings > Subscriptions to upgrade, downgrade, or cancel your plan. Your billing date and payment method (credit card) are shown there.</p>
                <p class="mt-2">Changes to your subscription take effect at the start of your next billing cycle. If you upgrade mid-cycle, you'll be charged the prorated difference for the remainder of the current month. Downgrades or cancellations do not result in partial refunds but take effect at the end of your current paid period.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What payment methods are accepted?</h4>
                <p>We accept the following payment methods:</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Visa and Mastercard credit/debit cards</li>
                  <li>EcoCash and OneMoney mobile payments</li>
                  <li>Direct bank transfers (for annual subscriptions only)</li>
                </ul>
                <p class="mt-2">For businesses preferring to pay quarterly or annually, contact our sales team for custom billing arrangements and potential discounts.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">Can I get a refund if I'm not satisfied?</h4>
                <p>For new subscribers, we offer a 30-day satisfaction guarantee. If you're not generating leads or seeing value from our platform within the first month, contact support to discuss refund options.</p>
                <p class="mt-2">After the initial 30 days, subscriptions are generally non-refundable, but we're committed to ensuring your success. Our account management team will work with you to optimize your profile and improve lead generation if you're not seeing the expected results.</p>
              </div>
              
              <div>
                <h4 class="text-lg font-medium">What if I need help or support?</h4>
                <p>Click Support or email us at <a href="mailto:support@tyres.co.zw" class="text-blue-600 hover:underline">support@tyres.co.zw</a>. We have a dedicated team for technical issues or account questions. FAQs and tutorials are also linked in the dashboard.</p>
                <p class="mt-2">Premium and Premium Plus subscribers receive priority support with faster response times. For urgent matters, paid subscribers can also access our support hotline during business hours.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-5">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">Ready to Start Selling?</h3>
          <p class="mb-4">Join our growing network of tyre sellers and start connecting with buyers today.</p>
          <div class="flex flex-wrap gap-4">
            <a href="/register" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Register Your Business
            </a>
            <a href="/contact" class="inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    `,
    meta_title: 'Seller FAQs | Tyres.co.zw',
    meta_description: 'Find answers to common questions for tyre sellers on Tyres.co.zw. Learn how to manage your listing, respond to RFQs, and grow your business through our platform.'
  }
};
