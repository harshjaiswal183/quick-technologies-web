import React from 'react';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { DEVELOPMENT_PROCESS, COMPANY_INFO } from '../data/companyData';

interface ProcessTimelineProps {
  onOpenDemoModal?: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="process" className="py-20 lg:py-28 relative bg-[#090F1C] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Delivery Cycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Lifecycle
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From initial concept discussion to post-launch scaling, our structured 7-phase methodology guarantees predictable milestones and exceptional quality.
          </p>
        </div>

        {/* Desktop Horizontal Scrollable / Responsive Timeline Grid */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-3 relative">
          
          {/* Connecting Track Line */}
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 -z-0 opacity-40" />

          {DEVELOPMENT_PROCESS.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step Circle */}
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 flex items-center justify-center font-mono font-bold text-sm text-cyan-400 shadow-xl group-hover:scale-110 group-hover:bg-blue-950 transition-all duration-300 mb-4">
                {item.step}
              </div>

              {/* Title & Desc */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 group-hover:border-slate-700 w-full flex-1 flex flex-col justify-start">
                <h3 className="text-xs font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-4 relative pl-6 border-l-2 border-blue-500/30 ml-2">
          {DEVELOPMENT_PROCESS.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on line */}
              <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-mono text-cyan-400 font-bold">
                {idx + 1}
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] font-mono text-slate-400">Step {item.step}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:scale-[1.02] transition-all"
          >
            <span>Start Your Project Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Consult an Engineer</span>
          </a>
        </div>

      </div>
    </section>
  );
};
