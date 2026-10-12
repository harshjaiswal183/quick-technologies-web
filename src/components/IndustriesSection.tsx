import React from 'react';
import { 
  ShoppingBag, 
  Store, 
  Activity, 
  Factory, 
  Truck, 
  Globe2, 
  Compass, 
  Rocket, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { INDUSTRIES, type IndustryItem } from '../data/companyData';

interface IndustriesSectionProps {
  onOpenDemoModal?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenDemoModal }) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-blue-400" />;
      case 'Store': return <Store className="w-6 h-6 text-cyan-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-amber-400" />;
      case 'Truck': return <Truck className="w-6 h-6 text-indigo-400" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-sky-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-purple-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 relative bg-[#090F1C] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Verticals & Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industries We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Serve & Transform
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our software frameworks are engineered to resolve domain-specific operational challenges across high-growth industry sectors in India and globally.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry: IndustryItem) => (
            <div
              key={industry.id}
              className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(industry.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {industry.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {industry.description}
                </p>
              </div>

              <div>
                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Key Solutions:</span>
                  <div className="flex flex-wrap gap-1">
                    {industry.solutions.map((sol, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                        {sol}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target Industries Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Presented as target industry capabilities and architectural solutions tailored for each vertical.</span>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 group"
          >
            <span>Request industry consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
