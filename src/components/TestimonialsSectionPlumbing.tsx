import React from 'react';
import { Star } from 'lucide-react';
import GoogleReviewsWidget from './GoogleReviewsWidget';
const TestimonialsSection: React.FC = () => {

  
  interface Review {
  id: number;
  userName: string;
  timeAgo: string;
  rating: number;
  text: string;
  fullText?: string;
  avatarColor: 'blue' | 'green' | 'red' | 'yellow';
  initial: string;
}

  const testimonials: Review[] = [
    {
      id: 1,
      userName: "Michael Nelson",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "I've had Blue Best out many times for both HVAC and plumbing. Every time, they've been amazing! From phone calls to completing work, they're professional, friendly, clean, and helpful. Most recently, they replaced my water heater.",
      fullText: "I've had Blue Best out many times for both HVAC and plumbing. Every time, they've been amazing! From phone calls to completing work, they're professional, friendly, clean, and helpful. Most recently, they replaced my water heater. Shawn Powell was very friendly, patient, and knowledgeable while discussing my options and answering my questions.",
      avatarColor: 'blue',
      initial: 'M'
    },
    {
      id: 2,
      userName: "Heidi Raso",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Shawn and Carson were fantastic! So easy to talk to and they explained everything very well and took my old hot water heater away for me!! They’re awesome!! ",
      fullText: "Shawn and Carson were fantastic! So easy to talk to and they explained everything very well and took my old hot water heater away for me!! They’re awesome!! ",
      avatarColor: 'green',
      initial: 'H'
    },
    {
      id: 3,
      userName: "Joshua Osborne",
      timeAgo: "3 weeks ago",
      rating: 5,
      text: "Alma M. Was our plumber! We had a leak from our upstairs tub faucet, causing water drip downstairs from the ceiling. He came in, diagnosed the issue within minutes, and left to grab the parts needed.",
      fullText: "Alma M. Was our plumber! We had a leak from our upstairs tub faucet, causing water drip downstairs from the ceiling. He came in, diagnosed the issue within minutes, and left to grab the parts needed. He fixed everything! Good bye leak. Would 100% recommend and trust him even if I wasn’t home!! Thank you Alma, we appreciate you. Not all hero’s wear capes!",
      avatarColor: 'red',
      initial: 'J'
    },
    {
      id: 4,
      userName: "Jeffery Hansen",
      timeAgo: "1 week ago",
      rating: 5,
      text: "Just had Roger Pay, our technician complete sumner service on our new (Heat Pump System). He was courteous and thorough but most important, professional.",
      fullText: "Just had Roger Pay, our technician complete sumner service on our new (Heat Pump System). He was courteous and thorough but most important, professional. We had BLUE BEST put in a new heat pump in September and came back in March to install a whole house tank less water heater. You can trust their work and their word!",
      avatarColor: 'yellow',
      initial: 'J'
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div> */}
        <GoogleReviewsWidget testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;