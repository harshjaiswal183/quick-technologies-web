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
  Layers,
  Database,
  Smartphone,
  Shield,
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
    <section id="custom-solutions" className="py-20 lg:py-28 relative bg-[#090F1C] border-t border-slate-800/80">
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Software Built Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Your Business
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every business works differently. We create customized software solutions that match your workflows, business goals and growth plans.
          </p>
        </div>

        {/* 2-Column Split: Interactive Process Steps & Workflow Mockup Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 5 Process Steps */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/10 -translate-y-0.5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold ${
                    activeStep === index
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold ${activeStep === index ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h3>
                      {step.icon}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                    {activeStep === index && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-cyan-300">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 font-medium text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Visualizer & Workflow Illustration */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-blue-600/10 text-cyan-400 text-xs font-mono font-medium rounded-bl-xl border-l border-b border-blue-500/20">
                Custom Architecture Blueprint
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Full-Stack Modular Ecosystem</h4>
                    <p className="text-xs text-slate-400">Zero vendor lock-in. 100% Client Code Ownership.</p>
                  </div>
                </div>

                {/* Workflow Architecture Diagram */}
                <div className="space-y-3">
                  {/* Layer 1: Client Interfaces */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                        Client Touchpoints
                      </span>
                      <span className="text-[10px] text-cyan-400 font-mono">Mobile App • Web Portal • PWA</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                      <div className="p-2 rounded bg-slate-800 text-slate-300">Field Exec App</div>
                      <div className="p-2 rounded bg-slate-800 text-slate-300">Distributor Portal</div>
                      <div className="p-2 rounded bg-slate-800 text-slate-300">Admin Dashboard</div>
                    </div>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    ↓ Secure Encrypted TLS 1.3 / REST API ↓
                  </div>

                  {/* Layer 2: Business Logic Engine */}
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/50">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        Quick Technologies Custom Backend Engine
                      </span>
                      <span className="text-[10px] text-blue-300 font-mono">Node.js • Python • Microservices</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
                      <div className="p-1.5 rounded bg-blue-900/40 text-blue-200">Beat Optimizer</div>
                      <div className="p-1.5 rounded bg-blue-900/40 text-blue-200">QR Engine</div>
                      <div className="p-1.5 rounded bg-blue-900/40 text-blue-200">Order Routing</div>
                      <div className="p-1.5 rounded bg-blue-900/40 text-blue-200">Audit Logs</div>
                    </div>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    ↓ Real-Time Read/Write Replication ↓
                  </div>

                  {/* Layer 3: Enterprise Data Layer */}
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-emerald-400" />
                        Storage & External Integrations
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">PostgreSQL • AWS S3 • Redis</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 rounded bg-slate-800 text-slate-300">Tally / ERP Sync</div>
                      <div className="p-2 rounded bg-slate-800 text-slate-300">Payment Gateways</div>
                      <div className="p-2 rounded bg-slate-800 text-slate-300">WhatsApp Cloud API</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Enterprise grade security: Role-based access, JWT session tokens, and regular automated cloud backups.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
