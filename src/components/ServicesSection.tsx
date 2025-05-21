import React from 'react';
import { Flame, Thermometer, Droplets } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Flame className="w-12 h-12 text-orange-primary" />,
      title: 'Heating',
      description: 'Professional heating installation, repair and maintenance services for your home or business.',
      link: '#heating'
    },
    {
      icon: <Thermometer className="w-12 h-12 text-blue-primary" />,
      title: 'Air Conditioning',
      description: 'Keep your space cool and comfortable with our expert air conditioning services.',
      link: '#air'
    },
    {
      icon: <Droplets className="w-12 h-12 text-blue-primary" />,
      title: 'Plumbing',
      description: 'From emergency repairs to new installations, we handle all your plumbing needs.',
      link: '#plumbing'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BlueBest provides quality plumbing, heating, and air conditioning services to homes and businesses in Bountiful, UT and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-blue-light rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-primary">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.link}
                className="inline-block text-orange-primary font-medium hover:text-orange-dark transition duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:+13852741575"
            className="px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg shadow hover:bg-orange-dark transition duration-300 inline-block cta-button"
          >
            Call For Service: (385) 274-1575
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;