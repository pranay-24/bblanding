import React from 'react';
import { Flame, Thermometer, Droplets } from 'lucide-react';
import {  Phone } from 'lucide-react';

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
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const target = document.getElementById('hero_Section-bblanding');
      
      // Add this null check to satisfy TypeScript
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <section id="services" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">Our Other Services</h2>
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

        <div className="flex flex-col md:flex-row gap-2 justify-center text-center mt-12">
            <a
               onClick={handleClick}
              className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed shadow-[0_0.2em_0_#003572] transition duration-300"
            >
              Schedule Service
            </a>
            <a
                href="tel:+13852741575"
                className="flex items-center justify-center px-11 py-3.5 text-lg bg-[#003572] text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed "
              >
                <Phone size={18} className="mr-2" />
                (385) 274-1575
              </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;