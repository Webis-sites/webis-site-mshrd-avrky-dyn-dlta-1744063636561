import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface NavLink {
  title: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface BusinessHours {
  days: string;
  hours: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks: NavLink[] = [
    { title: 'דף הבית', href: '/' },
    { title: 'אודות', href: '/about' },
    { title: 'תחומי התמחות', href: '/expertise' },
    { title: 'צוות המשרד', href: '/team' },
    { title: 'מאמרים', href: '/articles' },
    { title: 'צור קשר', href: '/contact' },
  ];
  
  const legalLinks: NavLink[] = [
    { title: 'מדיניות פרטיות', href: '/privacy' },
    { title: 'תנאי שימוש', href: '/terms' },
    { title: 'נגישות', href: '/accessibility' },
  ];
  
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'טוויטר' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'לינקדאין' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'אינסטגרם' },
  ];
  
  const businessHours: BusinessHours[] = [
    { days: 'ראשון - חמישי', hours: '09:00 - 18:00' },
    { days: 'שישי', hours: '09:00 - 13:00' },
    { days: 'שבת', hours: 'סגור' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-right rtl" dir="rtl">
      {/* Glass effect top border */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-80"></div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About section */}
          <div className="neumorphic-card">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-r-4 border-primary pr-3">משרד עורכי דין דלתא</h2>
            <p className="text-gray-600 mb-4">
              משרד עורכי דין דלתא מתמחה במתן שירותים משפטיים מקיפים לתעשיית המזון, 
              תוך שילוב ניסיון רב, מקצועיות ומחויבות אישית לכל לקוח.
            </p>
            <div className="flex space-x-reverse space-x-3 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="glass-button flex items-center justify-center w-9 h-9 rounded-full transition-all hover:transform hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact info */}
          <div className="neumorphic-card">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-r-4 border-primary pr-3">צור קשר</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="text-primary ml-2 flex-shrink-0" />
                <a href="tel:+97235555555" className="text-gray-600 hover:text-secondary transition-colors">
                  03-5555555
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary ml-2 flex-shrink-0" />
                <a href="mailto:info@delta-law.co.il" className="text-gray-600 hover:text-secondary transition-colors">
                  info@delta-law.co.il
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary ml-2 flex-shrink-0 mt-1" />
                <address className="text-gray-600 not-italic">
                  רחוב רוטשילד 123, תל אביב<br />
                  מיקוד 6380101
                </address>
              </li>
            </ul>
          </div>
          
          {/* Business hours */}
          <div className="neumorphic-card">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-r-4 border-primary pr-3">שעות פעילות</h2>
            <ul className="space-y-2">
              {businessHours.map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaClock className="text-primary ml-2 flex-shrink-0 mt-1" />
                  <div>
                    <span className="block text-gray-800 font-medium">{item.days}</span>
                    <span className="block text-gray-600">{item.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Navigation */}
          <div className="neumorphic-card">
            <h2 className="text-xl font-bold mb-4 text-gray-800 border-r-4 border-primary pr-3">ניווט מהיר</h2>
            <nav aria-label="ניווט בתחתית האתר">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-secondary transition-colors hover:pr-2"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="glass-effect border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © {currentYear} משרד עורכי דין דלתא. כל הזכויות שמורות.
              </p>
            </div>
            <nav aria-label="קישורים משפטיים">
              <ul className="flex flex-wrap space-x-reverse space-x-6">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 text-sm hover:text-secondary transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;