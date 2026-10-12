import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Workflow, 
  Layout, 
  MessageSquareShare, 
  ShieldCheck, 
  LineChart, 
  TrendingUp,
  Zap
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: "Customized Solutions for Your Business",
      desc: "Zero generic templates. Systems engineered from scratch around your specific operations and margins.",
      icon: <Workflow className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Scalable & Modern Technology",
      desc: "Built on battle-tested frameworks (React, Flutter, Node.js) that effortlessly scale with your growth.",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Business Process Automation",
      desc: "Eliminate repetitive paperwork, manual WhatsApp follow-ups, and spreadsheet bookkeeping.",
      icon: <Zap className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "User-Friendly Software Interfaces",
      desc: "Clean, intuitive UI/UX that non-technical field executives and distributors can operate effortlessly.",
      icon: <Layout className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Transparent Project Communication",
      desc: "Milestone-based progress with direct founder access, weekly live demo staging, and zero jargon.",
      icon: <MessageSquareShare className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Reliable Technical Support",
      desc: "Proactive cloud server health monitoring, security patches, bug fixes, and continuous SLAs.",
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Data-Driven Business Insights",
      desc: "Live analytics dashboards transforming scattered operations into actionable leadership decisions.",
      icon: <LineChart className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Solutions Designed for Business Growth",
      desc: "Software engineered not as a cost center, but as a high-leverage revenue and efficiency catalyst.",
      icon: <TrendingUp className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Quick Technologies Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why High-Growth Companies{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Partner With Us
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We bridge the gap between complex software engineering and tangible business profitability.
          </p>
        </div>

        {/* Split Layout: Software Dashboard Interface Visual on Left & 8 Feature Points on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Column: 8 Feature Cards (full width) */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-100/70 border border-slate-200 hover:border-blue-500/30 hover:bg-slate-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-200 border border-slate-300/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {pt.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Included standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
