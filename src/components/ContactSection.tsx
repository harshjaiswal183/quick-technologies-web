import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert,
  Clock,
  Calendar
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';
import { InstagramIcon, WhatsAppIcon } from './Icons';

interface ContactSectionProps {
  onOpenDemoModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      {/* Background Lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Great Together
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Whether you want to build an enterprise SFA, mobile app, distributor network, or automate manual workflows, we are ready to discuss your roadmap.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information Cards & Interactive Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="group p-5 rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-blue-500/40 hover:bg-slate-200/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-slate-900 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500">Direct Phone Call</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-emerald-500/40 hover:bg-slate-200/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-slate-900 transition-all">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-500">WhatsApp Instant Chat</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-emerald-500 transition-colors">
                    +91 9650652635
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group p-5 rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-cyan-500/40 hover:bg-slate-200/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-mono text-slate-500">Email Address</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-rose-500/40 hover:bg-slate-200/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-slate-900 transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-500">Official Instagram</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-rose-500 transition-colors">
                    @quick.technologies
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-rose-400 transition-colors" />
            </a>

          </div>

          {/* Right Column: Office Location & Map Placeholder */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-100/90 border border-slate-200 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Registered Office
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">F-167, Karampura, New Delhi</h3>
                  <p className="text-xs sm:text-sm text-slate-700 mt-1">
                    New Delhi - 110015, India
                  </p>
                </div>
              </div>

              {/* Interactive Map Embed */}
              <a
                href="https://www.google.com/maps/place/F-167,+Karampura,+New+Delhi,+Delhi+110015"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200 shadow-inner relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-slate-100 to-cyan-50 group-hover:from-blue-200 group-hover:via-slate-200 transition-all" />
                
                {/* Decorative map dots */}
                <div className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-600 animate-ping opacity-60" />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-cyan-500 animate-ping opacity-40" style={{animationDelay: '1s'}} />
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-50" style={{animationDelay: '2s'}} />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-white/90 border-2 border-blue-600 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">F-167, Karampura</h4>
                  <p className="text-xs text-slate-600 mt-1">New Delhi - 110015</p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg group-hover:bg-blue-700 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>Open in Google Maps</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[10px] font-bold text-slate-900">Quick Technologies</span>
                  </div>
                </div>
              </a>

              <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>Business Hours: Mon - Sat, 9:30 AM - 6:30 PM IST</span>
              </div>

              {/* Verified Location Notice */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Registered office at F-167, Karampura, New Delhi - 110015. Visit by appointment only.</span>
                </div>
                {onOpenDemoModal && (
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 whitespace-nowrap"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Meeting</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
