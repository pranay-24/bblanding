import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      author: "Sarah Johnson",
      statement: "BlueBest provided exceptional service! Their team was professional, punctual, and solved our AC issues quickly. Highly recommend!",
      platform: "Google",
      rating: 5
    },
    {
      author: "Mike Anderson",
      statement: "Outstanding plumbing service! Fixed our water heater issue same-day and at a fair price. The technician was knowledgeable and courteous.",
      platform: "Facebook",
      rating: 5
    },
    {
      author: "Emily Martinez",
      statement: "Best HVAC company in Bountiful! They installed our new heating system efficiently and the difference in our home comfort is amazing.",
      platform: "Google",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-primary fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.statement}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-blue-primary">
                  {testimonial.author}
                </span>
                <span className="text-sm text-gray-500">
                  via {testimonial.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;