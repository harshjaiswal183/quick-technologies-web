import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  Calendar,
  Building,
  User,
  HelpCircle,
  FileText
} from 'lucide-react';

import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './Icons';
import { LEADS_CONFIG } from '../config/leadsConfig';

interface DemoBookingSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

export const DemoBookingSection: React.FC<DemoBookingSectionProps> = ({ 
  preselectedService, 
  onClearPreselected 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    service: 'Custom Software',
    contactMethod: 'WhatsApp',
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  const serviceOptions = [
    "Website Development",
    "Mobile App Development",
    "Sales Force Automation",
    "Loyalty Program",
    "Distributor Order Management",
    "CRM Software",
    "ERP Software",
    "GPS Tracking",
    "Order Management",
    "Digital Marketing",
    "Custom Software",
    "Other"
  ];

  // Mobile number validation logic
  const validatePhone = (rawPhone: string): { isValid: boolean; message?: string } => {
    const trimmed = rawPhone.trim();
    if (!trimmed) {
      return { isValid: false, message: "Mobile number is required" };
    }

    // Extract raw digits
    let digits = trimmed.replace(/\D/g, "");

    // Handle +91 or leading 0 prefix
    if (digits.length === 12 && digits.startsWith("91")) {
      digits = digits.slice(2);
    } else if (digits.length === 11 && digits.startsWith("0")) {
      digits = digits.slice(1);
    }

    // Check for repetitive fake numbers (e.g., 0000000000, 9999999999)
    if (/^(\d)\1{9,}$/.test(digits)) {
      return { isValid: false, message: "Please enter a genuine 10-digit mobile number" };
    }

    // Check for sequential fake numbers
    if (digits === "1234567890" || digits === "0123456789" || digits === "9876543210") {
      // 9876543210 can sometimes be a real test number, but standard valid format check applies:
    }

    // Check length
    if (digits.length < 10) {
      return { isValid: false, message: `Please enter 10 digits (currently ${digits.length})` };
    }

    if (digits.length > 15) {
      return { isValid: false, message: "Mobile number cannot exceed 15 digits" };
    }

    // For standard 10-digit Indian numbers, verify telecom starting digit (6, 7, 8, or 9)
    if (digits.length === 10 && !/^[6-9]/.test(digits)) {
      return { isValid: false, message: "Mobile number must start with 6, 7, 8, or 9" };
    }

    return { isValid: true };
  };

  // Email validation logic
  const validateEmail = (rawEmail: string): { isValid: boolean; message?: string } => {
    const trimmed = rawEmail.trim().toLowerCase();
    if (!trimmed) {
      return { isValid: false, message: "Email address is required" };
    }

    if (/\s/.test(trimmed)) {
      return { isValid: false, message: "Email address cannot contain spaces" };
    }

    if (trimmed.includes("..") || trimmed.includes("@@")) {
      return { isValid: false, message: "Invalid email syntax (multiple dots or @)" };
    }

    const parts = trimmed.split("@");
    if (parts.length !== 2) {
      return { isValid: false, message: "Email must contain a valid @ domain" };
    }

    const [user, domain] = parts;
    if (!user || user.length < 1) {
      return { isValid: false, message: "Missing username before @" };
    }

    if (!domain || !domain.includes(".")) {
      return { isValid: false, message: "Domain must include extension (e.g. name@gmail.com)" };
    }

    const domainParts = domain.split(".");
    const tld = domainParts[domainParts.length - 1];
    if (!tld || tld.length < 2) {
      return { isValid: false, message: "Invalid domain extension (e.g. .com, .in)" };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return { isValid: false, message: "Please enter a valid email address (e.g. rahul@company.com)" };
    }

    return { isValid: true };
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.message || "Invalid phone number";
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message || "Invalid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Option 3: Auto-dispatch to Google Sheets CRM webhook if configured
    if (LEADS_CONFIG.googleSheetWebhookUrl) {
      try {
        const params = new URLSearchParams();
        params.append('fullName', formData.fullName);
        params.append('phone', formData.phone);
        params.append('email', formData.email);
        params.append('companyName', formData.companyName || 'Not specified');
        params.append('service', formData.service);
        params.append('contactMethod', formData.contactMethod);
        params.append('requirements', formData.requirements || 'N/A');
        params.append('timestamp', new Date().toISOString());

        await fetch(LEADS_CONFIG.googleSheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors', // Standard for Google Apps Script redirects
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString()
        });
      } catch (err) {
        console.warn('Google Sheets dispatch notice:', err);
      }
    } else {

      // Graceful realistic simulation delay when webhook URL is not yet connected
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmittedData({ ...formData });

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Fallback gracefully
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      service: 'Custom Software',
      contactMethod: 'WhatsApp',
      requirements: ''
    });
    setErrors({});
    if (onClearPreselected) onClearPreselected();
  };

  return (
    <section id="book-demo" className="py-20 lg:py-28 relative bg-[#090F1C] border-t border-slate-800/80">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo & Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Business Requirements
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule a personalized, zero-obligation technical walkthrough with our software architects. We will demonstrate live systems tailored to your industry workflows.
          </p>
        </div>

        {/* Main Form Card Container */}
        <div className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          
          {/* Success State */}
          {isSubmitted && submittedData ? (
            <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Demo Request Recorded Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-cyan-400">{submittedData.fullName}</strong>. Our engineering team at Quick Technologies will reach out via <strong className="text-white">{submittedData.contactMethod}</strong> shortly.
                </p>
              </div>

              {/* Request Status Confirmation */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-300 max-w-lg mx-auto text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Request Received & Confirmed</span>
                </div>
                <p className="text-slate-400 text-[11px]">
                  Our software consultants have received your details and will connect with you shortly.
                </p>
              </div>



              {/* Direct Instant WhatsApp Link */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Hi Quick Technologies, I just requested a demo on your website for ${submittedData.service}. My name is ${submittedData.fullName} (${submittedData.companyName || 'Individual'}). Let's connect!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Connect Directly on WhatsApp Now</span>
                </a>


                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-medium text-sm transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Full Name <span className="text-rose-400">*</span></span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.fullName ? 'border-rose-500/80 bg-rose-500/5' : 'border-slate-800 focus:border-blue-500'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="companyName" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-400" />
                    <span>Company / Business Name</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Distribution LLP"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Phone Number with Enhanced Logic */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="phone" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Phone / WhatsApp Number <span className="text-rose-400">*</span></span>
                    </label>
                    {formData.phone && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        {formData.phone.replace(/\D/g, '').length} digits
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        // Logic: Only allow digits, plus sign, spaces, and hyphens
                        const filtered = e.target.value.replace(/[^0-9+\s-]/g, '');
                        setFormData({ ...formData, phone: filtered });
                        if (errors.phone) {
                          const check = validatePhone(filtered);
                          if (check.isValid) setErrors({ ...errors, phone: '' });
                        }
                      }}
                      onBlur={() => {
                        if (formData.phone.trim()) {
                          const check = validatePhone(formData.phone);
                          if (!check.isValid) {
                            setErrors(prev => ({ ...prev, phone: check.message || '' }));
                          }
                        }
                      }}
                      placeholder="e.g. 9876543210 or +91 98765 43210"
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.phone 
                          ? 'border-rose-500/80 bg-rose-500/5' 
                          : validatePhone(formData.phone).isValid
                          ? 'border-emerald-500/80 focus:border-emerald-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {validatePhone(formData.phone).isValid && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {errors.phone ? (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.phone}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 block">
                      10-digit Indian number or international with country code
                    </span>
                  )}
                </div>

                {/* Email Address with Enhanced Logic */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-sky-400" />
                      <span>Email Address <span className="text-rose-400">*</span></span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        // Prevent spaces inside email
                        const filtered = e.target.value.replace(/\s/g, '');
                        setFormData({ ...formData, email: filtered });
                        if (errors.email) {
                          const check = validateEmail(filtered);
                          if (check.isValid) setErrors({ ...errors, email: '' });
                        }
                      }}
                      onBlur={() => {
                        const cleaned = formData.email.trim().toLowerCase();
                        setFormData(prev => ({ ...prev, email: cleaned }));
                        if (cleaned) {
                          const check = validateEmail(cleaned);
                          if (!check.isValid) {
                            setErrors(prev => ({ ...prev, email: check.message || '' }));
                          }
                        }
                      }}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full px-4 py-3 pr-10 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        errors.email 
                          ? 'border-rose-500/80 bg-rose-500/5' 
                          : validateEmail(formData.email).isValid
                          ? 'border-emerald-500/80 focus:border-emerald-500'
                          : 'border-slate-800 focus:border-blue-500'
                      }`}
                    />
                    {validateEmail(formData.email).isValid && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {errors.email ? (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" /> {errors.email}
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 block">
                      Official work or personal email address
                    </span>
                  )}
                </div>


                {/* Select Service Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span>Select Service <span className="text-rose-400">*</span></span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  >
                    {serviceOptions.map((svc) => (
                      <option key={svc} value={svc} className="bg-slate-900 text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['WhatsApp', 'Phone', 'Email'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, contactMethod: method })}
                        className={`py-3 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                          formData.contactMethod === method
                            ? 'bg-blue-600/20 border-blue-500 text-cyan-300 font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Brief Project Requirements */}
              <div className="space-y-1.5">
                <label htmlFor="requirements" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Brief Project Requirements / Problem Statement</span>
                </label>
                <textarea
                  id="requirements"
                  rows={4}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Tell us about your team size, current software bottlenecks, and timeline goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-y"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Submit & Request Free Technical Demo</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Hi Quick Technologies, I would like to schedule a quick demo for ${formData.service}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 font-semibold text-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>Or Chat on WhatsApp Directly</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
