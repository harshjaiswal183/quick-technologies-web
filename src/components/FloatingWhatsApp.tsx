import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './Icons';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || 'Hi Quick Technologies, I want to discuss a software solution.';
    const finalUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(textToSend)}`;
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Mini WhatsApp Chat Popup Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl bg-[#0B132B] border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-1.5 shadow-inner">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-700" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold tracking-tight">Quick Technologies</h4>
                  <span className="bg-emerald-800/80 text-emerald-200 text-[9px] px-1.5 py-0.5 rounded font-medium">WhatsApp</span>
                </div>
                <p className="text-[11px] text-emerald-100/90 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online now</span> • <span>Instant Technical Support</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp Chat Popup"
              className="p-1.5 rounded-lg hover:bg-white/20 text-white/90 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#090F1F] space-y-3 text-xs">
            <div className="p-3.5 rounded-2xl rounded-tl-sm bg-slate-800/90 text-slate-100 border border-slate-700/60 shadow-sm max-w-[90%]">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold mb-1">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quick Technologies Team</span>
              </div>
              <p className="text-slate-200">
                Hi there! 👋 Welcome to Quick Technologies.
              </p>
              <p className="mt-1 text-slate-300">
                Need a demo or quote for Custom Software, SFA, Loyalty Program, or Mobile Apps?
              </p>
              <span className="text-[10px] text-slate-400 block mt-1.5 text-right">Just now</span>
            </div>

            <div className="text-[10px] text-slate-400 text-center bg-slate-900/60 py-1 px-2 rounded-lg border border-slate-800">
              Direct connection with our development team (+91 9650652635)
            </div>
          </div>

          {/* Quick Pre-filled Questions */}
          <div className="p-2.5 bg-[#070C16] border-t border-slate-800/80 flex flex-wrap gap-1.5">
            {[
              "Book a Free Demo",
              "SFA Software Pricing",
              "Custom Web & App Quote"
            ].map((quickText, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const url = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Hi Quick Technologies, I want to ask about: ${quickText}`
                  )}`;
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="text-[11px] px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-emerald-600 hover:text-white text-slate-300 border border-slate-700/80 hover:border-emerald-500 transition-all flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3 h-3 text-emerald-400" />
                <span>{quickText}</span>
              </button>
            ))}
          </div>

          {/* Message input */}
          <form onSubmit={handleSendCustomMessage} className="p-3 bg-[#070C16] border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message for WhatsApp..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center shadow-lg shadow-emerald-600/30"
              title="Send to WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Main Button */}
      <div className="flex items-center gap-3">
        {/* Subtle Tooltip when closed */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 border border-emerald-500/40 text-xs font-semibold text-slate-100 shadow-2xl backdrop-blur-md hover:border-emerald-400 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp chat widget"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-600 via-[#25D366] to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/70 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#0B1220]" />
          </span>

          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow" />
        </button>
      </div>

    </div>
  );
};

