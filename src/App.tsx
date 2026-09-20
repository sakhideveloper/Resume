import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { contactInfo } from './data/portfolioData';
import { MessageSquare, ArrowUp, FileText } from 'lucide-react';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['about', 'projects', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      
      {/* Navigation Header */}
      <Header 
        onOpenResumeModal={() => setResumeModalOpen(true)} 
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResumeModal={() => setResumeModalOpen(true)} />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Printable / Formal Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      {/* Floating Action Buttons (Hidden when printing) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 no-print">
        
        {/* Quick WhatsApp Floating Button */}
        <a
          href={contactInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95 group"
          title={`Chat with ${contactInfo.name} on WhatsApp (${contactInfo.phoneRaw})`}
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp {contactInfo.phoneRaw}</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-md transition-all active:scale-95"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>

    </div>
  );
}
