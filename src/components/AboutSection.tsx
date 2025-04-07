'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBalanceScale, FaHandshake, FaClipboardCheck, FaAward } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="neumorphic-card glassmorphism-effect p-6 rounded-xl relative overflow-hidden">
      <div className="flex items-center mb-4">
        <div className="text-primary text-3xl mr-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="about-section py-16 px-4 md:px-8 lg:px-16 bg-light-bg rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            אודות משרד עורכי דין דלתא
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            אנו מתמחים במתן ייעוץ משפטי מקצועי לתעשיית המזון בישראל, עם ניסיון של למעלה מ-15 שנה בתחום.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glassmorphism-card p-8 rounded-xl shadow-soft h-full"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">המומחיות שלנו</h3>
            <p className="text-gray-600 mb-6">
              משרדנו מתמחה בכל ההיבטים המשפטיים של תעשיית המזון, כולל רגולציה, בטיחות מזון, 
              תקנות סימון ואריזה, רישוי עסקים, ייבוא וייצוא, וקניין רוחני בתחום המזון.
            </p>
            <p className="text-gray-600">
              אנו מלווים חברות מזון, יצרנים, יבואנים, רשתות קמעונאיות ומסעדות בכל שלבי הפעילות העסקית,
              מייעוץ משפטי שוטף ועד ייצוג בהליכים משפטיים.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glassmorphism-card p-8 rounded-xl shadow-soft h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">הגישה שלנו</h3>
            <p className="text-gray-600 mb-6">
              אנו מאמינים במתן שירות אישי ומקצועי לכל לקוח, תוך הבנה מעמיקה של צרכיו העסקיים והמשפטיים.
            </p>
            <p className="text-gray-600">
              הצוות המשפטי שלנו משלב ידע משפטי מעמיק עם הבנה עסקית של תעשיית המזון, מה שמאפשר לנו 
              לספק פתרונות משפטיים יעילים ומותאמים אישית לכל לקוח.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaBalanceScale />}
              title="מומחיות משפטית"
              description="ידע מעמיק בדיני מזון ורגולציה, עם התמחות ספציפית בתעשיית המזון הישראלית."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaHandshake />}
              title="שירות אישי"
              description="ליווי צמוד ואישי לכל לקוח, עם זמינות גבוהה ומענה מהיר לכל שאלה או בעיה."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaClipboardCheck />}
              title="פתרונות מעשיים"
              description="אנו מספקים פתרונות משפטיים מעשיים שמתאימים לצרכים העסקיים של הלקוח."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<FaAward />}
              title="ניסיון מוכח"
              description="למעלה מ-15 שנות ניסיון בליווי חברות מובילות בתעשיית המזון בישראל."
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">צור קשר עמנו</h3>
          <p className="text-gray-600 mb-8">
            אנו מזמינים אותך לפנות אלינו לייעוץ ראשוני ללא התחייבות, כדי לדון בצרכים המשפטיים של העסק שלך.
          </p>
          <button className="neumorphic-button bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-soft-button">
            צור קשר
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;