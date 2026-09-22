import { contactInfo } from '../data/portfolioData';
import { useAvatar } from '../context/AvatarContext';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Linkedin, 
  Github, 
  ArrowUp,
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export default function Footer({ onOpenResumeModal }: FooterProps) {
  const { avatarUrl } = useAvatar();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-700/80 shrink-0 bg-slate-900">
                <img
                  src={avatarUrl}
                  alt={contactInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg">{contactInfo.name}</div>
                <div className="text-blue-400 text-xs font-semibold">{contactInfo.headline}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Senior Full Stack Engineer with 7+ years of experience delivering robust web platforms in PHP, Laravel, Next.js, and Drupal for international clients.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium pt-1">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{contactInfo.location}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400">Remote Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About & Summary</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects Showcase</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Work Experience</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact / WhatsApp</a></li>
              <li>
                <button onClick={onOpenResumeModal} className="hover:text-blue-400 text-slate-300 font-semibold transition-colors">
                  View Printable CV
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact & Links
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href={contactInfo.whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: {contactInfo.phoneRaw}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={contactInfo.linkedinUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors truncate"
                >
                  <Linkedin className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>linkedin.com/in/sakhawat-kamran-702ab9163</span>
                </a>
              </li>
              <li>
                <a 
                  href={contactInfo.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors truncate"
                >
                  <Github className="w-4 h-4 text-slate-300 shrink-0" />
                  <span>github.com/sakhideveloper</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className="text-[11px] uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
                Recently Completed Live Sites
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a 
                  href="https://financier24.nl/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 inline-flex items-center gap-1"
                >
                  <span>financier24.nl</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://gratisgenieten.nl/en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 inline-flex items-center gap-1"
                >
                  <span>gratisgenieten.nl/en</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
