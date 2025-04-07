import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Placeholder components - you would create these separately
const Header = () => (
  <header className="bg-gradient-to-l from-primary-700 to-primary-900 text-white shadow-neumorphic-dark">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-2xl font-bold">משרד עורכי דין דלתא</div>
        </div>
        <nav className="flex space-x-6 flex-row-reverse">
          {['דף הבית', 'אודות', 'תחומי התמחות', 'צוות המשרד', 'צור קשר'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-white/90 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gradient-to-l from-primary-900 to-primary-950 text-white py-8 mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">משרד עורכי דין דלתא</h3>
          <p className="text-white/80">
            אנו מספקים ייעוץ משפטי מקצועי ואיכותי בתחומים מגוונים, תוך שמירה על יחס אישי ומסור ללקוחותינו.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">צור קשר</h3>
          <address className="not-italic text-white/80">
            <div className="mb-2">רחוב הרצל 123, תל אביב</div>
            <div className="mb-2">טלפון: 03-1234567</div>
            <div>דוא"ל: info@delta-law.co.il</div>
          </address>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">שעות פעילות</h3>
          <div className="text-white/80">
            <div className="mb-1">ימים א'-ה': 09:00-18:00</div>
            <div className="mb-1">יום ו': 09:00-13:00</div>
            <div>שבת: סגור</div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-white/20 text-center text-white/60">
        <p>© {new Date().getFullYear()} משרד עורכי דין דלתא. כל הזכויות שמורות.</p>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'משרד עורכי דין דלתא', 
  description = 'משרד עורכי דין דלתא מתמחה בייצוג לקוחות פרטיים ועסקיים במגוון תחומי המשפט, תוך מתן שירות מקצועי, אישי ואיכותי.'
}) => {
  const router = useRouter();
  const canonicalUrl = `https://delta-law.co.il${router.asPath}`;
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="עורכי דין, ייעוץ משפטי, משרד עורכי דין, עורך דין, שירותים משפטיים, דלתא" />
        <link rel="canonical" href={canonicalUrl} />
        <html lang="he" dir="rtl" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://delta-law.co.il/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://delta-law.co.il/images/og-image.jpg" />
        
        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "משרד עורכי דין דלתא",
              "description": description,
              "url": "https://delta-law.co.il",
              "logo": "https://delta-law.co.il/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "רחוב הרצל 123",
                "addressLocality": "תל אביב",
                "postalCode": "6100000",
                "addressCountry": "IL"
              },
              "telephone": "+972-3-1234567",
              "email": "info@delta-law.co.il",
              "openingHours": [
                "Mo-Th 09:00-18:00",
                "Fr 09:00-13:00"
              ]
            })
          }}
        />
      </Head>
      
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-background-light to-background text-primary-950">
        <Header />
        
        <main className="flex-grow">
          <div className="glass-container mx-auto my-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;