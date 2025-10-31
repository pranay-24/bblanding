import React from 'react';
import { Star } from 'lucide-react';
import GoogleReviewsWidget from '../GoogleReviewsWidget';

const TestimonialsSectionFurnace: React.FC = () => {

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
      userName: "Jack Peterson",
      timeAgo: "1 week ago",
      rating: 5,
      text: "BlueBest saved us during the coldest week of winter! Our furnace died suddenly and they came out the same day. The technician was knowledgeable, explained all our options, and had us warm again by evening.",
      fullText: "BlueBest saved us during the coldest week of winter! Our furnace died suddenly and they came out the same day. The technician was knowledgeable, explained all our options, and had us warm again by evening. The new furnace is whisper quiet and our heating bills are already lower. Highly recommend!",
      avatarColor: 'blue',
      initial: 'J'
    },
    {
      id: 2,
      userName: "Jill Mulroy",
      timeAgo: "2 week ago",
      rating: 5,
      text: "Professional from start to finish! They diagnosed our furnace issue quickly and gave us honest advice about repair vs. replacement. No pressure tactics, just great service.",
      fullText: "Professional from start to finish! They diagnosed our furnace issue quickly and gave us honest advice about repair vs. replacement. No pressure tactics, just great service. The installation team was clean, efficient, and respectful of our home. Best HVAC experience we've had!",
      avatarColor: 'green',
      initial: 'J'
    },
    {
      id: 3,
      userName: "Chad Hall",
      timeAgo: "2 weeks ago",
      rating: 5,
      text: "Our 20-year-old furnace finally gave out and BlueBest made the replacement process seamless. They helped us choose the right size unit for our home and explained all the rebate options.",
      fullText: "Our 20-year-old furnace finally gave out and BlueBest made the replacement process seamless. They helped us choose the right size unit for our home and explained all the rebate options. The installation was completed in one day and they cleaned up everything. Our home has never been more comfortable!",
      avatarColor: 'red',
      initial: 'C'
    },
    {
      id: 4,
      userName: "Cindy Stewart",
      timeAgo: "1 month ago",
      rating: 5,
      text: "Emergency furnace repair at 10 PM on a Saturday - BlueBest came through! The tech arrived within an hour and had our heat restored quickly. Fair pricing and excellent service.",
      fullText: "Emergency furnace repair at 10 PM on a Saturday - BlueBest came through! The tech arrived within an hour and had our heat restored quickly. Fair pricing and excellent service. It's such a relief to have a reliable HVAC company we can count on. They've earned a customer for life!",
      avatarColor: 'yellow',
      initial: 'C'
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
            Real reviews from real customers who trust BlueBest for their heating needs
          </p> */}
        </div>

        <GoogleReviewsWidget testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSectionFurnace;