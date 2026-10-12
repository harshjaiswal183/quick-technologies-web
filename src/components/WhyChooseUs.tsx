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
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenDemoModal?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenDemoModal }) => {
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
    <section className="py-20 lg:py-28 relative bg-[#070C16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Quick Technologies Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why High-Growth Companies{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Partner With Us
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We bridge the gap between complex software engineering and tangible business profitability.
          </p>
        </div>

        {/* Split Layout: Software Dashboard Interface Visual on Left & 8 Feature Points on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Software UI / Analytics Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] border border-slate-800 p-6 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    QT
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">QuickTech Executive Suite</h4>
                    <p className="text-[10px] text-slate-400">Live Operation Metrics</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Healthy • 99.9%
                </span>
              </div>

              {/* Live Metric Cards */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Field Order Accuracy</span>
                    <span className="font-bold text-cyan-400">99.4%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[99.4%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Manual human error reduced to zero</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Distributor Sync Speed</span>
                    <span className="font-bold text-emerald-400">&lt; 150 ms</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[96%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Instant cloud synchronization</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Battery Saver Background GPS</span>
                    <span className="font-bold text-blue-400">&lt; 4% battery/day</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-400 h-full w-[92%]" />
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 block">Optimized for budget field smartphones</span>
                </div>
              </div>

              {/* Callout box */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>The Quick Tech Commitment</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  We provide continuous code reviews, clean documentation, transparent timelines, and 24/7 emergency response protocols.
                </p>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Live Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

          {/* Right Column: 8 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {pt.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
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
