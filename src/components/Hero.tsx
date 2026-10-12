import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShoppingCart, 
  Award, 
  MapPin, 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Users
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './Icons';

interface HeroProps {
  onOpenDemoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'sales' | 'loyalty' | 'gps' | 'orders'>('sales');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elPos - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient Meshes & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[400px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-medium tracking-wide shadow-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Your Technology Growth Partner</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400 font-normal">India</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
                Smart Software Solutions
              </span>{' '}
              for Growing Businesses
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From custom web and mobile applications to sales automation, loyalty programs, ERP, CRM and digital marketing, we help businesses streamline operations and accelerate growth.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => {
                  if (onOpenDemoModal) {
                    onOpenDemoModal();
                  } else {
                    scrollToSection('book-demo');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-medium text-sm sm:text-base border border-slate-700/80 transition-all hover:border-slate-600"
              >
                <span>Explore Our Services</span>
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-medium text-sm border border-emerald-500/30 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span className="sm:inline">Chat on WhatsApp</span>
              </a>
            </div>


            {/* Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>{COMPANY_INFO.experienceYears}</span>
                  <span className="text-cyan-400 text-sm font-semibold">Years</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Industry Experience</div>
              </div>

              <div className="text-center lg:text-left border-x border-slate-800/80 px-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                  <span>{COMPANY_INFO.clientsCount}</span>
                  <span className="text-cyan-400 text-sm font-semibold">Clients</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Growing Network</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center lg:justify-start gap-1">
                  <span className="text-emerald-400">100%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Custom-Built Solutions</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive SaaS Software Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

            {/* Dashboard Container */}
            <div className="relative rounded-2xl bg-[#0F172A]/90 border border-slate-800/90 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0B1220] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 hidden sm:inline">
                    quicktech-cloud-suite.v2.4
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Live Cloud Sync
                  </span>
                </div>
              </div>

              {/* Mini Module Navigation Pills */}
              <div className="p-3 bg-slate-900/60 border-b border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
                <button
                  onClick={() => setActiveTab('sales')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'sales'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Sales Automation</span>
                </button>

                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'orders'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Live Orders</span>
                </button>

                <button
                  onClick={() => setActiveTab('loyalty')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'loyalty'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Customer Loyalty</span>
                </button>

                <button
                  onClick={() => setActiveTab('gps')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'gps'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GPS Tracking</span>
                </button>
              </div>

              {/* Main Interactive Screen Content */}
              <div className="p-4 sm:p-5 space-y-4">
                
                {/* Metric Summary Top Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-medium">Monthly Revenue</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">₹14.82 Lakh</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> +18.4% MoM
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-medium">Active Outlets</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">1,248</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
                      <Users className="w-2.5 h-2.5" /> 98.2% Active
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-medium">Field Executives</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">34 On Duty</div>
                    <div className="text-[10px] text-cyan-400 flex items-center gap-0.5 mt-0.5">
                      <Activity className="w-2.5 h-2.5" /> 100% Geofenced
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-medium">Orders Today</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">286 Pcs</div>
                    <div className="text-[10px] text-blue-400 flex items-center gap-0.5 mt-0.5">
                      <Zap className="w-2.5 h-2.5" /> Dispatching
                    </div>
                  </div>
                </div>

                {/* Dynamic Screen Visual Based on Active Tab */}
                {activeTab === 'sales' && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-semibold text-white">Sales Force Beat Execution & Target Velocity</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        88% Target Achieved
                      </span>
                    </div>

                    {/* Simulated Interactive Bar Graph */}
                    <div className="h-28 flex items-end justify-between gap-2 pt-4 px-1 border-b border-slate-800">
                      {[
                        { day: 'Mon', h: '60%', val: '₹1.8L' },
                        { day: 'Tue', h: '82%', val: '₹2.4L' },
                        { day: 'Wed', h: '75%', val: '₹2.1L' },
                        { day: 'Thu', h: '95%', val: '₹3.0L' },
                        { day: 'Fri', h: '88%', val: '₹2.7L' },
                        { day: 'Sat', h: '68%', val: '₹2.0L' },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {bar.val}
                          </span>
                          <div
                            style={{ height: bar.h }}
                            className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 group-hover:from-blue-500 group-hover:to-cyan-300 transition-all duration-300"
                          />
                          <span className="text-[10px] text-slate-400">{bar.day}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Real-time Retailer GPS Check-ins Verified</span>
                      </div>
                      <span className="text-slate-300 font-mono">312 Outlets Visited Today</span>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Live Distributor Order Stream</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Auto-Routing Active
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: 'ORD-8941', dealer: 'Shree Balaji Traders (Delhi)', amount: '₹84,200', status: 'Dispatched', time: '2m ago' },
                        { id: 'ORD-8940', dealer: 'Apex Distribution Hub', amount: '₹1,42,000', status: 'Packing', time: '8m ago' },
                        { id: 'ORD-8939', dealer: 'Kalyan Enterprises', amount: '₹36,500', status: 'Approved', time: '14m ago' },
                      ].map((ord, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs">
                          <div>
                            <div className="font-semibold text-slate-200">{ord.dealer}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{ord.id} • {ord.time}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-white">{ord.amount}</div>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              {ord.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'loyalty' && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Retailer QR Rewards & Scan Engine</span>
                      <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                        Instant UPI Payouts
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <div className="text-slate-400 text-[10px]">Points Scanned Today</div>
                        <div className="text-lg font-bold text-cyan-400">48,250 pts</div>
                        <div className="text-[10px] text-slate-400">+312 unique retailers</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60">
                        <div className="text-slate-400 text-[10px]">Cashback Redeemed</div>
                        <div className="text-lg font-bold text-emerald-400">₹24,125</div>
                        <div className="text-[10px] text-slate-400">Zero fraud scan rate</div>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-800/40 text-[11px] text-slate-300 flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>Encrypted QR codes prevent counterfeit products & drive repeat sales.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'gps' && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Field Rep Telematics & Route Monitoring</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Live 5s GPS Ping
                      </span>
                    </div>
                    {/* Simulated Map View */}
                    <div className="h-28 rounded-lg bg-slate-950/90 border border-slate-800 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div className="relative z-10 flex items-center gap-3">
                        <div className="p-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 animate-bounce">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-white">Route: Delhi Central Beat #4</div>
                          <div className="text-[10px] text-slate-400">14 Outlets Visited • 18.4 km Logged</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Battery Optimization: Level 3 Active</span>
                      <span className="text-emerald-400">Geofence accuracy: ±4 meters</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Subtle Status Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>ISO 27001 Security Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Architecture:</span>
                  <span className="text-cyan-400 font-mono font-medium">Modular SaaS Engine</span>
                </div>
              </div>

            </div>

            {/* Floating Quick Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 p-3 rounded-xl bg-[#0B1220]/95 border border-blue-500/30 shadow-xl backdrop-blur-md items-center gap-2.5 animate-float-slow">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Fullstack Delivery</div>
                <div className="text-[10px] text-slate-400">Web, Mobile & Automation</div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-[#0B1220]/95 border border-cyan-500/30 shadow-xl backdrop-blur-md items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">Fast Time-to-Market</div>
                <div className="text-[10px] text-slate-400">Agile sprints & fast releases</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
