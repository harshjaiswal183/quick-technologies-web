import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  X,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { InstagramIcon, WhatsAppIcon } from './Icons';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Custom Software', href: '#custom-solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Development Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Book a Demo', href: '#book-demo' },
  ];

  return (
    <footer className="bg-[#050912] border-t border-slate-200/80 pt-16 pb-12 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-200/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-11 px-3 py-1 rounded-xl bg-white shadow-md border border-white/80 flex items-center justify-center">
                <img
                  src="/quick-tech-logo.png"
                  alt="Quick Technologies Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-slate-100 flex items-center gap-1">
                  QUICK <span className="text-cyan-400">TECHNOLOGIES</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold">
                  Innovate • Develop • Deliver
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Quick Technologies engineers custom software, sales automation, web and mobile platforms that help businesses eliminate manual bottlenecks and scale faster.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <p>Tagline: “{COMPANY_INFO.tagline}”</p>
              <p>“{COMPANY_INFO.supportingTagline}”</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center transition-all"
                title="WhatsApp: +91 9650652635"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
              </a>


              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center transition-all"
                title="Instagram: @quick.technologies"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                aria-label="Phone"
                className="w-9 h-9 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center transition-all"
                title="Call: +91 9650652635"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center transition-all"
                title="Email: harshjaiswal183@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinks.slice(0, 7).map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.slice(0, 8).map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors truncate block"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-slate-100 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">+91 9650652635</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-slate-100 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="truncate text-slate-300">harshjaiswal183@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 mt-0.5 flex-shrink-0" />
                <span>F-167, Karampura, New Delhi - 110015</span>
              </div>

              <div className="pt-2">
                <a
                  href="#book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white border border-blue-400 text-xs font-semibold transition-all"
                >
                  <span>Book Free Technical Demo</span>
                </a>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => {
                    const el = document.getElementById('book-demo');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Meeting</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Quick Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-200 text-slate-500 hover:text-slate-900"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} (Placeholder)
              </span>
            </h3>

            <div className="text-xs text-slate-700 space-y-3 leading-relaxed">
              <p>
                This document serves as a standardized placeholder for Quick Technologies. Replace with your final legally reviewed terms before commercial operations.
              </p>
              <p>
                <strong>Data Protection:</strong> Any information submitted through our contact and demo booking channels is treated with strict confidentiality and is not shared with third-party advertisers.
              </p>
              <p>
                <strong>Intellectual Property:</strong> All customized code developed by Quick Technologies for contracted clients remains the intellectual property of the respective client upon milestone settlement.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
