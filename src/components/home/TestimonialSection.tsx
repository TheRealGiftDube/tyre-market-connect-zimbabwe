
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    quote: "Tyres.co.zw saved me so much time. I submitted one RFQ and received quotes from multiple sellers, helping me find the best deal on premium tyres.",
    author: "Michael C.",
    role: "Fleet Manager",
    company: "Logistics Co.",
    image: "https://placehold.co/100x100?text=MC"
  },
  {
    id: 2,
    quote: "As a tyre shop owner, this platform has connected me with customers I wouldn't have reached otherwise. The RFQ system is efficient and brings us serious buyers.",
    author: "Sarah M.",
    role: "Business Owner",
    company: "Harare Tyre Centre",
    image: "https://placehold.co/100x100?text=SM"
  },
  {
    id: 3,
    quote: "I needed specialty tyres for my SUV and was struggling to find them. Through Tyres.co.zw, I found a supplier in Bulawayo who had exactly what I needed.",
    author: "David R.",
    role: "Vehicle Enthusiast",
    company: "",
    image: "https://placehold.co/100x100?text=DR"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What People Say About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what buyers and sellers are saying about their experience with Tyres.co.zw.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                    />
                    <svg className="absolute -bottom-2 -right-2 h-8 w-8 text-brand-blue fill-current" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16zm-3 0c0-7.18-5.82-13-13-13S3 8.82 3 16s5.82 13 13 13 13-5.82 13-13z"/>
                      <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
