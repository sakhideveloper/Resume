import { experiences } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-900 text-xs font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5 text-blue-700" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Over 7+ years of engineering leadership and hands-on full-stack development delivering scalable web solutions for clients in the US, Europe, Ghana, and Pakistan.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.current 
                    ? 'bg-blue-600 border-white ring-4 ring-blue-100' 
                    : 'bg-white border-slate-400 group-hover:border-blue-600 group-hover:ring-4 group-hover:ring-blue-50'
                }`} 
              />

              {/* Card */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-sm hover:border-slate-300 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-blue-700">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                  {exp.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-5 pt-3 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-400 mr-1">Stack:</span>
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
