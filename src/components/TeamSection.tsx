'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  specializations: string[];
  bio: string;
  imageUrl: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "עו״ד שרה כהן",
      position: "שותפה מייסדת",
      specializations: ["רגולציה בתעשיית המזון", "משפט מסחרי"],
      bio: "בעלת ניסיון של מעל 15 שנה בליווי חברות מזון מובילות בישראל. מתמחה בייעוץ משפטי בנושאי רגולציה, תקינה וסימון מוצרי מזון.",
      imageUrl: "/images/team/sarah-cohen.jpg"
    },
    {
      id: 2,
      name: "עו״ד דוד לוי",
      position: "שותף בכיר",
      specializations: ["ליטיגציה מסחרית", "דיני צרכנות"],
      bio: "מומחה בייצוג חברות מזון בהליכים משפטיים מורכבים. בעל ניסיון עשיר בטיפול בתביעות ייצוגיות ובסכסוכים מסחריים בתעשיית המזון.",
      imageUrl: "/images/team/david-levi.jpg"
    },
    {
      id: 3,
      name: "עו״ד מיכל אברהם",
      position: "ראש מחלקת קניין רוחני",
      specializations: ["פטנטים", "סימני מסחר", "זכויות יוצרים"],
      bio: "מתמחה בהגנה על קניין רוחני בתעשיית המזון, כולל פטנטים על תהליכי ייצור, סימני מסחר ומותגים, וסודות מסחריים.",
      imageUrl: "/images/team/michal-abraham.jpg"
    },
    {
      id: 4,
      name: "עו״ד יוסף נחום",
      position: "ראש מחלקת חוזים",
      specializations: ["חוזים מסחריים", "הסכמי הפצה", "שותפויות"],
      bio: "מתמחה בניסוח וניהול חוזים מסחריים מורכבים בתעשיית המזון, הסכמי הפצה, שיתופי פעולה אסטרטגיים והסכמי רישוי.",
      imageUrl: "/images/team/yosef-nachum.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 rtl" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-gray-800 relative inline-block"
          >
            <span className="relative z-10">הצוות המשפטי שלנו</span>
            <span className="absolute -bottom-2 right-0 w-full h-3 bg-primary opacity-20 rounded-full"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            צוות עורכי הדין המנוסה שלנו מתמחה בליווי משפטי מקיף לחברות בתעשיית המזון
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              
              <div className="p-6 glassmorphism relative">
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm -z-10 rounded-b-2xl"></div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {member.specializations.map((spec, index) => (
                    <span 
                      key={index} 
                      className="inline-block text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-full shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300 hover:bg-primary-dark"
          >
            צור קשר עם הצוות שלנו
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;