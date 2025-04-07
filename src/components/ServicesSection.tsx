'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaFileContract, FaGavel, FaHandshake, FaShieldAlt, FaGlobe } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card relative p-6 rounded-xl backdrop-blur-md bg-white/80 border border-white/20 shadow-neumorphic overflow-hidden"
      whileHover={{ 
        y: -5,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-overlay absolute inset-0 opacity-10 pointer-events-none"></div>
      <div className="icon-container mb-4 p-3 inline-block rounded-full bg-gradient-to-br from-primary-light to-primary text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <motion.div
        className="cta-link text-secondary font-medium flex items-center justify-end"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        <span>קרא עוד</span>
        <span className="mr-1 transform rotate-180">&#8592;</span>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaBalanceScale size={24} />,
      title: "ייעוץ משפטי לתעשיית המזון",
      description: "ליווי משפטי מקיף לחברות בתעשיית המזון בנושאי רגולציה, בטיחות מזון ותקינה."
    },
    {
      icon: <FaFileContract size={24} />,
      title: "חוזים והסכמים",
      description: "ניסוח, בדיקה וייעוץ בהסכמי אספקה, הפצה ושיתופי פעולה בתחום המזון."
    },
    {
      icon: <FaGavel size={24} />,
      title: "ליטיגציה מסחרית",
      description: "ייצוג בהליכים משפטיים, סכסוכים מסחריים וייצוג מול רשויות רגולטוריות."
    },
    {
      icon: <FaHandshake size={24} />,
      title: "מיזוגים ורכישות",
      description: "ליווי בעסקאות מיזוג ורכישה בתעשיית המזון, בדיקות נאותות וייעוץ אסטרטגי."
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "הגנה על קניין רוחני",
      description: "רישום וניהול פטנטים, סימני מסחר וסודות מסחריים בתחום המזון והמשקאות."
    },
    {
      icon: <FaGlobe size={24} />,
      title: "ייעוץ בינלאומי",
      description: "ליווי בהתרחבות גלובלית, ייבוא וייצוא מזון, ועמידה בתקינה בינלאומית."
    }
  ];

  return (
    <section className="services-section py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dir-rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">השירותים המשפטיים שלנו</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            משרד עורכי דין דלתא מתמחה במתן פתרונות משפטיים מקיפים לחברות בתעשיית המזון, 
            תוך התמקדות בצרכים הייחודיים של הלקוחות שלנו והבנה מעמיקה של הענף.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="/contact" 
            className="inline-block py-3 px-8 bg-primary text-white rounded-full shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300 font-medium"
          >
            לפגישת ייעוץ ראשונית
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;