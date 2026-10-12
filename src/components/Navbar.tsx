import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './Icons';

interface NavbarProps {
  onOpenDemoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Custom Software', href: '#custom-solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg shadow-black/20 border-b border-slate-200/80'
          : 'bg-white/40 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with High Visibility */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-11 sm:h-12 px-3 py-1 rounded-xl bg-white shadow-md shadow-blue-500/10 border border-white/80 flex items-center justify-center group-hover:scale-105 group-hover:shadow-blue-500/25 transition-all">
              <img
                src="/quick-tech-logo.png"
                alt="Quick Technologies Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                QUICK <span className="text-cyan-400 font-extrabold">TECHNOLOGIES</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 font-medium -mt-0.5 hidden sm:block">
                Innovate • Develop • Deliver
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Technologies link removed) */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs 2xl:text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-200/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* WhatsApp Direct Icon Button */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all hover:scale-105"
              title="Chat with us on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label="Call Quick Technologies"
              className="p-2.5 rounded-xl bg-slate-200/80 text-slate-700 hover:text-slate-900 hover:bg-slate-700/80 border border-slate-300 transition-all"
              title="Call +91 9650652635"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary CTA */}
            <a
              href="#book-demo"
              onClick={(e) => {
                if (onOpenDemoModal) {
                  e.preventDefault();
                  onOpenDemoModal();
                } else {
                  handleScrollTo(e, '#book-demo');
                }
              }}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-200/80 border border-slate-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="#book-demo"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (onOpenDemoModal) {
                    e.preventDefault();
                    onOpenDemoModal();
                  } else {
                    handleScrollTo(e, '#book-demo');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+91 9650652635)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

