import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ExternalLink,
  ShieldAlert,
  Clock
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';
import { InstagramIcon, WhatsAppIcon } from './Icons';

interface ContactSectionProps {
  onOpenDemoModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#070C16] border-t border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Great Together
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
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
              className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Phone Call</div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400">WhatsApp Instant Chat</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 9650652635
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* Instagram Card */}
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 hover:bg-slate-800/80 transition-all flex items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Official Instagram</div>
                  <div className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    @quick.technologies
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-400 transition-colors" />
            </a>

          </div>

          {/* Right Column: Office Location & Map Placeholder */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-1">
                    Temporary Location Placeholder
                  </div>
                  <h3 className="text-lg font-bold text-white">Office Address (New Delhi, India)</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {COMPANY_INFO.location.addressPlaceholder}
                  </p>
                </div>
              </div>

              {/* Map Graphic / Visual Mockup */}
              <div className="h-64 sm:h-72 rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden flex flex-col items-center justify-center text-center p-6">
                
                {/* Background grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-70" />
                
                {/* Radial radar ring */}
                <div className="absolute w-56 h-56 rounded-full border border-blue-500/20 animate-ping opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">New Delhi, India</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Serving clients across Delhi-NCR, Mumbai, Bengaluru, and pan-India with remote & on-site deployments.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-cyan-300 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Business Hours: Mon - Sat, 9:30 AM - 6:30 PM IST</span>
                  </div>
                </div>

              </div>

              {/* Verified Location Notice */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Office address placeholder will be updated with exact lease registration details upon confirmation.</span>
                </div>
                {onOpenDemoModal && (
                  <button
                    onClick={onOpenDemoModal}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold whitespace-nowrap"
                  >
                    Schedule Meeting →
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
