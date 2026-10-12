import React from 'react';
import { 
  Target, 
  Code2, 
  LifeBuoy, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Shield,
  Layers,
  Clock,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenDemoModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDemoModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#090F1C]/80 border-t border-b border-slate-800/80">
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Quick Technologies</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology That Moves Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Business Forward
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Quick Technologies is an India-based software engineering and digital solutions company. We specialize in building customized digital products, business automation platforms, and scalable applications engineered around each client’s operational workflows.
          </p>
        </div>

        {/* 3 Core Pillars / Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="group relative p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Business-Focused Solutions
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              We do not build generic software for vanity. Every system, module, and feature is meticulously aligned with your operational bottlenecks, profit margins, and revenue growth.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Tailored for Indian MSMEs & Enterprises</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Measurable ROI and workflow speed</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="group relative p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
              <Code2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Customized Software Development
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Say goodbye to rigid, overpriced SaaS subscriptions that force you to adapt. We engineer custom architectures where you retain complete intellectual property and custom flexibility.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Modular React, Node.js & Flutter stacks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Clean, maintainable & tested codebases</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="group relative p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <LifeBuoy className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              Long-Term Technology Support
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              We stand by our software even after delivery. From continuous server optimizations and cloud scaling to OS version upgrades and feature sprints, we remain your reliable technology partner.
            </p>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct WhatsApp & dedicated tech assistance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Regular security patches and monitoring</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Verified Statistics Grid */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1528] to-slate-900 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            
            {/* Stat 1 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-500/10 text-blue-400 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {COMPANY_INFO.experienceYears}
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-1">Years of Experience</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified track record</div>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {COMPANY_INFO.clientsCount}
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-1">Clients Served</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified active partnerships</div>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                100%
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-1">Custom Software Solutions</div>
              <div className="text-xs text-slate-400 mt-0.5">Bespoke code architecture</div>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="inline-flex items-center justify-center p-2 rounded-lg bg-purple-500/10 text-purple-400 mb-2">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                11+
              </div>
              <div className="text-sm font-semibold text-cyan-400 mt-1">Multiple Technology Services</div>
              <div className="text-xs text-slate-400 mt-0.5">Comprehensive IT offerings</div>
            </div>

          </div>

          {/* Verified Claims Badge / Note */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Numerical claims represent verified company history. Other metric benchmarks are kept customizable.</span>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold group"
            >
              <span>Speak with our founders</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
