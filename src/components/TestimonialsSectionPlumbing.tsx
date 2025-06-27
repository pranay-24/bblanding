import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      author: "Michael Nelson",
      statement: "I've had Blue Best out many times for both HVAC and plumbing. Every time, they've been amazing! From phone calls to completing work, they're professional, friendly, clean, and helpful. Most recently, they replaced my water heater. Shawn Powell was very friendly, patient, and knowledgeable while discussing my options and answering my questions.",
      platform: "Google",
      rating: 5
    },
    {
      author: "Heidi Raso",
      statement: "Shawn and Carson were fantastic! So easy to talk to and they explained everything very well and took my old hot water heater away for me!! They’re awesome!! ",
      platform: "Facebook",
      rating: 5
    },
    {
      author: "Joshua Osborne",
      statement: "Alma M. Was our plumber! We had a leak from our upstairs tub faucet, causing water drip downstairs from the ceiling. He came in, diagnosed the issue within minutes, and left to grab the parts needed. He fixed everything! Good bye leak. Would 100% recommend and trust him even if I wasn’t home!! Thank you Alma, we appreciate you. Not all hero’s wear capes!",
      platform: "Google",
      rating: 5
    },
    {
      author: "Jeffery Hansen",
      statement: "Just had Roger Pay, our technician complete sumner service on our new (Heat Pump System). He was courteous and thorough but most important, professional. We had BLUE BEST put in a new heat pump in September and came back in March to install a whole house tank less water heater. You can trust their work and their word!",
      platform: "Google",
      rating: 5
    }
  ];

  return (
    <section className=" " id="testimonials">
      <div className="lg:container mx-auto px-4 py-16">
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
              <p className="text-gray-600 text-base mb-6 italic">"{testimonial.statement}"</p>
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