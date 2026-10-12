import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Award, 
  Boxes, 
  Users, 
  Cpu, 
  MapPin, 
  ClipboardList, 
  BarChart3, 
  Code2, 
  ArrowRight, 
  MessageSquare, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES, type ServiceItem, COMPANY_INFO } from '../data/companyData';

interface ServicesSectionProps {
  onSelectServiceForDemo?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForDemo }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Boxes': return <Boxes className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'ClipboardList': return <ClipboardList className="w-6 h-6" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-white">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive IT & Digital Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tailor-Made Solutions for Every{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Operational Challenge
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            From field-level mobility to corporate headquarters enterprise analytics, explore our core digital and software engineering capabilities.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-full border border-slate-300/60">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 border border-slate-300/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-cyan-500 transition-colors group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hi Quick Technologies, I want to discuss ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Chat about ${service.title} on WhatsApp`}
                    className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      if (onSelectServiceForDemo) {
                        onSelectServiceForDemo(service.title);
                      }
                      const el = document.getElementById('book-demo');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white border border-blue-400 transition-all font-medium"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center border border-blue-500/30">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{selectedService.category}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Key Capabilities */}
            <div className="space-y-3 mb-6 bg-slate-100/80 p-5 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Capabilities & Included Features</h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="mb-6">
              <span className="text-xs font-mono text-slate-500 block mb-2">Recommended Tech Stack:</span>
              <div className="flex flex-wrap gap-2">
                {selectedService.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-200 text-blue-600 border border-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  if (onSelectServiceForDemo) {
                    onSelectServiceForDemo(selectedService.title);
                  }
                  setSelectedService(null);
                  const el = document.getElementById('book-demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all"
              >
                <span>Request Demo For This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                  `Hi Quick Technologies, I am reviewing ${selectedService.title} on your website and want to discuss our requirements.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500 text-sm font-semibold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
