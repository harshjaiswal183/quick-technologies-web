import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  ShieldAlert
} from 'lucide-react';
import { PORTFOLIO_PROJECTS, type ProjectItem } from '../data/companyData';

interface PortfolioSectionProps {
  onSelectProjectForDemo?: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForDemo }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Sales Force Automation',
    'Loyalty Management',
    'Distributor Management',
    'GPS Tracking',
    'CRM & ERP',
    'Web Development'
  ];

  const filteredProjects = selectedFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-white">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Concept Previews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Software{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Prototypes & Systems
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Explore functional system architectures and UI mockups engineered for sales, logistics, distributor networks, and custom enterprise portals.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-blue-600 text-slate-900 shadow-lg shadow-blue-600/30'
                  : 'bg-slate-100/80 text-slate-500 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-100/80 border border-slate-200 hover:border-blue-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-1"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className={`h-48 relative bg-gradient-to-br ${project.imagePlaceholderColor} p-5 flex flex-col justify-between border-b border-slate-200`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-100/90 text-cyan-400 border border-slate-300/80 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {project.status}
                    </span>
                  </div>

                  {/* Mockup Preview Graphic */}
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-200 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
                      <span className="font-semibold text-slate-900 truncate">{project.title}</span>
                      <span className="text-[10px] text-emerald-400 font-mono flex-shrink-0 ml-2">{project.metrics}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-4/5" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 border border-slate-300/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectProjectForDemo) {
                        onSelectProjectForDemo(project.title);
                      }
                      const el = document.getElementById('book-demo');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-slate-900 border border-blue-500/30 text-xs font-medium transition-all"
                  >
                    Request Similar Solution
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Concept Demo Notice */}
        <div className="mt-12 p-4 rounded-xl bg-slate-100/60 border border-slate-200 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-500 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Sample projects displayed as concept architectural demos. Client proprietary IPs are protected by mutual NDAs.</span>
          </div>
        </div>

      </div>

      {/* Project Architecture Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white border border-slate-300 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">{activeProjectModal.category}</span>
                <h3 className="text-xl font-bold text-slate-900">{activeProjectModal.title}</h3>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {activeProjectModal.status}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {activeProjectModal.description}
            </p>

            <div className="space-y-3 mb-6 bg-slate-100 p-4 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-slate-500">Benchmark Performance Metric:</div>
              <div className="text-base font-bold text-emerald-400">{activeProjectModal.metrics}</div>
              <div className="text-xs text-slate-500">Technologies integrated:</div>
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.techStack.map((tech, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-200 text-cyan-300 border border-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (onSelectProjectForDemo) {
                    onSelectProjectForDemo(activeProjectModal.title);
                  }
                  setActiveProjectModal(null);
                  const el = document.getElementById('book-demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-900 font-semibold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Request Custom Demo for This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-3 rounded-xl bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-300 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
