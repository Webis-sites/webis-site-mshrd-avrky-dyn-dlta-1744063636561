'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'אילו שירותים משפטיים אתם מציעים לתעשיית המזון?',
      answer: 'משרדנו מתמחה במגוון שירותים משפטיים לתעשיית המזון, כולל ייעוץ בנושאי רגולציה, תקנות בטיחות מזון, רישוי עסקים, הגנה על קניין רוחני, טיפול בתביעות צרכניות, ייצוג מול רשויות פיקוח, וליווי בהליכי יבוא ויצוא מזון. אנו מלווים חברות בכל שלבי הפעילות העסקית, החל מהקמה ועד לפיתוח והתרחבות.'
    },
    {
      id: 'faq-2',
      question: 'כיצד אתם עוזרים לעסקים להתמודד עם דרישות רגולטוריות?',
      answer: 'אנו מסייעים לעסקים בתעשיית המזון להבין ולעמוד בדרישות הרגולטוריות המורכבות באמצעות ניתוח מקיף של החקיקה הרלוונטית, פיתוח תכניות ציות, ליווי בביקורות רגולטוריות, והתאמת תהליכי העבודה לדרישות החוק. צוות המומחים שלנו עוקב באופן שוטף אחר שינויים בחקיקה ומעדכן את לקוחותינו בהתאם.'
    },
    {
      id: 'faq-3',
      question: 'מהם שלבי הטיפול בתיק משפטי בתחום המזון?',
      answer: 'הטיפול בתיק משפטי בתחום המזון כולל מספר שלבים: 1) פגישת ייעוץ ראשונית להבנת הסוגיה, 2) איסוף וניתוח מסמכים ומידע רלוונטי, 3) גיבוש אסטרטגיה משפטית מותאמת, 4) ייצוג בהליכים משפטיים או במשא ומתן, 5) ליווי ביישום ההסכמות או פסקי הדין. לאורך כל התהליך, אנו שומרים על תקשורת רציפה עם הלקוח ומעדכנים באופן שוטף.'
    },
    {
      id: 'faq-4',
      question: 'כיצד נקבעים שכר הטרחה והעלויות המשפטיות?',
      answer: 'שכר הטרחה נקבע בהתאם לאופי השירות המשפטי, מורכבות התיק, היקף העבודה הנדרשת, ודחיפות הטיפול. אנו מציעים מספר מודלים תשלום, כולל שכר טרחה קבוע, שעתי, או שילוב ביניהם. בפגישת הייעוץ הראשונית נציג הצעת מחיר מפורטת ושקופה, ונסביר את כל העלויות הצפויות כדי למנוע הפתעות בהמשך.'
    },
    {
      id: 'faq-5',
      question: 'האם אתם מטפלים גם בעסקים קטנים או רק בחברות גדולות?',
      answer: 'משרדנו מעניק שירותים משפטיים לעסקים בכל גודל בתעשיית המזון - מיזמים קטנים ומסעדות משפחתיות ועד לרשתות מזון גדולות ויצרנים בינלאומיים. אנו מתאימים את השירות והליווי המשפטי לצרכים הספציפיים ולתקציב של כל לקוח, ומאמינים שכל עסק זכאי לייעוץ משפטי מקצועי ואיכותי.'
    },
    {
      id: 'faq-6',
      question: 'מה משך הזמן הממוצע לטיפול בתביעה משפטית בתחום המזון?',
      answer: 'משך הזמן לטיפול בתביעה משפטית בתחום המזון משתנה בהתאם למורכבות התיק, סוג ההליך, והעומס במערכת המשפט. תביעות פשוטות יחסית עשויות להסתיים תוך מספר חודשים, בעוד שתיקים מורכבים עלולים להימשך שנה או יותר. אנו שואפים לייעל את התהליך ככל האפשר, ובמקרים רבים פועלים להשגת פשרה מחוץ לכותלי בית המשפט כדי לחסוך זמן ועלויות.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50 rtl text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">שאלות נפוצות</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מצאו תשובות לשאלות הנפוצות ביותר בנושא שירותים משפטיים לתעשיית המזון
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="faq-item bg-white rounded-xl overflow-hidden shadow-neumorphic transition-all duration-300"
            >
              <button
                className={`w-full text-right flex justify-between items-center p-5 focus:outline-none ${
                  activeId === faq.id ? 'bg-primary bg-opacity-10' : 'bg-white'
                }`}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeId === faq.id}
                aria-controls={`content-${faq.id}`}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <FaChevronDown />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    id={`content-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="glassmorphism p-5 text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glassmorphism inline-block px-8 py-4 rounded-full">
            <p className="text-gray-700 mb-2">יש לכם שאלה שלא מופיעה כאן?</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-secondary text-white font-medium rounded-full shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300"
            >
              צרו קשר עכשיו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;