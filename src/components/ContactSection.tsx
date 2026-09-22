import { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Globe2, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState<string>(
    "Hi Sakhawat, I came across your portfolio and would like to discuss a software development opportunity."
  );

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const getWhatsAppHref = () => {
    const encoded = encodeURIComponent(customMessage);
    return `https://wa.me/923236351817?text=${encoded}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Let's Build Something Scalable Together
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Available for senior full-stack roles, custom Laravel/Drupal architectures, Next.js integrations, and remote contracts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct WhatsApp Interactive Messenger */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 shadow-md">
            
            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-sm flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    Direct WhatsApp Connect
                  </h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Fast Response on WhatsApp: {contactInfo.phoneRaw}
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                Active Now
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <label htmlFor="quick-whatsapp-msg" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Compose WhatsApp Message (Opens WhatsApp directly)
              </label>
              
              <textarea
                id="quick-whatsapp-msg"
                rows={3}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full rounded-xl bg-slate-800/80 border border-slate-700 p-3.5 text-sm text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="Type your message..."
              />

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="text-slate-400 self-center">Quick templates:</span>
                <button
                  type="button"
                  onClick={() => setCustomMessage("Hi Sakhawat, I have a Laravel/PHP project and would like to discuss working together.")}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  Laravel Project
                </button>
                <button
                  type="button"
                  onClick={() => setCustomMessage("Hello Sakhawat, we have an open Senior Full Stack / Next.js remote role and would love to interview you.")}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  Job Opportunity
                </button>
                <button
                  type="button"
                  onClick={() => setCustomMessage("Hi Sakhawat, let's schedule a call to review your availability for a contract.")}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                >
                  Schedule Call
                </button>
              </div>

              <div className="pt-3">
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-emerald-600/30 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp (+92 323 6351817)</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                Timezone: PKT (UTC+5) &bull; Remote Worldwide
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Contact Details
              </span>
            </div>

          </div>

          {/* Right Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone / WhatsApp
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {contactInfo.phoneRaw} ({contactInfo.phone})
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  title="Open WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleCopy(contactInfo.phoneRaw, 'phone')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Copy Phone"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Direct Email
                  </div>
                  <div className="text-base font-bold text-slate-900 break-all">
                    {contactInfo.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  title="Send Email"
                >
                  <Send className="w-4 h-4" />
                </a>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                  title="Copy Email"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Current Location
                </div>
                <div className="text-base font-bold text-slate-900">
                  {contactInfo.location}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Available for Remote Worldwide & Relocation
                </div>
              </div>
            </div>

            {/* Profiles Links */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 text-slate-800 transition-all flex items-center gap-2.5 shadow-2xs group"
              >
                <Linkedin className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">LinkedIn Profile</div>
                  <div className="text-[11px] text-slate-500 truncate">sakhawat-kamran</div>
                </div>
              </a>

              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-100/60 text-slate-800 transition-all flex items-center gap-2.5 shadow-2xs group"
              >
                <Github className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-900 truncate">GitHub Profile</div>
                  <div className="text-[11px] text-slate-500 truncate">sakhideveloper</div>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
