'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaBalanceScale, FaClipboardCheck, FaTag, FaTrademark, FaShieldAlt } from 'react-icons/fa';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="bg-white backdrop-blur-md bg-opacity-20 rounded-xl p-6 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 border border-white border-opacity-10"
    >
      <div className="flex flex-col items-end text-right">
        <div className="bg-primary-light rounded-full p-3 mb-4 text-primary">
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const expertiseAreas = [
    {
      icon: <FaBalanceScale />,
      title: "חוקים ותקנות מזון",
      description: "ייעוץ מקיף בנושא חוקי המזון הישראליים והבינלאומיים, כולל עמידה בדרישות רגולטוריות ותקני בטיחות מזון."
    },
    {
      icon: <FaClipboardCheck />,
      title: "תאימות ואישורים",
      description: "ליווי בתהליכי קבלת אישורים ורישיונות, וידוא עמידה בתקנות משרד הבריאות ורשויות פיקוח מזון."
    },
    {
      icon: <FaTag />,
      title: "סימון ותיוג מוצרים",
      description: "ייעוץ בנושא דרישות סימון מזון, הצהרות תזונתיות, וטענות בריאותיות בהתאם לחוקי הצרכנות והמזון."
    },
    {
      icon: <FaTrademark />,
      title: "קניין רוחני במזון",
      description: "הגנה על מתכונים, תהליכי ייצור, מותגים וסימנים מסחריים בתעשיית המזון והמשקאות."
    },
    {
      icon: <FaShieldAlt />,
      title: "אחריות מוצר",
      description: "טיפול בסוגיות אחריות מוצר, ניהול סיכונים, והתמודדות עם תביעות בטיחות מזון ונזקי צרכנים."
    }
  ];

  return (
    <section dir="rtl" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Glass decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary bg-opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-secondary bg-opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            תחומי התמחות
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
            }}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            משרד עורכי דין דלתא מתמחה בליווי משפטי מקיף לחברות בתעשיית המזון, עם מומחיות ייחודית בכל ההיבטים המשפטיים של הענף
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-neumorphic border border-white border-opacity-20">
            <h3 className="text-xl font-bold text-gray-800 mb-3">צריכים ייעוץ משפטי מקצועי בתחום המזון?</h3>
            <p className="text-gray-600 mb-5">צוות המומחים שלנו ישמח לעמוד לרשותכם בכל שאלה או אתגר משפטי</p>
            <button className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-full shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300 font-medium">
              צרו קשר עכשיו
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;