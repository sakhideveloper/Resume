import { useState } from 'react';
import { contactInfo } from '../data/portfolioData';
import { useAvatar } from '../context/AvatarContext';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowRight, 
  Globe2, 
  Download, 
  Code2, 
  Layers, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const { avatarUrl } = useAvatar();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Notification Badge: Updated Location & Active Status */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Based in {contactInfo.location}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium">
            <Globe2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{contactInfo.availability}</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline, Bio, and Quick CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-700">
                  Senior Full Stack Developer
                </span>
                <span className="h-px w-12 bg-blue-200"></span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  7+ Years Exp
                </span>
              </div>
              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
                {contactInfo.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700">
                <span className="text-blue-700 font-bold">Laravel</span> &bull;{' '}
                <span className="text-indigo-700 font-bold">Drupal</span> &bull;{' '}
                <span className="text-sky-700 font-bold">Next.js</span> &bull;{' '}
                <span className="text-slate-800">Vue.js &bull; High-Scale APIs</span>
              </p>
            </div>

            {/* Professional Summary */}
            <div className="relative rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm text-slate-700 leading-relaxed text-base sm:text-lg">
              <div className="absolute top-0 left-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
                Professional Profile
              </div>
              <p className="pt-1">
                {contactInfo.summary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* WhatsApp Direct Action */}
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-emerald-600/25 transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp ({contactInfo.phoneRaw})</span>
              </a>

              {/* View Projects Anchor */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm sm:text-base transition-all active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View CV modal */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-medium text-sm sm:text-base transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Preview & Download CV</span>
              </button>
            </div>

            {/* Direct Contact Pills with 1-Click Copy & Visit */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Direct Contact & Profiles
              </p>
              <div className="flex flex-wrap gap-2.5">
                
                {/* WhatsApp / Phone */}
                <div className="inline-flex items-center rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium shadow-2xs overflow-hidden">
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-800 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>{contactInfo.phoneRaw}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phoneRaw, 'phone')}
                    className="px-2 py-2 border-l border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                    title="Copy phone/whatsapp number"
                  >
                    {copiedItem === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="inline-flex items-center rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium shadow-2xs overflow-hidden">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-800 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="px-2 py-2 border-l border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                    title="Copy email address"
                  >
                    {copiedItem === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={contactInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-700" />
                  <span>linkedin.com/in/sakhawat-kamran-702ab9163</span>
                </a>

                {/* GitHub */}
                <a
                  href={contactInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 hover:text-slate-950 hover:border-slate-400 hover:bg-slate-100/60 shadow-2xs transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-900" />
                  <span>github.com/sakhideveloper</span>
                </a>

                {/* Location */}
                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Credentials & Highlights Card */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Developer Snapshot Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-5">
              
              {/* Profile Header in Card with Prominently Sized Photo */}
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative group">
                  <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-3 border-blue-600/30 shadow-xl shadow-blue-900/10 bg-slate-900 mx-auto relative">
                    <img
                      src={avatarUrl}
                      alt={contactInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="absolute bottom-1 right-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-md border-2 border-white" title="Available for Remote Work">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Available
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-xl sm:text-2xl leading-snug">
                    {contactInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-700 font-bold mt-0.5">
                    Sr. Full Stack Engineer
                  </p>
                  <p className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Lahore, Punjab, Pakistan</span>
                  </p>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-blue-700">7+</div>
                  <div className="text-xs text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-emerald-700">25+</div>
                  <div className="text-xs text-slate-600 font-medium">Delivered Projects</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-indigo-700">100%</div>
                  <div className="text-xs text-slate-600 font-medium">Remote Delivery</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-extrabold text-amber-700">Global</div>
                  <div className="text-xs text-slate-600 font-medium">US, EU, Ghana, PK</div>
                </div>
              </div>

              {/* Core Technologies summary */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Primary Stack Focus
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Laravel', 'Drupal 9/10/11', 'Next.js', 'PHP 8+', 'Vue.js', 'React', 'CodeIgniter', 'MySQL', 'Redis', 'Docker', 'AWS'].map(tech => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Knowledgeable & Interested to Work</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Django', 'Flask'].map(tech => (
                      <span 
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Snippet */}
              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/80 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900">BS Software Engineering</span>
                  <span className="text-[11px] font-semibold text-blue-700">2017</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  University of Sargodha, Punjab
                </p>
              </div>

              {/* WhatsApp Fast Connect Banner */}
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Quick Chat on WhatsApp</div>
                    <div className="text-xs text-emerald-700 font-medium">{contactInfo.phoneRaw}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
