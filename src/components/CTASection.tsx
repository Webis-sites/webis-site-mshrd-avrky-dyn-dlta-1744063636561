'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = 'ייעוץ משפטי מקצועי לתעשיית המזון',
  description = 'משרד עורכי דין דלתא מתמחה בליווי עסקים בתעשיית המזון בכל ההיבטים המשפטיים, מרגולציה ועד חוזים, בליווי אישי ומקצועי',
  buttonText = 'קבע תור עכשיו',
  backgroundImage = '/images/law-office-bg.jpg'
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      await controls.start('visible');
    };
    
    animateSequence();
    
    // Set up intersection observer for re-triggering animation when scrolling back into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSequence();
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(69, 183, 209, 0.4)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: '0 5px 15px rgba(69, 183, 209, 0.4)',
      transition: {
        duration: 0.15,
        ease: 'easeInOut'
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut'
    }
  };

  return (
    <section 
      id="cta-section"
      dir="rtl" 
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-labelledby="cta-heading"
    >
      {/* Background with glassmorphism effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" aria-hidden="true" />
      </div>
      
      {/* Neumorphic container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 shadow-neumorphic"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-right"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 text-right leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-end items-center gap-6"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-medium py-3 px-8 rounded-lg shadow-lg w-full sm:w-auto text-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={pulseAnimation}
              aria-label={buttonText}
            >
              <FaCalendarAlt className="text-white" aria-hidden="true" />
              <span>{buttonText}</span>
              <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </motion.a>
            
            <motion.p
              className="text-sm text-gray-600 text-center sm:text-right"
              variants={itemVariants}
            >
              ללא התחייבות, מענה תוך 24 שעות
            </motion.p>
          </motion.div>
          
          {/* Decorative elements with glassmorphism */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 backdrop-blur-sm border border-white/20 -z-10" aria-hidden="true" />
          <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-secondary/10 backdrop-blur-sm border border-white/20 -z-10" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;