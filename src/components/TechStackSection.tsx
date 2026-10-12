import React, { useState } from 'react';
import { Sparkles, Code2, Layers, Smartphone, Database, Cloud, Palette, CheckCircle2 } from 'lucide-react';
import { TECH_STACK } from '../data/companyData';

type TechCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'databases' | 'cloudAndTools' | 'designAndMarketing';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all');

  const categories = [
    { key: 'all' as TechCategory, name: 'All Technologies', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'frontend' as TechCategory, name: 'Frontend', icon: <Code2 className="w-3.5 h-3.5" /> },
    { key: 'backend' as TechCategory, name: 'Backend', icon: <Layers className="w-3.5 h-3.5" /> },
    { key: 'mobile' as TechCategory, name: 'Mobile Apps', icon: <Smartphone className="w-3.5 h-3.5" /> },
    { key: 'databases' as TechCategory, name: 'Databases', icon: <Database className="w-3.5 h-3.5" /> },
    { key: 'cloudAndTools' as TechCategory, name: 'Cloud & Tools', icon: <Cloud className="w-3.5 h-3.5" /> },
    { key: 'designAndMarketing' as TechCategory, name: 'Design & Marketing', icon: <Palette className="w-3.5 h-3.5" /> },
  ];

  const getFilteredTechnologies = () => {
    if (selectedCategory === 'all') {
      return [
        ...TECH_STACK.frontend.map(item => ({ ...item, group: 'Frontend' })),
        ...TECH_STACK.backend.map(item => ({ ...item, group: 'Backend' })),
        ...TECH_STACK.mobile.map(item => ({ ...item, group: 'Mobile Development' })),
        ...TECH_STACK.databases.map(item => ({ ...item, group: 'Databases' })),
        ...TECH_STACK.cloudAndTools.map(item => ({ ...item, group: 'Cloud & Tools' })),
        ...TECH_STACK.designAndMarketing.map(item => ({ ...item, group: 'Design & Marketing' })),
      ];
    }
    return (TECH_STACK[selectedCategory] || []).map(item => ({
      ...item,
      group: categories.find(c => c.key === selectedCategory)?.name || ''
    }));
  };

  const filteredList = getFilteredTechnologies();

  return (
    <section id="technologies" className="py-20 lg:py-28 relative bg-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern & Scalable Tooling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Stack & Frameworks
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            We employ modern, production-hardened languages, frameworks, cloud infrastructures, and analytics tools to engineer reliable software systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-slate-900 shadow-lg shadow-blue-600/30 border border-blue-500'
                  : 'bg-slate-100/80 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredList.map((tech, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl bg-slate-100/70 border border-slate-200 hover:border-blue-500/40 hover:bg-slate-200/80 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-200 border border-slate-300/60 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-inner">
                {tech.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </h3>
              <span className="text-[10px] text-cyan-400/90 font-mono mt-0.5">
                {tech.category}
              </span>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-snug line-clamp-2">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Editable confirmation disclaimer per prompt requirements */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/60 border border-slate-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Technologies are curated for modern enterprise performance and can be tailored to match your existing internal stack.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
