import { educationHistory } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-900 text-xs font-semibold mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Solid computer science and software engineering foundation supporting rigorous full-stack development practices.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationHistory.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {edu.year}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
