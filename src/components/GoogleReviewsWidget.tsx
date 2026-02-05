'use client';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Check } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

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
interface GoogleReviewsWidgetProps {
  testimonials: Review[];
}


const GoogleReviewsWidget = ({ testimonials }: GoogleReviewsWidgetProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();
  
 


  const visibleCards = isMobile ? 1 : 3;
  const maxIndex = testimonials.length - visibleCards;

  const updateCarousel = useCallback(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    updateCarousel();
  }, [updateCarousel]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleReviewExpansion = (reviewId: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const getAvatarColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-google-blue';
      case 'green': return 'bg-google-green';
      case 'red': return 'bg-google-red';
      case 'yellow': return 'bg-google-yellow';
      default: return 'bg-google-blue';
    }
  };

  const progress = ((currentIndex + visibleCards) / testimonials.length) * 100;

  // Touch handlers for mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrevious();
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-transparent font-sans">
      {/* Header Section */}
      <div className="mb-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-200">
             <a href="https://www.google.com/search?q=blue+best+heating+and+air&oq=Blue+best+&aqs=chrome.1.69i57j69i59j0i512l3j69i60j69i61l2.8166j0j7&sourceid=chrome&ie=UTF-8#lrd=" target="_blank" className="no-underline">
          <div className="flex items-center space-x-4">
            {/* Google Logo */}
            <div className="flex items-center">
             <img 
             src="/google-logo.svg"
             alt="Column 1 Image 1"
             className="w-24 h-16 object-contain"
           />
            </div>
            
            {/* Rating Info */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-600">5.0</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--google-yellow)] text-[var(--google-yellow)]" />
                ))}
              </div>
              <span className="text-sm text-gray-600">( 2,000+ reviews)</span>
            </div>
          </div>
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <a href="https://www.google.com/search?q=blue+best+heating+and+air&oq=Blue+best+&aqs=chrome.1.69i57j69i59j0i512l3j69i60j69i61l2.8166j0j7&sourceid=chrome&ie=UTF-8#lrd=" target="_blank" className="no-underline">
          <div className="flex items-center justify-between">
            {/* Google Logo */}
            <div className="flex items-center">
              <img 
             src="/google-logo.svg"
             alt="Column 1 Image 1"
             className="w-24 h-16 object-contain"
           />
            </div>
            
            {/* Rating Column */}
            <div className="flex flex-col items-end">
              <div className="flex items-center space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--google-yellow)] text-[var(--google-yellow)]" />
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-600 mb-0">5.0</span>
                <span className="text-sm text-gray-600">( 2,000+ reviews)</span>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full">
                  {/* User Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* User Avatar with Google Icon Overlay */}
                      <div className="relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${getAvatarColorClass(review.avatarColor)}`}>
                          {review.initial}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-200">
                           <img 
             src="/google-g-logo.svg"
             alt="Column 1 Image 1"
             className="w-24 h-16 object-contain"
           />
                        </div>
                      </div>
                      
                      {/* User Info */}
                      <div>
                        <h4 className="font-medium text-lg text-gray-600 mb-0">{review.userName}</h4>
                        <p className="text-sm text-gray-600 mb-0">{review.timeAgo}</p>
                      </div>
                    </div>
                    
                    {/* Verification Badge */}
                    <div className="w-5 h-5  flex items-center justify-center">
                     <img 
             src="/verified.svg"
             alt="Column 1 Image 1"
             className="w-10 h-10 object-contain"
           />
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[var(--google-yellow)] text-[var(--google-yellow)]" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {expandedReviews.has(review.id) ? review.fullText : review.text}
                    </p>
                    {review.fullText && review.fullText.length > review.text.length && (
                      <button 
                        className="text-[var(--google-blue)] text-sm font-medium hover:underline mt-2"
                        onClick={() => toggleReviewExpansion(review.id)}
                      >
                        {expandedReviews.has(review.id) ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-google-gray" />
        </button>
        
        <button 
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 disabled:opacity-50 disabled:cursor-not-allowed rounded-full p-3 shadow-lg border border-gray-200 transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-google-gray" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center mt-6">
        <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-google-blue rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <a
          href="https://www.google.com/search?q=blue+best+heating+and+air&oq=Blue+best+&aqs=chrome.1.69i57j69i59j0i512l3j69i60j69i61l2.8166j0j7&sourceid=chrome&ie=UTF-8#lrd="
          target="_blank"
          className="px-11 py-3.5 text-lg bg-gradient-to-b from-orange-600 to-orange-500 text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed hover:cursor-pointer shadow-[0_0.2em_0_#003572] transition duration-300"
        >
          SEE ALL REVIEWS
        </a>
        <a
          href="#hero_Section-bblanding"
          className="px-11 py-3.5 text-lg bg-blue-primary-dark text-white text-center ease-out whitespace-pre-wrap rounded-full uppercase font-semibold font-['Kanit'] leading-relaxed hover:cursor-pointer shadow-[0_0.2em_0_#f97316] transition duration-300"
        >
          GET YOUR FREE ESTIMATE
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsWidget;