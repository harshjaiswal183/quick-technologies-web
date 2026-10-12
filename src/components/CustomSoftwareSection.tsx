import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Compass, 
  Code, 
  CheckCheck, 
  Headphones, 
  ArrowRight, 
  MessageSquare,
  Zap
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CustomSoftwareProps {
  onOpenDemoModal?: () => void;
}

export const CustomSoftwareSection: React.FC<CustomSoftwareProps> = ({ onOpenDemoModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Understand Your Requirements",
      desc: "We analyze your exact business workflows, manual bottlenecks, team hierarchy, and data integration points.",
      icon: <Search className="w-5 h-5 text-blue-400" />,
      detail: "Deep operational audit, identifying repetitive manual tasks and architecting custom automation."
    },
    {
      num: "02",
      title: "Plan the Solution",
      desc: "Creating data schemas, architecture diagrams, technical specifications, and timeline milestone roadmaps.",
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      detail: "Cloud database schema design, REST/GraphQL API specifications, and modular microservices."
    },
    {
      num: "03",
      title: "Design & Develop",
      desc: "Translating wireframes into high-fidelity Figma UI/UX prototypes and coding modular, scalable software.",
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      detail: "Pixel-perfect frontend with responsive UI, resilient backend microservices, and clean documentation."
    },
    {
      num: "04",
      title: "Test & Deploy",
      desc: "Comprehensive automated and manual QA, load stress testing, security validation, and zero-downtime deployment.",
      icon: <CheckCheck className="w-5 h-5 text-emerald-400" />,
      detail: "Multi-device compatibility, geofence accuracy testing, and seamless cloud server rollout."
    },
    {
      num: "05",
      title: "Support & Improve",
      desc: "Continuous proactive server monitoring, version upgrades, security patches, and iterative feature scaling.",
      icon: <Headphones className="w-5 h-5 text-purple-400" />,
      detail: "Dedicated technical point-of-contact, real-time bug tracking, and long-term advisory."
    }
  ];

  return (
    <section id="custom-solutions" className="py-20 lg:py-28 relative bg-slate-50 border-t border-slate-200/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailor-Made Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software Built Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Your Business
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Every business works differently. We create customized software solutions that match your workflows, business goals and growth plans.
          </p>
        </div>

        {/* Left Column: 5 Process Steps */}
          <div className="lg:col-span-12 space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-slate-100 border-blue-500/50 shadow-lg shadow-blue-500/10 -translate-y-0.5'
                    : 'bg-slate-100/40 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold ${
                    activeStep === index
                      ? 'bg-blue-600 text-slate-900 shadow-md shadow-blue-600/30'
                      : 'bg-slate-200 text-slate-500'
                  }`}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold ${activeStep === index ? 'text-slate-900' : 'text-slate-700'}`}>
                        {step.title}
                      </h3>
                      {step.icon}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                    {activeStep === index && (
                      <div className="mt-3 pt-3 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-blue-600">
                        <Zap className="w-3 h-3 text-cyan-400" />
                        <span>{step.detail}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:scale-[1.02] transition-all"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/40 font-medium text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>

        </div>

      </div>
    </section>
  );
};
