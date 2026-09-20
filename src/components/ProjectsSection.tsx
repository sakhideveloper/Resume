import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Globe, 
  ArrowUpRight, 
  Briefcase 
} from 'lucide-react';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'recent', label: 'Recently Completed' },
    { id: 'laravel', label: 'Laravel & PHP' },
    { id: 'fullstack', label: 'Full Stack & Next.js' },
    { id: 'api', label: 'APIs & Third-Party' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'recent') return project.isRecent;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Featured & Recent Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Highlighted Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Scalable web platforms, custom Laravel systems, Next.js applications, and high-throughput API integrations built for international businesses.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recently Completed Spotlight Banner if on All or Recent */}
        {(activeCategory === 'all' || activeCategory === 'recent') && (
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <span>New Milestone</span>
                    <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                    <span>Recently Completed</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    Financier24 & Gratis Genieten Delivered
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    Successfully completed and launched two major Dutch web platforms: Financier24.nl (financial advisory portal) and Gratisgenieten.nl/en (multilingual leisure discovery portal).
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-center">
                <a
                  href="https://financier24.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 transition-colors"
                >
                  <span>financier24.nl</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://gratisgenieten.nl/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-xs border border-white/20 transition-colors"
                >
                  <span>gratisgenieten.nl/en</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div 
      className={`relative rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
        project.isRecent
          ? 'bg-gradient-to-b from-blue-50/50 to-white border-blue-200/90 shadow-sm hover:border-blue-400 hover:shadow-md'
          : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      {/* Top Card Header */}
      <div className="p-6 sm:p-7">
        
        {/* Badges row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {project.isRecent && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                <Sparkles className="w-3 h-3" />
                Recently Completed
              </span>
            )}
            {project.clientOrCompany && (
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-slate-400" />
                {project.clientOrCompany}
              </span>
            )}
          </div>

          {project.year && (
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
              {project.year}
            </span>
          )}
        </div>

        {/* Title and live link */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600">
            {project.title}
          </h3>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold shrink-0 transition-colors"
              title={`Visit live site ${project.liveUrl}`}
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Role subtitle */}
        {project.role && (
          <p className="text-xs font-semibold text-blue-700 mt-1">
            {project.role}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Key Contributions
            </div>
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Card Footer: Tech tags */}
      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
          >
            {project.liveUrl.replace('https://', '')}
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>

    </div>
  );
}
