import React from 'react';
import { Card } from './Card';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Bixen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="h-full">
            <Card title="Innovative Technology" description="Bixen uses the latest technology to ensure efficiency and effectiveness." />
          </div>
          <div className="h-full">
            <Card title="Expert Team" description="Our team of experts is dedicated to providing top-notch support and solutions." />
          </div>
          <div className="h-full">
            <Card title="Customer Satisfaction" description="We prioritize customer satisfaction and strive to exceed expectations." />
          </div>
          <div className="h-full">
            <Card title="Affordable Pricing" description="Bixen offers competitive pricing without compromising on quality." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
