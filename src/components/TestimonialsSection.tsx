import React, { useState } from 'react';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 relative bg-[#070C16] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Perspectives</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Client Feedback &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Partnership Experiences
            </span>
          </h2>

          <p className="text-base text-slate-300">
            Read representative feedback and preview perspectives on our software delivery and communication.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="absolute top-8 right-8 text-blue-500/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-medium leading-relaxed italic">
              "{current.quote}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-base shadow-md">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{current.name}</h4>
                  <p className="text-xs text-cyan-400">{current.role}</p>
                  <p className="text-xs text-slate-400">{current.company}</p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-2">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </div>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Concept Notice */}
        <div className="mt-8 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-center max-w-xl mx-auto">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>Sample content shown for UI preview. Replace with client verified case studies upon contract approval.</span>
          </p>
        </div>

      </div>
    </section>
  );
};
