'use client';

import React from 'react';
import MetaTags from '../components/MetaTags';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactForm from '../components/ContactForm';
import ExpertiseSection from '../components/ExpertiseSection';
import TeamSection from '../components/TeamSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <MetaTags />
    <Layout />
    <Header />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <FAQSection />
    <ContactForm />
    <ExpertiseSection />
    <TeamSection />
    <CTASection />
    <Footer />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 משרד עורכי דין דלתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}