import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      author: "Jeffery Hansen",
      statement: "Just had Roger Pay, our technician completed summer service on our new (Heat Pump System). He was courteous and thorough but most importantly, professional. You can trust BLUE BEST !!!",
      platform: "Google",
      rating: 5
    },
    {
      author: "Marian Young",
      statement: "We used Blue Best for many projects in our home (faucet replacement, HVAC, installing manifold, replace steam system etc). Shawn was knowledgeable and explained everything. We would definitely recommend Blue Best. ",
      platform: "Facebook",
      rating: 5
    },
    {
      author: "Aaron",
      statement: "I have been using these people for 3 years. Customer service is outstanding and they were able to give me advice on my issue until they came out in a few weeks. Would recommend, but make sure to reach out before the weather heats up because most of Bountiful uses them and they get busy. 10/10",
      platform: "Google",
      rating: 5
    },
    {
      author: "Elizabeth M",
      statement: "Our experience with Blue Best has been fantastic. Shawn, Carlson and Khaing have done amazing job with fixing our shower and pressure valve, patching the drywall and installing both a water softener and a shower steamer. We highly recommend them!!!",
      platform: "Google",
      rating: 5
    }
  ];

  return (
    <section className="py-16 ">
      <div className="lg:container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
            What Homeowners Are Saying
          </h2>
          {/* <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-light p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-blue-primary">
                  {testimonial.author}
                </span>
                <span className="text-sm text-gray-500 ">
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