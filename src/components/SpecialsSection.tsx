import React from 'react';
import { DollarSign, Tag, Clock } from 'lucide-react';

const SpecialsSection: React.FC = () => {
  const specials = [
    {
      icon: <DollarSign className="w-10 h-10 text-orange-primary" />,
      title: 'New Customer Discount',
      description: 'First-time customers receive 10% off their first service call.',
    },
    {
      icon: <Tag className="w-10 h-10 text-orange-primary" />,
      title: 'Seasonal Maintenance',
      description: 'Schedule your seasonal HVAC maintenance and save $25.',
    },
    {
      icon: <Clock className="w-10 h-10 text-orange-primary" />,
      title: 'Emergency Service',
      description: '24/7 emergency service available with no after-hours fees.',
    },
  ];

  return (
    <section id="specials" className="py-16 bg-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">Special Offers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and save on our quality services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-orange-primary"
            >
              <div className="mb-4">{special.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-primary">{special.title}</h3>
              <p className="text-gray-600">{special.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#"
            className="px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg shadow hover:bg-orange-dark transition duration-300 inline-block cta-button"
          >
            View Financing Options
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;