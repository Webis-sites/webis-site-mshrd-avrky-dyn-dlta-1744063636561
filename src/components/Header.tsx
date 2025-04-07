'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlinePhone, HiOutlineMail, HiMenu, HiX } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const navItems: NavItem[] = [
    { name: 'דף הבית', href: '/' },
    { name: 'תחומי התמחות', href: '/expertise' },
    { name: 'שירותים משפטיים', href: '/services' },
    { name: 'צוות המשרד', href: '/team' },
    { name: 'מאמרים', href: '/articles' },
    { name: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, isMobile]);

  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-neumorphic' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-neumorphic-sm">
                <span className="text-white font-bold text-xl">ד</span>
              </div>
              <div className="mr-3">
                <h1 className="text-xl font-bold text-gray-800">משרד עורכי דין דלתא</h1>
                <p className="text-xs text-gray-600">ייעוץ משפטי לתעשיית המזון</p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 mx-1 text-gray-700 hover:text-primary rounded-md transition-all duration-200 hover:bg-gray-100/50 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+972123456789"
              className="flex items-center rounded-full bg-primary text-white px-4 py-2 mr-2 shadow-neumorphic-sm hover:shadow-neumorphic-md transition-all duration-300 hover:bg-primary-dark"
            >
              <HiOutlinePhone className="ml-2" />
              <span>03-1234567</span>
            </a>
            <a
              href="mailto:info@delta-law.co.il"
              className="flex items-center rounded-full bg-white text-secondary border border-secondary/20 px-4 py-2 shadow-neumorphic-sm hover:shadow-neumorphic-md transition-all duration-300"
              aria-label="שלח אימייל"
            >
              <HiOutlineMail className="text-secondary" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white shadow-neumorphic-sm hover:shadow-neumorphic-md transition-all duration-200"
              aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            >
              {isOpen ? (
                <HiX className="h-6 w-6 text-secondary" />
              ) : (
                <HiMenu className="h-6 w-6 text-primary" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-3 text-gray-700 hover:text-primary rounded-lg transition-all duration-200 hover:bg-gray-100/80 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-200">
                  <a
                    href="tel:+972123456789"
                    className="flex items-center justify-center rounded-full bg-primary text-white px-4 py-3 shadow-neumorphic-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <HiOutlinePhone className="ml-2" />
                    <span>03-1234567</span>
                  </a>
                  <a
                    href="mailto:info@delta-law.co.il"
                    className="flex items-center justify-center rounded-full bg-white text-secondary border border-secondary/20 px-4 py-3 shadow-neumorphic-sm"
                    aria-label="שלח אימייל"
                    onClick={() => setIsOpen(false)}
                  >
                    <HiOutlineMail className="ml-2" />
                    <span>info@delta-law.co.il</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;