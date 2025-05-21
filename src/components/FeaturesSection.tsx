import React from 'react';
import { Shield, Clock, Award, PenTool as Tool, Users, Sparkles } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-primary" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed professionals you can trust'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-primary" />,
      title: '24/7 Service',
      description: 'Emergency services available anytime'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-primary" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in service'
    },
    {
      icon: <Tool className="w-8 h-8 text-orange-primary" />,
      title: 'Expert Repairs',
      description: 'Professional diagnosis and repairs'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-primary" />,
      title: 'Family Owned',
      description: 'Serving our community since 2003'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-orange-primary" />,
      title: 'Quality Parts',
      description: 'Only genuine replacement parts'
    }
  ];

  return (
    <section className="py-16 bg-blue-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-blue-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:text-left">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-orange-primary text-white font-semibold 
                  rounded-lg shadow hover:bg-orange-dark transition duration-300 mb-4"
              >
                Get Started Today
              </a>
              <p className="text-blue-primary font-medium">
                100% Satisfaction Guaranteed
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg"
              alt="Professional Service Team"
              className="rounded-lg shadow-lg w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;