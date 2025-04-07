'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company?: string;
  avatar?: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "משרד עורכי דין דלתא סייע לנו לנווט את הרגולציה המורכבת בתעשיית המזון. הם היו מקצועיים, זמינים וידעו בדיוק כיצד לטפל בסוגיות המשפטיות שלנו.",
      name: "דניאל כהן",
      position: "מנכ\"ל",
      company: "טעמים בע\"מ",
      avatar: "/avatars/daniel.jpg"
    },
    {
      id: 2,
      quote: "הצוות המשפטי של דלתא עזר לנו להתמודד עם אתגרים רגולטוריים מורכבים. הם הפגינו מקצועיות יוצאת דופן והבנה עמוקה של תעשיית המזון.",
      name: "מיכל לוי",
      position: "סמנכ\"לית תפעול",
      company: "מאפיות השף",
      avatar: "/avatars/michal.jpg"
    },
    {
      id: 3,
      quote: "אני ממליץ בחום על משרד עורכי דין דלתא לכל עסק בתחום המזון. הליווי המשפטי שלהם היה מדויק, מקיף ותרם רבות להצלחת העסק שלנו.",
      name: "יוסי אברהמי",
      position: "בעלים",
      company: "מסעדות הגליל",
      avatar: "/avatars/yossi.jpg"
    },
    {
      id: 4,
      quote: "הידע והניסיון של צוות דלתא בתחום המזון הוא ללא תחרות. הם סייעו לנו לפתור בעיות משפטיות מורכבות בצורה יעילה ומהירה.",
      name: "רונית שמעוני",
      position: "יועצת משפטית",
      company: "טעם הטבע",
      avatar: "/avatars/ronit.jpg"
    },
    {
      id: 5,
      quote: "שירות מקצועי, אדיב ויעיל. משרד עורכי דין דלתא הוכיח את עצמו כשותף אסטרטגי אמיתי לעסק שלנו בתחום המזון.",
      name: "אבי מזרחי",
      position: "מנהל פיתוח עסקי",
      company: "מזון בריא בע\"מ",
      avatar: "/avatars/avi.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  // Handle autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation functions
  const goToPrevious = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(true);
  };

  const goToSlide = (index: number) => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(true);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setIsAutoPlaying(true);
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section 
      className="testimonials-section py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 to-gray-100 rtl"
      dir="rtl"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="testimonials-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            לקוחות ממליצים
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מה אומרים עלינו לקוחותינו מתעשיית המזון שנעזרו בשירותים המשפטיים שלנו
          </p>
        </div>

        <div 
          className="relative glassmorphism-card p-6 md:p-10 rounded-2xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-live="polite"
        >
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary opacity-10"></div>
          
          {/* Testimonial carousel */}
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {testimonials[currentIndex].avatar ? (
                    <div className="neumorphic-avatar flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={testimonials[currentIndex].avatar} 
                        alt={`${testimonials[currentIndex].name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="neumorphic-avatar flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-2xl border-4 border-white shadow-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  )}
                  
                  <div className="flex-1 text-center md:text-right">
                    <div className="mb-4 text-primary flex justify-center md:justify-end">
                      <FaQuoteRight size={30} />
                    </div>
                    <blockquote>
                      <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                        {testimonials[currentIndex].quote}
                      </p>
                      <footer>
                        <div className="font-bold text-xl text-gray-800">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].position}
                          {testimonials[currentIndex].company && (
                            <span>, {testimonials[currentIndex].company}</span>
                          )}
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="neumorphic-button p-3 rounded-full text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
              aria-label="הצג המלצה קודמת"
            >
              <FaChevronRight size={20} />
            </button>
            
            <div className="flex space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`עבור להמלצה ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="neumorphic-button p-3 rounded-full text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
              aria-label="הצג המלצה הבאה"
            >
              <FaChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;