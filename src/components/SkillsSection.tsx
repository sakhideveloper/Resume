import { skillCategories, technologiesIWorkWith } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Layout, 
  Wrench, 
  Cpu, 
  CheckCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  Compass
} from 'lucide-react';

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('interested') || category.toLowerCase().includes('knowledgeable')) {
      return <Compass className="w-5 h-5 text-emerald-600" />;
    }
    if (category.toLowerCase().includes('backend')) return <Server className="w-5 h-5 text-blue-600" />;
    if (category.toLowerCase().includes('frontend')) return <Layout className="w-5 h-5 text-indigo-600" />;
    if (category.toLowerCase().includes('tools')) return <Wrench className="w-5 h-5 text-sky-600" />;
    return <ShieldCheck className="w-5 h-5 text-purple-600" />;
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
            A comprehensive technical toolkit refined over 7+ years of building production-grade web applications, custom CMS solutions, distributed APIs, and active expansion into Python, Django & Flask.
          </p>
        </div>

        {/* Technologies I Work With - Visual Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Primary Technologies & Ecosystem
            </h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Open to Python, Django & Flask roles
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {technologiesIWorkWith.map((item) => {
              const isInterested = item.category === 'Interested to Work';
              return (
                <div
                  key={item.name}
                  className={`p-3.5 rounded-xl border transition-all group flex items-center gap-3 ${
                    isInterested
                      ? 'bg-emerald-50/50 hover:bg-emerald-50 border-emerald-200/90 shadow-2xs'
                      : 'bg-slate-50 hover:bg-blue-50/60 border-slate-200 hover:border-blue-200 shadow-2xs'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center font-bold text-xs shadow-2xs transition-colors ${
                      isInterested
                        ? 'bg-white border-emerald-300 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white'
                        : 'bg-white border-slate-200/80 text-blue-700 group-hover:bg-blue-600 group-hover:text-white'
                    }`}
                  >
                    {item.name.substring(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {isInterested && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Interested to work" />
                      )}
                    </div>
                    <div
                      className={`text-[11px] font-medium truncate ${
                        isInterested ? 'text-emerald-700 font-semibold' : 'text-slate-400'
                      }`}
                    >
                      {item.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((catGroup) => {
            const isInterestedGroup = catGroup.category.includes('Interested');
            return (
              <div
                key={catGroup.category}
                className={`rounded-2xl border p-6 sm:p-7 shadow-2xs flex flex-col justify-between transition-all ${
                  isInterestedGroup
                    ? 'bg-gradient-to-br from-emerald-50/70 via-teal-50/30 to-white border-emerald-300/80 hover:border-emerald-400 hover:shadow-sm'
                    : 'bg-slate-50/50 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border shadow-2xs ${
                        isInterestedGroup 
                          ? 'bg-white border-emerald-200 text-emerald-600' 
                          : 'bg-white border-slate-200'
                      }`}>
                        {getCategoryIcon(catGroup.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {catGroup.category}
                        </h3>
                        {catGroup.description && (
                          <p className="text-xs text-slate-600 mt-0.5">
                            {catGroup.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {catGroup.badge && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                        {catGroup.badge}
                      </span>
                    )}
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
                          className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium shadow-2xs transition-colors ${
                            isInterestedGroup
                              ? 'bg-white border-emerald-200 text-emerald-900 hover:border-emerald-400 hover:bg-emerald-50 font-semibold'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-blue-300 hover:text-blue-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
