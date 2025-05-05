
export interface DefaultPage {
  title: string;
  slug: string;
  content: string;
  meta_title: string;
  meta_description: string;
}

export const defaultPages: DefaultPage[] = [
  {
    title: "About Us",
    slug: "about",
    content: `
      <h2>Welcome to Tyres.co.zw</h2>
      <p>Tyres.co.zw is Zimbabwe's premier marketplace connecting tyre buyers with trusted sellers across the country.</p>
      <p>Our platform makes finding the right tyres for your vehicle simple, fast and reliable.</p>
      
      <h3>Our Mission</h3>
      <p>Our mission is to transform how Zimbabweans purchase tyres by creating a transparent, convenient marketplace that gives buyers choice and helps sellers grow their businesses.</p>
      
      <h3>Why Choose Us</h3>
      <ul>
        <li>Access to a wide network of verified tyre suppliers</li>
        <li>Quick quote request system</li>
        <li>Competitive pricing through our marketplace model</li>
        <li>Nationwide coverage</li>
        <li>Trusted by thousands of Zimbabwean drivers</li>
      </ul>
    `,
    meta_title: "About Tyres.co.zw | Zimbabwe's Tyre Marketplace",
    meta_description: "Learn about Tyres.co.zw, Zimbabwe's leading online marketplace connecting tyre buyers with verified suppliers across the country."
  },
  {
    title: "Frequently Asked Questions",
    slug: "faq",
    content: `
      <h2>Frequently Asked Questions</h2>
      
      <div class="mb-6">
        <h3>How does Tyres.co.zw work?</h3>
        <p>Our platform connects you with tyre suppliers across Zimbabwe. Submit your requirements through our RFQ (Request For Quotation) system, and receive competitive quotes from multiple suppliers.</p>
      </div>
      
      <div class="mb-6">
        <h3>Is this service free to use?</h3>
        <p>Yes! The service is completely free for buyers. We make our money by charging a small commission to the sellers when a sale is completed.</p>
      </div>
      
      <div class="mb-6">
        <h3>How do I know the suppliers are trustworthy?</h3>
        <p>All suppliers on our platform go through a verification process before being listed. We also collect and display reviews from previous customers.</p>
      </div>
      
      <div class="mb-6">
        <h3>What information do I need to provide for a quote?</h3>
        <p>For the most accurate quotes, provide your tyre size, quantity needed, vehicle type, and location. The more specific you are, the better the quotes you'll receive.</p>
      </div>
      
      <div class="mb-6">
        <h3>How long does it take to receive quotes?</h3>
        <p>Most suppliers respond within 24 hours. Popular tyre sizes and locations may receive quotes even faster.</p>
      </div>
    `,
    meta_title: "Frequently Asked Questions | Tyres.co.zw",
    meta_description: "Find answers to common questions about using Tyres.co.zw, Zimbabwe's premier online tyre marketplace connecting buyers with suppliers."
  },
  {
    title: "How It Works",
    slug: "how-it-works",
    content: `
      <h2>How Tyres.co.zw Works</h2>
      
      <div class="mb-8">
        <h3>For Buyers</h3>
        <ol>
          <li><strong>Submit Your Request</strong> - Fill out our simple RFQ form with your tyre requirements and location.</li>
          <li><strong>Receive Multiple Quotes</strong> - Verified suppliers in your area will send you competitive quotes.</li>
          <li><strong>Compare Options</strong> - Review prices, availability, and supplier ratings.</li>
          <li><strong>Make Your Choice</strong> - Select the best option and connect directly with the supplier.</li>
          <li><strong>Complete Your Purchase</strong> - Finalize payment and delivery/installation details with your chosen supplier.</li>
        </ol>
      </div>
      
      <div class="mb-8">
        <h3>For Sellers</h3>
        <ol>
          <li><strong>Register Your Business</strong> - Create a seller account and complete our verification process.</li>
          <li><strong>Set Up Your Profile</strong> - Add your business details, location, and the tyre brands you carry.</li>
          <li><strong>Respond to RFQs</strong> - Get notified of relevant buyer requests and submit your competitive quotes.</li>
          <li><strong>Connect with Buyers</strong> - Communicate directly with interested buyers to close the sale.</li>
          <li><strong>Grow Your Business</strong> - Build your reputation through positive reviews and increase your sales.</li>
        </ol>
      </div>
    `,
    meta_title: "How It Works | Tyres.co.zw",
    meta_description: "Learn how to use Tyres.co.zw to find the best tyre deals in Zimbabwe or to sell your tyres to our growing customer base."
  },
  {
    title: "Contact Us",
    slug: "contact",
    content: `
      <h2>Contact Tyres.co.zw</h2>
      
      <div class="mb-6">
        <h3>Get in Touch</h3>
        <p>We'd love to hear from you! Whether you have a question about our service, need help with your account, or want to partner with us, our team is ready to assist.</p>
      </div>
      
      <div class="mb-6">
        <h3>Customer Support</h3>
        <p><strong>Email:</strong> support@tyres.co.zw</p>
        <p><strong>Phone:</strong> +263 77 123 4567</p>
        <p><strong>Hours:</strong> Monday to Friday, 8am to 5pm</p>
      </div>
      
      <div class="mb-6">
        <h3>Business Inquiries</h3>
        <p><strong>Email:</strong> partners@tyres.co.zw</p>
        <p><strong>Phone:</strong> +263 77 765 4321</p>
      </div>
      
      <div class="mb-6">
        <h3>Head Office</h3>
        <p>123 Main Street</p>
        <p>Harare, Zimbabwe</p>
      </div>
      
      <div class="mb-6">
        <h3>Social Media</h3>
        <p>Follow us for updates, special promotions, and tyre care tips:</p>
        <ul>
          <li>Facebook: @tyrescozw</li>
          <li>Twitter: @tyrescozw</li>
          <li>Instagram: @tyres.co.zw</li>
        </ul>
      </div>
    `,
    meta_title: "Contact Us | Tyres.co.zw",
    meta_description: "Get in touch with the Tyres.co.zw team for support, partnership opportunities, or general inquiries about our tyre marketplace."
  },
  {
    title: "Subscription Plans",
    slug: "plans",
    content: `
      <h2>Subscription Plans for Sellers</h2>
      
      <div class="mb-8">
        <h3>Free Plan</h3>
        <p class="text-lg font-bold">$0 per month</p>
        <ul>
          <li>Basic business listing</li>
          <li>Respond to up to 5 RFQs per month</li>
          <li>Customer messaging</li>
          <li>Business profile page</li>
        </ul>
        <p class="mt-2">Perfect for small businesses just getting started on our platform.</p>
      </div>
      
      <div class="mb-8">
        <h3>Standard Plan</h3>
        <p class="text-lg font-bold">$19 per month</p>
        <ul>
          <li>Enhanced business listing</li>
          <li>Respond to unlimited RFQs</li>
          <li>Customer messaging</li>
          <li>Featured in search results</li>
          <li>Custom business profile page</li>
          <li>Monthly performance reports</li>
        </ul>
        <p class="mt-2">Our most popular plan for growing tyre businesses.</p>
      </div>
      
      <div class="mb-8">
        <h3>Premium Plan</h3>
        <p class="text-lg font-bold">$49 per month</p>
        <ul>
          <li>Priority business listing</li>
          <li>Respond to unlimited RFQs</li>
          <li>Customer messaging</li>
          <li>Featured in search results</li>
          <li>Custom business profile page</li>
          <li>Monthly performance reports</li>
          <li>Marketing support</li>
          <li>Priority customer support</li>
          <li>Early access to new features</li>
        </ul>
        <p class="mt-2">The ultimate plan for serious tyre sellers looking to maximize their online presence.</p>
      </div>
    `,
    meta_title: "Subscription Plans | Tyres.co.zw",
    meta_description: "Explore our range of subscription plans for tyre sellers on Tyres.co.zw and choose the right option for your business."
  },
  {
    title: "Privacy Policy",
    slug: "privacy",
    content: `
      <h2>Privacy Policy</h2>
      <p class="text-sm text-gray-600">Last updated: May 1, 2025</p>
      
      <div class="mb-6 mt-4">
        <p>Tyres.co.zw ("we", "us", or "our") is committed to protecting the privacy of our users ("user", "you", or "your"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website tyres.co.zw and use our services.</p>
      </div>
      
      <div class="mb-6">
        <h3>Information We Collect</h3>
        <p>We may collect information about you in various ways, including:</p>
        <ul>
          <li>Personal Data: Name, email address, phone number, location, and other information you voluntarily provide.</li>
          <li>Usage Data: Information on how you access and use our website.</li>
          <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies.</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Use of Your Information</h3>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and manage your account</li>
          <li>Connect buyers with sellers</li>
          <li>Send you marketing communications</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Monitor and analyze usage patterns and trends</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Disclosure of Your Information</h3>
        <p>We may share your information with:</p>
        <ul>
          <li>Tyre sellers when you submit an RFQ</li>
          <li>Service providers who perform services on our behalf</li>
          <li>Business partners with your consent</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Your Data Protection Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate personal data</li>
          <li>Delete your personal data</li>
          <li>Object to the processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@tyres.co.zw</p>
      </div>
    `,
    meta_title: "Privacy Policy | Tyres.co.zw",
    meta_description: "Read about how Tyres.co.zw collects, uses, and protects your personal information when you use our tyre marketplace."
  },
  {
    title: "Terms and Conditions",
    slug: "terms",
    content: `
      <h2>Terms and Conditions</h2>
      <p class="text-sm text-gray-600">Last updated: May 1, 2025</p>
      
      <div class="mb-6 mt-4">
        <p>These Terms and Conditions ("Terms") govern your use of Tyres.co.zw (the "Platform") and the services offered through the Platform. By accessing or using the Platform, you agree to be bound by these Terms.</p>
      </div>
      
      <div class="mb-6">
        <h3>Definitions</h3>
        <ul>
          <li>"We," "us," and "our" refer to Tyres.co.zw</li>
          <li>"You" and "your" refer to the user of the Platform</li>
          <li>"Buyer" refers to users seeking to purchase tyres</li>
          <li>"Seller" refers to tyre suppliers registered on the Platform</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Platform Description</h3>
        <p>Tyres.co.zw is an online marketplace that connects buyers with tyre sellers in Zimbabwe. We do not sell tyres directly but facilitate the connection between buyers and sellers.</p>
      </div>
      
      <div class="mb-6">
        <h3>User Accounts</h3>
        <p>To access certain features of the Platform, you may need to create an account. You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your account information</li>
          <li>Restricting access to your account</li>
          <li>All activities that occur under your account</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Buyer Terms</h3>
        <ul>
          <li>You may submit requests for quotations (RFQs) for tyres</li>
          <li>We will forward your RFQ to relevant sellers</li>
          <li>All transactions and agreements are between you and the seller</li>
          <li>We are not responsible for any aspect of the transaction between you and the seller</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Seller Terms</h3>
        <ul>
          <li>You must provide accurate information about your business and products</li>
          <li>You are responsible for responding to RFQs in a timely manner</li>
          <li>You must honor the quotes you provide to buyers</li>
          <li>You agree to pay applicable platform fees for sales generated through the Platform</li>
        </ul>
      </div>
      
      <div class="mb-6">
        <h3>Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Platform.</p>
      </div>
      
      <div class="mb-6">
        <h3>Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us at legal@tyres.co.zw</p>
      </div>
    `,
    meta_title: "Terms and Conditions | Tyres.co.zw",
    meta_description: "Read the terms and conditions governing your use of Tyres.co.zw, Zimbabwe's premier online tyre marketplace."
  },
  {
    title: "Seller FAQ",
    slug: "seller-faq",
    content: `
      <h2>Frequently Asked Questions for Sellers</h2>
      
      <div class="mb-6">
        <h3>How do I register as a seller?</h3>
        <p>To register as a seller, click on the "Register" button and select "Seller Account" during the registration process. You'll need to provide your business details and complete our verification process.</p>
      </div>
      
      <div class="mb-6">
        <h3>What does it cost to sell on Tyres.co.zw?</h3>
        <p>We offer different subscription plans starting with a free tier. The free plan allows you to respond to up to 5 RFQs per month. For unlimited RFQs and additional features, check our paid plans on the <a href="/plans">Subscription Plans</a> page.</p>
      </div>
      
      <div class="mb-6">
        <h3>How do I receive buyer requests?</h3>
        <p>When a buyer submits an RFQ that matches your location and inventory, you'll receive a notification via email and on your dashboard. You can then respond with your quote.</p>
      </div>
      
      <div class="mb-6">
        <h3>How quickly should I respond to RFQs?</h3>
        <p>We recommend responding within 24 hours. Quick responses increase your chances of winning the business and improve your seller rating on our platform.</p>
      </div>
      
      <div class="mb-6">
        <h3>How do I get paid?</h3>
        <p>All payments are handled directly between you and the buyer. We do not process payments on the platform. You can specify your accepted payment methods in your seller profile.</p>
      </div>
      
      <div class="mb-6">
        <h3>Can I update my inventory on the platform?</h3>
        <p>Yes, you can manage your inventory through your seller dashboard. Keeping your inventory up to date helps ensure you only receive relevant RFQs.</p>
      </div>
    `,
    meta_title: "Seller FAQ | Tyres.co.zw",
    meta_description: "Find answers to common questions for tyre sellers on the Tyres.co.zw marketplace, including registration, subscription plans, and more."
  }
];
