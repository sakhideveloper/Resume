import { useState, useRef, useEffect } from 'react';
import { contactInfo, experiences, skillCategories, educationHistory, projects } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageSquare, 
  ExternalLink,
  CheckCircle2,
  Calendar,
  Maximize2,
  Minimize2,
  Loader2,
  Sparkles
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isFullWidth, setIsFullWidth] = useState(true);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Direct PDF generation and download using jsPDF + html2canvas
  const handleDownloadPdf = async () => {
    if (!resumeRef.current) {
      handlePrint();
      return;
    }

    try {
      setIsGeneratingPdf(true);
      setPdfSuccess(false);

      const element = resumeRef.current;

      // Preload images to guarantee rendering in PDF canvas
      const images = element.getElementsByTagName('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve(true);
          return new Promise(resolve => {
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
          });
        })
      );

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        ignoreElements: (el) => el.classList?.contains('no-print'),
        onclone: (clonedDoc) => {
          const target = clonedDoc.getElementById('printable-resume-body');
          if (target) {
            target.style.width = '1024px';
            target.style.maxWidth = '1024px';
            target.style.borderRadius = '0px';
            target.style.boxShadow = 'none';
          }
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let pageIndex = 0;

      while (heightLeft > 2) {
        if (pageIndex > 0) {
          pdf.addPage();
        }
        const yOffset = -(pageIndex * pageHeight);
        pdf.addImage(imgData, 'JPEG', 0, yOffset, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
        pageIndex++;
      }

      pdf.save('Sakhawat_Kamran_Senior_Full_Stack_Developer_Resume.pdf');
      setPdfSuccess(true);
      setTimeout(() => setPdfSuccess(false), 4000);
    } catch (err) {
      console.error('Error generating PDF via canvas, falling back to print dialog:', err);
      handlePrint();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Browser Print / Save as PDF dialog
  const handlePrint = () => {
    const previousTitle = document.title;
    document.title = 'Sakhawat_Kamran_Senior_Full_Stack_Developer_Resume';
    window.print();
    setTimeout(() => {
      document.title = previousTitle;
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex flex-col items-center print:p-0 print:bg-white print:static print:overflow-visible"
      onClick={(e) => {
        // If clicking outside the main card container, close
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      
      {/* Top Sticky Control Bar (Hidden on print) */}
      <header className="no-print sticky top-0 z-30 w-full bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 px-4 sm:px-6 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Title & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              CV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white">
                  Sakhawat Kamran — Resume Preview
                </span>
                <span className="hidden sm:inline-flex text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  Lahore, PK &bull; Remote Ready
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Press <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 border border-slate-700">ESC</kbd> or click Close to exit preview
              </p>
            </div>
          </div>

          {/* Right: Actions (Download PDF, Print, Fullscreen toggle, Close) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* View Width Mode Toggle (Full Width vs A4 Page) */}
            <button
              onClick={() => setIsFullWidth(!isFullWidth)}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              title={isFullWidth ? "Switch to standard page width" : "Expand to full width"}
            >
              {isFullWidth ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Standard Width</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full Width</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              title="Open browser print / Save as PDF"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">Print CV</span>
            </button>

            {/* Direct Download PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold shadow-md transition-all active:scale-95 ${
                pdfSuccess 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
              title="Download clean PDF file directly"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Generating PDF...</span>
                </>
              ) : pdfSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-white" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold shadow-sm transition-all active:scale-95"
              title="Close resume preview"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
              <span>Close</span>
            </button>

          </div>

        </div>
      </header>

      {/* Main Document Wrapper */}
      <div className="w-full py-6 sm:py-8 px-2 sm:px-4 md:px-6 flex justify-center print:p-0">
        
        {/* Document Canvas */}
        <div 
          className={`relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 print:border-none print:shadow-none print:w-full print:max-w-none print:rounded-none ${
            isFullWidth ? 'w-full max-w-6xl' : 'w-full max-w-4xl'
          }`}
        >
          
          {/* Resume Body */}
          <div 
            id="printable-resume-body"
            ref={resumeRef}
            className="p-6 sm:p-10 text-slate-800 text-sm leading-normal bg-white print:p-0"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar Column (35% / 4 cols) */}
              <div className="md:col-span-4 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl print:bg-slate-900 print:text-white space-y-6">
                
                {/* Profile Header */}
                <div className="flex flex-col items-center text-center pb-2">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-black/40 border border-slate-700">
                    SA
                  </div>

                  <h1 className="text-xl font-extrabold tracking-tight mt-3 text-white uppercase">
                    {contactInfo.name}
                  </h1>
                  <p className="text-xs font-semibold text-blue-400 mt-0.5">
                    Senior Full Stack Developer
                  </p>
                </div>

                {/* Contact Details List */}
                <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
                  
                  {/* Email */}
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline text-slate-200 truncate">
                      {contactInfo.email}
                    </a>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={contactInfo.whatsappLink} className="hover:underline text-slate-200 font-medium">
                      {contactInfo.phoneRaw} (WhatsApp)
                    </a>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">
                      {contactInfo.location}
                    </span>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <a 
                      href={contactInfo.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline text-slate-200 truncate"
                    >
                      {contactInfo.linkedin}
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300 shrink-0" />
                    <a 
                      href={contactInfo.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline text-slate-200 truncate"
                    >
                      {contactInfo.github}
                    </a>
                  </div>

                </div>

                {/* Skills Section on Sidebar */}
                <div className="space-y-4 pt-4 border-t border-slate-800">
                  <div className="text-xs font-bold tracking-wider text-blue-400 uppercase flex items-center gap-1.5">
                    <span>Skills Matrix</span>
                  </div>

                  {/* Backend */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Backend
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['PHP', 'Laravel', 'CodeIgniter', 'Drupal 9/10/11', 'RESTful API', 'GraphQL', 'MySQL', 'NoSQL', 'Redis', 'Stripe', 'Twilio'].map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Frontend
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['JavaScript (ES6+)', 'Vue.js', 'React.js', 'Next.js', 'HTML5', 'CSS3/SCSS', 'Tailwind CSS', 'Bootstrap', 'jQuery'].map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Knowledgeable & Interested to Work */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1.5 flex items-center justify-between">
                      <span>Interested to Work</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">Knowledgeable</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'Django', 'Flask'].map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-700/60 text-[11px] text-emerald-200 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {['Git', 'GitHub', 'Docker', 'Composer', 'NPM', 'Postman', 'VS Code', 'Linux', 'CI/CD', 'AWS'].map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Strengths */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Core Strengths
                    </div>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      <li>&bull; Full Stack Web Development (PHP, JS, Next.js)</li>
                      <li>&bull; Drupal Custom Module & Theme Dev</li>
                      <li>&bull; Headless CMS with Next.js Integration</li>
                      <li>&bull; RESTful API & Third-party Integrations</li>
                      <li>&bull; Payment Gateway (Stripe), Twilio, Google APIs</li>
                      <li>&bull; Database Design & Optimization</li>
                      <li>&bull; Agile Development & Remote Delivery</li>
                    </ul>
                  </div>

                </div>

                {/* Education */}
                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="text-xs font-bold tracking-wider text-blue-400 uppercase">
                    Education
                  </div>
                  {educationHistory.map((edu, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-slate-100">{edu.institution}</div>
                      <div className="text-blue-300 font-medium">{edu.degree}</div>
                      <div className="text-slate-400 text-[11px]">{edu.year} &bull; {edu.location}</div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Main Column (65% / 8 cols) */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Main Header Banner */}
                <div className="border-b-2 border-slate-900 pb-4">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase">
                    {contactInfo.name}
                  </h1>
                  <div className="mt-1.5 inline-block px-3 py-1 bg-blue-600 text-white font-bold text-xs tracking-wider uppercase rounded-sm">
                    SENIOR FULL STACK DEVELOPER | LARAVEL | DRUPAL | NEXT.JS
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-xs font-black tracking-wider uppercase text-slate-900 flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    Professional Summary
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {contactInfo.summary}
                  </p>
                </div>

                {/* Key Projects (including newly completed) */}
                <div>
                  <h2 className="text-xs font-black tracking-wider uppercase text-slate-900 flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    Key Projects & Recent Deliverables
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    
                    {/* Financier24 */}
                    <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/50">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span className="flex items-center gap-1">
                          &gt; Financier24 (Netherlands)
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white font-semibold">
                          Recent
                        </span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Financial advisory portal and business loan workflow system.
                      </p>
                      <a href="https://financier24.nl/" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline mt-1 inline-block">
                        financier24.nl &rarr;
                      </a>
                    </div>

                    {/* Gratis Genieten */}
                    <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/50">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span className="flex items-center gap-1">
                          &gt; Gratis Genieten (Netherlands)
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white font-semibold">
                          Recent
                        </span>
                      </div>
                      <p className="text-slate-600 mt-1">
                        Bilingual leisure discovery platform for experiences & offers.
                      </p>
                      <a href="https://gratisgenieten.nl/en" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline mt-1 inline-block">
                        gratisgenieten.nl/en &rarr;
                      </a>
                    </div>

                    {/* Helio GreenTech */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="font-bold text-slate-900">&gt; Helio GreenTech (USA)</div>
                      <p className="text-slate-600 mt-1">
                        Solar panel proposal system using OpenSolar API, billing and CRM modules. (Laravel)
                      </p>
                    </div>

                    {/* Sheltermartgh */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="font-bold text-slate-900">&gt; Sheltermartgh (Ghana)</div>
                      <p className="text-slate-600 mt-1">
                        Real estate platform for property listings, agents, and clients. (sheltermartgh.com, Laravel)
                      </p>
                    </div>

                    {/* GOTOMA */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="font-bold text-slate-900">&gt; GOTOMA (Webforest)</div>
                      <p className="text-slate-600 mt-1">
                        E-commerce platform with Stripe, Twilio and Google APIs integrations. (gotoma.com, Laravel)
                      </p>
                    </div>

                    {/* EESTONE */}
                    <div className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                      <div className="font-bold text-slate-900">&gt; EESTONE</div>
                      <p className="text-slate-600 mt-1">
                        Social media application with real-time features and messaging. (Laravel)
                      </p>
                    </div>

                  </div>
                </div>

                {/* Professional Experience */}
                <div className="space-y-4">
                  <h2 className="text-xs font-black tracking-wider uppercase text-slate-900 flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    Professional Experience
                  </h2>

                  <div className="space-y-4">
                    {experiences.map((exp) => (
                      <div key={exp.id} className="text-xs space-y-1 pb-3 border-b border-slate-100 last:border-0">
                        <div className="flex flex-wrap items-center justify-between font-bold text-slate-900 text-sm">
                          <span>
                            {exp.role} <span className="text-blue-700 font-semibold">| {exp.company}</span>
                          </span>
                          <span className="text-xs font-semibold text-slate-500">
                            {exp.period}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">
                          {exp.location}
                        </div>
                        <ul className="mt-1 space-y-1 text-slate-600 list-disc list-inside">
                          {exp.points.map((p, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Notice */}
                <div className="pt-3 border-t border-slate-200 text-center text-xs font-bold text-slate-700">
                  Available for Remote Opportunities Worldwide
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Action Footer inside document (Hidden on print) */}
          <div className="no-print p-4 sm:p-6 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-600 font-medium">
              Ready to download or print your customized CV?
            </div>
            
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print</span>
              </button>

              <button
                onClick={handleDownloadPdf}
                disabled={isGeneratingPdf}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-xs transition-all"
              >
                {isGeneratingPdf ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>Download PDF File</span>
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
              >
                <X className="w-4 h-4" />
                <span>Close Preview</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Bottom Quick-Close Button for Mobile/Deep Scroll */}
      <button
        onClick={onClose}
        className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-red-600 text-white text-xs font-bold shadow-2xl border border-slate-700 transition-all hover:scale-105 active:scale-95"
        title="Close Preview"
      >
        <X className="w-4 h-4" />
        <span>Close Preview</span>
      </button>

    </div>
  );
}
