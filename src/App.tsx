import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CustomSoftwareSection } from './components/CustomSoftwareSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { PortfolioSection } from './components/PortfolioSection';
import { DemoBookingSection } from './components/DemoBookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [selectedServiceForDemo, setSelectedServiceForDemo] = useState<string>('Custom Software');

  const handleOpenDemoModal = () => {
    const el = document.getElementById('book-demo');
    if (el) {
      const navHeight = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elPos - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectServiceForDemo = (serviceTitle: string) => {
    setSelectedServiceForDemo(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#070C16] text-slate-100 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Top Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 2. About Quick Technologies */}
        <AboutSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 3. Comprehensive Services Section */}
        <ServicesSection onSelectServiceForDemo={handleSelectServiceForDemo} />

        {/* 4. Custom Software Solutions */}
        <CustomSoftwareSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 5. Industries We Serve */}
        <IndustriesSection onOpenDemoModal={handleOpenDemoModal} />


        {/* 7. Why Choose Us? */}
        <WhyChooseUs onOpenDemoModal={handleOpenDemoModal} />

        {/* 8. Development Process & Lifecycle */}
        <ProcessTimeline onOpenDemoModal={handleOpenDemoModal} />

        {/* 9. Portfolio / Concept Work Showcase */}
        <PortfolioSection onSelectProjectForDemo={handleSelectServiceForDemo} />

        {/* 10. Book a Free Demo Request Form */}
        <DemoBookingSection 
          preselectedService={selectedServiceForDemo}
          onClearPreselected={() => setSelectedServiceForDemo('Custom Software')}
        />

        {/* 11. Testimonials & Feedback Preview */}
        <TestimonialsSection />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Direct Contact & Office Section */}
        <ContactSection onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
