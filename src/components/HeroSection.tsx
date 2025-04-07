'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaArrowLeft, FaPhone, FaBalanceScale } from 'react-icons/fa';

interface HeroSectionProps {
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    }
  };

  return (
    <section 
      className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rtl"
      dir="rtl"
      aria-label="אזור ראשי"
    >
      {/* Glassmorphism background elements */}
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-between gap-12 lg:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Text Content */}
          <motion.div 
            className="w-full text-center lg:text-right lg:w-1/2"
            variants={itemVariants}
          >
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 shadow-neumorphic">
              <FaBalanceScale className="ml-2 text-primary" />
              <span className="text-sm font-medium text-gray-700">מומחים בייעוץ משפטי לתעשיית המזון</span>
            </div>
            
            <motion.h1 
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              משרד עורכי דין <span className="text-primary">מוביל</span> בישראל
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-xl text-gray-600"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור, עם צוות מקצועי ומסור שמלווה אותך בכל צעד בדרך
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:space-x-reverse"
              variants={itemVariants}
            >
              <button 
                onClick={handleCtaClick}
                className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white shadow-neumorphic transition-all duration-300 hover:bg-primary-dark hover:shadow-neumorphic-pressed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
                <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              
              <a 
                href="tel:+972000000000" 
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-medium text-gray-700 shadow-neumorphic transition-all duration-300 hover:bg-gray-50 hover:shadow-neumorphic-pressed focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="התקשר עכשיו"
              >
                <FaPhone className="text-primary" />
                התקשר עכשיו
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                {[1, 2, 3, 4].map((id) => (
                  <img
                    key={id}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                    src={`https://randomuser.me/api/portraits/men/${id + 30}.jpg`}
                    alt="תמונת לקוח מרוצה"
                  />
                ))}
              </div>
              <div className="mr-4">
                <div className="text-sm font-medium text-gray-900">למעלה מ-500 לקוחות מרוצים</div>
                <div className="flex text-sm text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-full w-full rounded-2xl bg-secondary opacity-10"></div>
              <div className="glassmorphism relative overflow-hidden rounded-2xl bg-white/40 shadow-lg backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="משרד עורכי דין דלתא"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">משרד עורכי דין דלתא</h3>
                  <p className="text-sm opacity-90">מומחים בייעוץ משפטי לתעשיית המזון</p>
                </div>
              </div>
              
              {/* Floating Card */}
              <motion.div 
                className="glassmorphism absolute -bottom-6 -left-6 rounded-lg bg-white/80 p-4 shadow-lg backdrop-blur-md md:max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <FaBalanceScale size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ייעוץ משפטי מקצועי</h4>
                    <p className="text-sm text-gray-600">פגישת ייעוץ ראשונה ללא עלות</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;