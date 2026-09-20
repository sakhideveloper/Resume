import { skillCategories, technologiesIWorkWith } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Layout, 
  Wrench, 
  Cpu, 
  CheckCircle,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('backend')) return <Server className="w-5 h-5 text-blue-600" />;
    if (category.toLowerCase().includes('frontend')) return <Layout className="w-5 h-5 text-indigo-600" />;
    if (category.toLowerCase().includes('tools')) return <Wrench className="w-5 h-5 text-sky-600" />;
    return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-semibold mb-2">
            <Cpu className="w-3.5 h-3.5 text-indigo-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A comprehensive technical toolkit refined over 7+ years of building production-grade web applications, custom CMS solutions, and distributed APIs.
          </p>
        </div>

        {/* Technologies I Work With - Visual Grid */}
        <div className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Primary Technologies & Ecosystem
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {technologiesIWorkWith.map((item) => (
              <div
                key={item.name}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all group flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center font-bold text-xs text-blue-700 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    {getCategoryIcon(catGroup.category)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {catGroup.category}
                  </h3>
                </div>

                {/* Skills tags */}
                {catGroup.category === 'Core Strengths' ? (
                  <ul className="space-y-2.5 pt-2">
                    {catGroup.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                        <Zap className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {catGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium shadow-2xs hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {skill}
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
