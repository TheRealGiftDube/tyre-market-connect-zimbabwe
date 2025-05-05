
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import SellerHighlights from '@/components/home/SellerHighlights';
import TestimonialSection from '@/components/home/TestimonialSection';
import CallToAction from '@/components/home/CallToAction';
import PartnerBrands from '@/components/home/PartnerBrands';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <SellerHighlights />
        <TestimonialSection />
        <CallToAction />
        <PartnerBrands />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
